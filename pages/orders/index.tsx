import { Header } from "@/components/Header";
import { MobileHeader } from "@/components/MobileHeader";
import { OrderContext } from "@/contexts/OrderContext";
import { useFormatter } from "@/hooks/useFormatter";
import { Order } from "@/types/Order";
import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import styles from "../../styles/Orders.module.scss";

const Orders = () => {
   const { getOrders } = useContext(OrderContext);
   const [ordersData, setOrdersData] = useState<Order[]>();

   const formatter = useFormatter();
   const router = useRouter();

   useEffect(() => {
      let orders: Order[] = [];
      getOrders(orders);
      setOrdersData(orders);
   }, []);

   const statusList = {
      preparing: {
         title: "Preparing",
      },
      sent: {
         title: "Sent",
      },
      done: {
         title: "Delivered",
      },
   };

   return (
      <div className={styles.container}>
         <Head>
            <title>BookNext | Orders</title>
         </Head>
         <header>
            <div className={styles.mobileHeader}>
               <MobileHeader title="Orders" returnLink="/" />
            </div>
            <div className={styles.desktopHeader}>
               <Header />
            </div>
         </header>

         <div className={styles.contentContainer}>
            <div className={styles.ordersQt}>
               {ordersData ? ordersData.length : "0"}{" "}
               {ordersData && ordersData.length > 1 ? "orders" : "order"}
            </div>
            <div className={styles.ordersArea}>
               {ordersData?.map((order) => (
                  <div
                     key={order.id}
                     className={styles.orderItem}
                     onClick={() => router.push(`/orders/${order.id}`)}
                  >
                     <div className={styles.orderHeader}>
                        <div className={styles.orderTitle}>
                           <p>{`Order - ${order.id.slice(0, 5)}`}</p>
                           <div className={styles.orderStatus}>
                              {statusList[order.status].title}
                           </div>
                        </div>
                        <div className={styles.orderDate}>
                           {formatter.formatDate(order.orderDate)}
                        </div>
                     </div>
                     <div className={styles.orderBottom}>
                        <div
                           className={styles.orderDetailBtn}
                           onClick={() => router.push(`/orders/${order.id}`)}
                        >
                           Details
                        </div>
                        <p>{formatter.formatPrice(order.total)}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Orders;

export const getServerSideProps: GetServerSideProps = async (context) => {
   const session = await getSession(context);
   if (!session)
      return { redirect: { destination: "/signIn", permanent: false } };

   return {
      props: {},
   };
};
