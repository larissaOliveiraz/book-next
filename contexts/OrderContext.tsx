import { Address } from "@/types/Address";
import { CartItem } from "@/types/CartItem";
import { Logged } from "@/types/Login";
import { Order } from "@/types/Order";
import { Orders } from "@/types/Orders";
import { useSession } from "next-auth/react";
import { createContext, ReactNode } from "react";

type ProviderProps = {
   children: ReactNode;
};

type OrderContextType = {
   getOrders: (userId: string, list: Order[]) => void;
   getLoginInfo: () => boolean;
};

export const OrderContext = createContext({} as OrderContextType);

export const OrderContextProvider = ({ children }: ProviderProps) => {
   const { data } = useSession();

   const getOrders = (id: string, list: Order[]) => {
      const orderStorage = localStorage.getItem(
         `orders:${data?.user && data.user.email}`
      );
      const orderJson: Orders[] =
         orderStorage && JSON.parse(orderStorage as string);
      for (let x in orderJson) {
         if (orderJson[x].id === id) {
            for (let order of orderJson[x].ordersUser) {
               list.push(order);
            }
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
