import { Button } from "@/components/Button";
import { CartItem } from "@/components/CartItem";
import { Header } from "@/components/Header";
import { InputField } from "@/components/InputField";
import { MobileHeader } from "@/components/MobileHeader";
import { useApi } from "@/hooks/useApi";
import { useFormatter } from "@/hooks/useFormatter";
import { CartCookie } from "@/types/CartCookie";
import { CartItem as CartItemType } from "@/types/CartItem";
import { getCookie, setCookie } from "cookies-next";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Cart.module.scss";

const Cart = ({ cart }: CartProps) => {
   const formatter = useFormatter();
   const router = useRouter();

   //Cart
   const [cartData, setCartData] = useState<CartItemType[]>(cart);
   const handleChangeCart = (newQuantity: number, itemId: number) => {
      const temporaryCart: CartItemType[] = [...cartData];
      const cartItemIndex = temporaryCart.findIndex(
         (item) => item.book.id === itemId
      );

      //delete item from cart if quantity < 1
      if (newQuantity > 0) {
         temporaryCart[cartItemIndex].qt = newQuantity;
      } else {
         delete temporaryCart[cartItemIndex];
      }

      let newCart: CartItemType[] = temporaryCart.filter((item) => item);
      setCartData(newCart);

      //update cart Cookie
      let cartCookie: CartCookie[] = [];
      for (let i in newCart) {
         cartCookie.push({
            id: newCart[i].book.id,
            qt: newCart[i].qt,
         });
      }
      setCookie("cart", JSON.stringify(cartCookie));
   };

   //Shipping
   const [showShippingInfo, setShowShippingInfo] = useState(false);
   const [shippingPrice, setShippingPrice] = useState(0);
   const handleShippingInfo = () => {
      setShowShippingInfo(true);
      setShippingPrice(9.9);
   };

   //Order Info
   const [subtotal, setSubtotal] = useState(0);

   useEffect(() => {
      let countSub = 0;
      for (let i in cartData) {
         const itemPrice = cartData[i].book.price * cartData[i].qt;
         countSub += itemPrice;
      }
      setSubtotal(countSub);
   }, [cartData]);

   return (
      <div className={styles.container}>
         <Head>
            <title>BookNext | Cart</title>
         </Head>
         <MobileHeader returnLink="/" title="Carrinho" />
         <header>
            <Header />
         </header>

         {/* Cart */}
         <p className={styles.itemsQt}>
            {cartData.length} {cartData.length > 1 ? "itens" : "item"}
         </p>
         <div className={styles.cartItemsArea}>
            {cartData.map((item) => (
               <CartItem
                  key={item.book.id}
                  book={item.book}
                  quantity={item.qt}
                  onChange={handleChangeCart}
               />
            ))}
         </div>

         {/* Shipping */}
         <div className={styles.shipping}>
            <p>Calculate delivery time:</p>
            <div className={styles.shippingForm}>
               <InputField type="text" placeholder="Type your post-code" />
               <Button title="Calculate" onClick={handleShippingInfo} />
            </div>
            {showShippingInfo && (
               <div className={styles.shippingInfo}>
                  <div className={styles.shippingDate}>
                     <p>Delivery time</p>
                     <span>9 days</span>
                  </div>
                  <div className={styles.shippingPrice}>
                     <p>Estimated shipping price</p>
                     <span>{formatter.formatPrice(shippingPrice)}</span>
                  </div>
               </div>
            )}
         </div>

         {/* Order Info */}
         <p className={styles.orderTitle}>Order information:</p>
         <div className={styles.orderInfo}>
            <div className={styles.orderItem}>
               <p>Subtotal</p>
               <span>{formatter.formatPrice(subtotal)}</span>
            </div>
            <div className={styles.orderItem}>
               <p>Shipping Price</p>
               <span>
                  {showShippingInfo
                     ? formatter.formatPrice(shippingPrice)
                     : "Not calculated"}
               </span>
            </div>
            <div className={styles.orderTotal}>
               <p className={styles.orderTotalTitle}>Total</p>
               <span className={styles.orderTotalPrice}>
                  {formatter.formatPrice(subtotal + shippingPrice)}
               </span>
            </div>
         </div>

         <div className={styles.finishBtnArea}>
            <Button
               title="Continue"
               onClick={() => router.push("/finishpurchase")}
            />
         </div>
      </div>
   );
};

export default Cart;

type CartProps = {
   cart: CartItemType[];
};

export const getServerSideProps: GetServerSideProps = async (context) => {
   const api = useApi();

   // Get cart
   const cartCookie = getCookie("cart", context);
   const cart = api.getCartItems(cartCookie as string);

   return {
      props: {
         cart,
      },
   };
};
