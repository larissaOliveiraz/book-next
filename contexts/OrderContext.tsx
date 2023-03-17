import { Logged } from "@/types/Login";
import { Order } from "@/types/Order";
import { Orders } from "@/types/Orders";
import { useSession } from "next-auth/react";
import { createContext, ReactNode, useEffect, useState } from "react";

type ProviderProps = {
   children: ReactNode;
};

type OrderContextType = {
   getOrders: (list: Order[]) => void;
   getLoginInfo: () => boolean;
};

export const OrderContext = createContext({} as OrderContextType);

export const OrderContextProvider = ({ children }: ProviderProps) => {
   const { data } = useSession();

   const getOrders = (list: Order[]) => {
      if (data?.user) {
         const orderStorage = localStorage.getItem(`orders:${data.user.email}`);
         const orderJson: Order[] =
            orderStorage && JSON.parse(orderStorage as string);
         for (let i in orderJson) {
            list.push(orderJson[i]);
         }
      }
   };

   const getLoginInfo = () => {
      const loginStorage = localStorage.getItem("logged");
      const loginJson: Logged =
         loginStorage && JSON.parse(loginStorage as string);
      return loginJson.status;
   };

   return (
      <OrderContext.Provider value={{ getOrders, getLoginInfo }}>
         {children}
      </OrderContext.Provider>
   );
};
