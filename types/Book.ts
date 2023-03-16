import { StaticImageData } from "next/image";

export type Book = {
   id: number;
   cover: StaticImageData;
   title: string;
   description: string[];
   category: string;
   author: string;
   publishingDate: string;
   pages: number;
   price: number;
};
