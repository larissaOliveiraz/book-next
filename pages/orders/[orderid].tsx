import { CartItem } from "@/components/CartItem";
import { Header } from "@/components/Header";
import { MobileHeader } from "@/components/MobileHeader";
import { OrderContext } from "@/contexts/OrderContext";
import { useFormatter } from "@/hooks/useFormatter";
import { Order } from "@/types/Order";
import { CreditCard, MapPin, Newspaper } from "lucide-react";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
import styles from "../../styles/OrderInfo.module.scss";
import { authOptions } from "../api/auth/[...nextauth]";

const OrderInfo = ({ orderid }: OrderInfoProps) => {
   const { getOrders } = useContext(OrderContext);
   const formatter = useFormatter();
   const { data } = useSession();

   useEffect(() => {
      const orders: Order[] = [];
      data?.user && getOrders(orders);
      setOrdersData(orders);
   }, []);

   const [ordersData, setOrdersData] = useState<Order[]>();
   const order = ordersData?.filter((order) => order.id === orderid)[0];

   const statusList = {
      preparing: {
         title: "Preparing your order",
         bar: "35%",
      },
      sent: {
         title: "Sending your order",
         bar: "70%",
      },
      done: {
         title: "Order delivered",
         bar: "100%",
      },
   };

   return (
      <div className={styles.container}>
         <Head>
            <title>BookNext | {`Order - ${orderid.slice(0, 5)}`}</title>
         </Head>
         {order && (
            <>
               <MobileHeader
                  title={`Order: ${order?.id.slice(0, 5)}`}
                  returnLink="/orders"
               />
               <header>
                  <Header />
               </header>

               <div className={styles.contentContainer}>
                  <div
                     className={styles.orderNameDesk}
                  >{`Order - ${order.id.slice(0, 5)}`}</div>
                  {/* Status */}
                  <div className={styles.statusArea}>
                     <p>{statusList[order.status].title}</p>
                     <div className={styles.statusBar}>
                        <div
                           className={styles.statusPercentage}
                           style={{
                              width: statusList[order.status].bar,
                           }}
                        ></div>
                     </div>
                  </div>

                  {/* Order Items */}
                  <p className={styles.generalSubtitle}>Order items:</p>
                  <div className={styles.cartItemsArea}>
                     {order.books.map((item) => (
                        <CartItem
                           key={item.book.id}
                           book={item.book}
                           quantity={item.qt}
                           onChange={() => {}}
                           noEdit
                        />
                     ))}
                  </div>

                  {/* Order Info */}
                  <div className={styles.orderInfoArea}>
                     <p className={styles.generalSubtitle}>Delivery address:</p>
                     <div className={styles.shippingAddress}>
                        <MapPin />
                        <p>
                           {order.shippingAddress.street},{" "}
                           {order.shippingAddress.number}
                        </p>
                     </div>

                     <p className={styles.generalSubtitle}>Payment type:</p>
                     <div className={styles.paymentTypeArea}>
                        {order.paymentType === "card" ? (
                           <div className={styles.paymentType}>
                              <CreditCard />
                              <p>Card</p>
                           </div>
                        ) : (
                           <div className={styles.paymentType}>
                              <Newspaper />
                              <p>Transfer</p>
                           </div>
                        )}
                     </div>

                     <p className={styles.generalSubtitle}>
                        Order information:
                     </p>
                     <div className={styles.orderInfo}>
                        <div className={styles.orderItem}>
                           <p>Subtotal</p>
                           <span>{formatter.formatPrice(order.subtotal)}</span>
                        </div>
                        <div className={styles.orderItem}>
                           <p>Shipping price</p>
                           <span>
                              {formatter.formatPrice(order.shippingPrice)}
                           </span>
                        </div>
                        <div className={styles.orderTotal}>
                           <p className={styles.orderTotalTitle}>Total</p>
                           <span className={styles.orderTotalPrice}>
                              {formatter.formatPrice(order.total)}
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </>
         )}
      </div>
   );
};

export default OrderInfo;

type OrderInfoProps = {
   orderid: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { orderid } = context.query;

   const session = getServerSession(context.req, context.res, authOptions);
   if (!session)
      return { redirect: { destination: "/signIn", permanent: false } };

   return {
      props: {
         orderid,
      },
   };
};
