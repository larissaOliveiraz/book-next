import { OrderContextProvider } from "@/contexts/OrderContext";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.scss";

export default function App({
   Component,
   pageProps: { session, ...pageProps },
}: AppProps) {
   return (
      <SessionProvider session={session}>
         <OrderContextProvider>
            <Component {...pageProps} />
         </OrderContextProvider>
      </SessionProvider>
   );
}
