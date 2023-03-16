import { GetServerSideProps } from "next";

import styles from "../../styles/BookInfo.module.scss";
import { useState } from "react";
import { MobileHeader } from "@/components/MobileHeader";
import { Book, ChevronDown, ChevronUp } from "lucide-react";
import { useApi } from "@/hooks/useApi";
import { Book as BookType } from "@/types/Book";
import { useFormatter } from "@/hooks/useFormatter";
import { Button } from "@/components/Button";
import { QuantityCounter } from "@/components/QuantityCounter";
import { useRouter } from "next/router";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { CartCookie } from "@/types/CartCookie";
import Image from "next/image";

const BookInfo = ({ book }: BookInfoProps) => {
   const [openDesc, setOpenDesc] = useState(false);
   const [quantity, setQuantity] = useState(1);

   const router = useRouter();
   const formatter = useFormatter();

   const handleUpdateQuantity = (newValue: number) => {
      setQuantity(newValue);
   };

   const handleAddToCart = () => {
      const cart: CartCookie[] = [];

      //create or get existing cart
      if (hasCookie("cart")) {
         const cartCookie = getCookie("cart");
         const cartJson: CartCookie[] = JSON.parse(cartCookie as string);

         for (let i in cartJson) {
            if (cartJson[i].id && cartJson[i].qt) {
               cart.push(cartJson[i]);
            }
         }
      }

      //if item already in cart only increase the quantity
      const cartIndex = cart.findIndex((item) => item.id === book.id);
      if (cartIndex > -1) {
         cart[cartIndex].qt += quantity;
      } else {
         cart.push({ id: book.id, qt: quantity });
      }

      setCookie("cart", JSON.stringify(cart));

      router.push("/cart");
   };

   return (
      <div className={styles.container}>
         <div className={styles.headerArea}>
            <MobileHeader title="Book" returnLink="/" invert />
         </div>
         <div className={styles.topBg}></div>

         <div className={styles.bookContentContainer}>
            <div className={styles.bookContent}>
               {/* BOOK COVER */}
               <div className={styles.bookCover}>
                  <Image src={book.cover} alt="" />
               </div>

               <div className={styles.restOfInfo}>
                  {/* BOOK TEXT INFO */}
                  <div className={styles.bookText}>
                     <span>{book.category}</span>
                     <h3>{book.title}</h3>
                     <p className={styles.bookAuthor}>{book.author}</p>
                     <div className={styles.bookPages}>
                        <Book size={24} />
                        <p>{book.pages} pages</p>
                     </div>
                  </div>

                  {/* DESCRIPTION */}
                  <div
                     className={styles.bookDescriptionContainer}
                     onClick={() => setOpenDesc(!openDesc)}
                  >
                     <div
                        className={`${styles.bookDescription} ${
                           openDesc ? styles.heighDescription : ""
                        }`}
                     >
                        {book.description.map((item, index) => (
                           <p key={index}>{item}</p>
                        ))}
                     </div>
                     <div className={styles.readMore}>
                        {!openDesc ? (
                           <ChevronDown size={24} />
                        ) : (
                           <ChevronUp size={24} />
                        )}
                     </div>
                  </div>

                  <div className={styles.productArea}>
                     <div className={styles.productInfo}>
                        <div className={styles.quantityInfo}>
                           <QuantityCounter
                              quantity={quantity}
                              onUpdateQuantity={handleUpdateQuantity}
                              min={1}
                           />
                        </div>
                        <div className={styles.priceInfo}>
                           {formatter.formatPrice(book.price)}
                        </div>
                     </div>
                     <Button title="Add to cart" onClick={handleAddToCart} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BookInfo;

type BookInfoProps = {
   book: BookType;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { bookid } = context.query;
   const api = useApi();

   const book = api.getBook(parseInt(bookid as string));
   if (!book) return { redirect: { destination: "/", permanent: false } };

   return {
      props: { book },
   };
};
