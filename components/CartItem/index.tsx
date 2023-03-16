import { useFormatter } from "@/hooks/useFormatter";
import { Book } from "@/types/Book";
import Image from "next/image";
import { QuantityCounter } from "../QuantityCounter";
import styles from "./styles.module.scss";

type Props = {
   book: Book;
   quantity: number;
   onChange: (newQuantity: number, itemId: number) => void;
   noEdit?: boolean;
};

export const CartItem = ({ book, quantity, onChange, noEdit }: Props) => {
   const formatter = useFormatter();

   return (
      <div className={styles.container}>
         <div className={styles.bookInfo}>
            <div className={styles.imageArea}>
               <Image src={book.cover} alt="" />
            </div>
            <div className={styles.infoArea}>
               <p className={styles.infoAuthor}>{book.author}</p>
               <p className={styles.infoTitle}>{book.title}</p>
               <div className={styles.quantityArea}>
                  <p className={styles.infoPrice}>
                     {formatter.formatPrice(book.price)}
                  </p>
                  {!noEdit ? (
                     <QuantityCounter
                        quantity={quantity}
                        onUpdateQuantity={(newQuantity: number) =>
                           onChange(newQuantity, book.id)
                        }
                        min={0}
                        small
                     />
                  ) : (
                     <div className={styles.staticQtArea}>
                        <p>Quant:</p>
                        <div className={styles.staticQt}>{quantity}</div>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};
