import { Address } from "@/types/Address";
import { Book } from "@/types/Book";
import { CartCookie } from "@/types/CartCookie";
import { CartItem } from "@/types/CartItem";
import { Order } from "@/types/Order";
import { Addresses } from "@/utils/Adresses";
import { Books } from "@/utils/Books";
import { Orders } from "@/utils/Orders";
import { useState } from "react";

export const useApi = () => {
   const books: Book[] = Books;

   return {
      getAllBooks: () => {
         return books;
      },

      getBook: (id: number) => {
         const book = books.filter((book) => book.id === id);
         return book[0];
      },

      getCartItems: (cartCookie: string) => {
         const cart: CartItem[] = [];
         if (!cartCookie) return cart;

         const cartJson: CartCookie[] = JSON.parse(cartCookie);
         for (let i in cartJson) {
            if (cartJson[i].id && cartJson[i].qt) {
               const book = books.filter(
                  (book) => book.id === cartJson[i].id
               )[0];
               cart.push({ qt: cartJson[i].qt, book });
            }
         }

         return cart;
      },
   };
};
