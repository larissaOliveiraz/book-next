import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useApi } from "@/hooks/useApi";
import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { SearchInput } from "@/components/SearchInput";
import { BookCategory } from "@/components/BookCategory/intex";
import { Book } from "@/types/Book";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";

const Home = ({ books }: HomeProps) => {
   const router = useRouter();

   const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
   const [search, setSearch] = useState("");

   const handleSearchBook = (searchValue: string) => setSearch(searchValue);
   useEffect(() => {
      let filteredSearch: Book[] = [];
      for (let book of books) {
         if (book.title.toLowerCase().indexOf(search.toLowerCase()) > -1) {
            filteredSearch.push(book);
         }
      }
      setFilteredBooks(filteredSearch);
   }, [search]);

   const techBooks = books.filter((book) => book.category === "Technology");
   const historyBooks = books.filter((book) => book.category === "History");
   const fictionBooks = books.filter((book) => book.category === "Fiction");

   return (
      <>
         <Head>
            <title>Book Ecommerce</title>
            <meta name="description" content="Book ecommerce app" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
         </Head>

         <div className={styles.container}>
            <header>
               <Header />
            </header>

            <main className={styles.main}>
               {/* TOP INTRO */}
               <div className={styles.topIntro}>
                  <div className={styles.bannerContainer}>
                     <Banner />
                  </div>
                  <div className={styles.topIntroText}>
                     <h2>Welcome to BookNext!</h2>
                  </div>
               </div>

               {/* CATALOGUE */}
               <div className={styles.bookCatalogue}>
                  <div className={styles.searchInput}>
                     <SearchInput onSearch={handleSearchBook} />
                  </div>

                  {search ? (
                     <div className={styles.searchedBooksContainer}>
                        {filteredBooks.map((item) => (
                           <div
                              key={item.id}
                              className={styles.searchItem}
                              onClick={() => router.push(`/books/${item.id}`)}
                           >
                              <Image src={item.cover} alt="" />
                           </div>
                        ))}
                     </div>
                  ) : (
                     <div className={styles.bookCategories}>
                        <div className={styles.bookCategory}>
                           <BookCategory
                              title="Technology books"
                              books={techBooks}
                           />
                           <BookCategory
                              title="Fiction books"
                              books={fictionBooks}
                           />
                           <BookCategory
                              title="History books"
                              books={historyBooks}
                           />
                        </div>
                     </div>
                  )}
               </div>
            </main>
         </div>
      </>
   );
};

export default Home;

type HomeProps = {
   books: Book[];
};

export const getServerSideProps = () => {
   const api = useApi();

   const books = api.getAllBooks();

   return {
      props: { books },
   };
};
