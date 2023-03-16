import { Menu, ShoppingCart } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import logoImg from "../../assets/logo-book.svg";
import { Button } from "../Button";
import { SideBar } from "../SideBar";
import styles from "./styles.module.scss";

export const Header = () => {
   const { data } = useSession();
   const router = useRouter();

   const [sidebarOpen, setSidebarOpen] = useState(false);

   const handleLogin = () => {
      signIn();
   };

   const handleLogout = () => {
      signOut();
   };

   return (
      <div className={styles.container}>
         <Link href={"/"} className={styles.logoArea}>
            <Image src={logoImg} alt="" />
         </Link>
         <div className={styles.navContainer}>
            <div className={styles.navArea}>
               <Link
                  href={"/"}
                  className={`${router.pathname === "/" ? styles.active : ""}`}
               >
                  Home
               </Link>
               <Link
                  href={"/orders"}
                  className={`${
                     router.pathname === `/orders` ? styles.active : ""
                  }`}
               >
                  My orders
               </Link>
               {/* <Link
                  href={"/favorite"}
                  className={`${
                     router.pathname === "/favorite" ? styles.active : ""
                  }`}
               >
                  Favorites
               </Link> */}
            </div>
         </div>
         <div className={styles.menuArea}>
            <div className={styles.mobileMenu}>
               <Link href={"/cart"}>
                  <ShoppingCart size={26} className={styles.bag} />
               </Link>
               <Menu size={28} onClick={() => setSidebarOpen(true)} />
               <SideBar
                  open={sidebarOpen}
                  onClose={() => setSidebarOpen(false)}
               />
            </div>
            <div className={styles.desktopMenu}>
               <Link href={"/cart"}>
                  <ShoppingCart size={30} className={styles.bag} />
               </Link>
               {data ? (
                  <div className={styles.loggedArea}>
                     <p>Hi, {data.user?.name}!</p>
                     <button onClick={handleLogout}>SignOut</button>
                  </div>
               ) : (
                  <Button title="SignIn" onClick={handleLogin} />
               )}
            </div>
         </div>
      </div>
   );
};
