import { Book } from "@/types/Book";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

type Props = {
   title: string;
   books: Book[];
};

export const BookCategory = ({ title, books }: Props) => {
   return (
      <div className={styles.container}>
         <h3>{title}</h3>
         <div className={styles.books}>
            {books.map((book) => (
               <Link
                  key={book.id}
                  href={`/books/${book.id}`}
                  className={styles.bookItem}
               >
                  <Image src={book.cover} alt="" priority />
               </Link>
            ))}
         </div>
      </div>
   );
};
