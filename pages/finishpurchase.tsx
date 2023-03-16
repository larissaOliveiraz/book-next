import { Button } from "@/components/Button";
import { CartItem } from "@/components/CartItem";
import { Header } from "@/components/Header";
import { MobileHeader } from "@/components/MobileHeader";
import { useApi } from "@/hooks/useApi";
import { useFormatter } from "@/hooks/useFormatter";
import { CartItem as CartItemType } from "@/types/CartItem";
import { getCookie, setCookie } from "cookies-next";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import styles from "../styles/Finish.module.scss";
import { ChevronDown, CreditCard, MapPin, Scroll } from "lucide-react";
import { Address } from "@/types/Address";
import { Addresses } from "@/utils/Adresses";
import { Order } from "@/types/Order";
import { OrderContext } from "@/contexts/OrderContext";
import { faker } from "@faker-js/faker";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import Head from "next/head";

const FinishPurchase = ({ cart }: FinishPurchaseProps) => {
   const { getOrders } = useContext(OrderContext);
   const formatter = useFormatter();
   const router = useRouter();
   const { data } = useSession();

   const addresses: Address[] = Addresses;
   const [cartData, setCartData] = useState<CartItemType[]>(cart);

   //Shipping
   const [showAddressBox, setShowAddressBox] = useState(false);
   const [shippingAddress, setShippingAddress] = useState<Address>(
      Addresses[0]
   );
   const [shippingPrice, setShippingPrice] = useState(
      Math.floor(Math.random() * 9) + 1
   );
   const handleShippingInfo = (address: Address) => {
      setShippingPrice(Math.floor(Math.random() * 9) + 1);
      setShippingAddress(address);
      setShowAddressBox(false);
   };

   //Payment
   const [paymentType, setPaymentType] = useState<"card" | "slip">("card");

   //Order Info
   const [subtotal, setSubtotal] = useState(0);
   const total = subtotal + shippingPrice;
   useEffect(() => {
      let countSub = 0;
      for (let i in cartData) {
         const itemPrice = cartData[i].book.price * cartData[i].qt;
         countSub += itemPrice;
      }
      setSubtotal(countSub);
   }, []);

   //Status
   const statusList = ["preparing", "sent", "done"];
   const status = statusList[Math.floor(Math.random() * 2.99)];

   const handleFinishPurchase = async () => {
      const newOrder: Order = {
         id: faker.datatype.uuid(),
         books: cart,
         status: status as "preparing" | "sent" | "done",
         orderDate: new Date().toString(),
         paymentType,
         shippingAddress,
         shippingPrice,
         subtotal,
         total,
      };

      const orders: Order[] = [];
      data?.user && getOrders(data.user.email as string, orders);

      localStorage.setItem(
         `orders:${data?.user && data.user.email}`,
         JSON.stringify([
            { id: data?.user?.email, ordersUser: [...orders, newOrder] },
         ])
      );

      setCookie("cart", JSON.stringify([]));
      router.push("/orders");
   };

   return (
      <div className={styles.container}>
         <Head>
            <title>BookNext | Finish</title>
         </Head>
         <MobileHeader returnLink="/" title="Payment" />
         <header>
            <Header />
         </header>

         {/* Cart */}
         <p className={styles.generalSubtitle}>Order Items:</p>
         <div className={styles.cartItemsArea}>
            {cartData.map((item) => (
               <CartItem
                  key={item.book.id}
                  book={item.book}
                  quantity={item.qt}
                  onChange={() => {}}
                  noEdit
               />
            ))}
         </div>

         {/* Shipping */}
         <p className={styles.generalSubtitle}>
            Choose the delivering address:
         </p>
         <div className={styles.addressArea}>
            <div className={styles.addressInput}>
               <div className={styles.addressFormArea}>
                  <div
                     className={styles.addressSelect}
                     onClick={() => setShowAddressBox(!showAddressBox)}
                  >
                     <MapPin size={24} />
                     <div>
                        {shippingAddress?.street} {shippingAddress?.number}
                     </div>
                     <ChevronDown size={24} />
                  </div>
               </div>
               {showAddressBox && (
                  <div className={styles.addressContent}>
                     {addresses.map((address) => (
                        <div
                           key={address.id}
                           className={styles.addressOption}
                           onClick={() => handleShippingInfo(address)}
                        >
                           {address.street}, {address.number}
                        </div>
                     ))}
                  </div>
               )}
            </div>
         </div>

         {/* Payment */}
         <p className={styles.generalSubtitle}>Payment type:</p>
         <div className={styles.paymentArea}>
            <div className={styles.paymentInput}>
               <div
                  onClick={() => setPaymentType("card")}
                  className={styles.paymentBtn}
                  style={{
                     backgroundColor:
                        paymentType === "card" ? "#13293d" : "#ccc",
                     color: paymentType === "card" ? "#e2e2e2" : "#1b1b1b",
                  }}
               >
                  <CreditCard size={24} /> Card
               </div>
               <div
                  onClick={() => setPaymentType("slip")}
                  className={styles.paymentBtn}
                  style={{
                     backgroundColor:
                        paymentType === "slip" ? "#13293d" : "#ccc",
                     color: paymentType === "slip" ? "#e2e2e2" : "#1b1b1b",
                  }}
               >
                  <Scroll size={24} /> Transfer
               </div>
            </div>
         </div>

         {/* Order Info */}
         <p className={styles.generalSubtitle}>Order information:</p>
         <div className={styles.orderInfo}>
            <div className={styles.orderItem}>
               <p>Subtotal</p>
               <span>{formatter.formatPrice(subtotal)}</span>
            </div>
            <div className={styles.orderItem}>
               <p>Shipping Price</p>
               <span>{formatter.formatPrice(shippingPrice)}</span>
            </div>
            <div className={styles.orderTotal}>
               <p className={styles.orderTotalTitle}>Total</p>
               <span className={styles.orderTotalPrice}>
                  {formatter.formatPrice(subtotal + shippingPrice)}
               </span>
            </div>
         </div>

         <div className={styles.finishBtnArea}>
            <Button title="Finish Purchase" onClick={handleFinishPurchase} />
         </div>
      </div>
   );
};

export default FinishPurchase;

type FinishPurchaseProps = {
   cart: CartItemType[];
};

export const getServerSideProps: GetServerSideProps = async (context) => {
   const api = useApi();

   const session = await getServerSession(
      context.req,
      context.res,
      authOptions
   );
   if (!session)
      return { redirect: { destination: "/signIn", permanent: false } };

   const cartCookie = getCookie("cart", context);
   const cart = api.getCartItems(cartCookie as string);

   return {
      props: {
         cart,
      },
   };
};
