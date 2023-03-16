import { OrderContext } from "@/contexts/OrderContext";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Button } from "../Button";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "./styles.module.scss";
import { Heart, Home, LogOut, Scroll, X } from "lucide-react";
import Link from "next/link";

type Props = {
   open: boolean;
   onClose: () => void;
};

export const SideBar = ({ open, onClose }: Props) => {
   const { data } = useSession();

   return (
      <div className={styles.container} style={{ width: open ? "75vw" : "0" }}>
         <div className={styles.contentContainer}>
            <div className={styles.header}>
               <div className={styles.loginArea}>
                  {data ? (
                     <div className={styles.userInfo}>
                        <strong>Hi, {data.user?.name}</strong>
                     </div>
                  ) : (
                     <Button title="SignIn" onClick={() => signIn()} invert />
                  )}
               </div>
               <div className={styles.closeBtn} onClick={onClose}>
                  <X size={28} />
               </div>
            </div>
            <div className={styles.menuArea}>
               <div className={styles.menu}>
                  <Link href={"/"} className={styles.menuItem}>
                     <Home size={24} />
                     <p>Home</p>
                  </Link>
                  <Link href={"/orders"} className={styles.menuItem}>
                     <Scroll size={24} />
                     <p>My orders</p>
                  </Link>
                  {/* <Link href={"/favorite"} className={styles.menuItem}>
                     <Heart size={24} />
                     <p>Favorites</p>
                  </Link> */}
               </div>
               {data && (
                  <div className={styles.logoutBtn} onClick={() => signOut()}>
                     <LogOut size={24} />
                     <p>SignOut</p>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};
