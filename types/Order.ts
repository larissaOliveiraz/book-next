import { Address } from "./Address";
import { Book } from "./Book";
import { CartItem } from "./CartItem";

export type Order = {
   id: string;
   orderDate: string;
   status: "preparing" | "sent" | "done";
   shippingAddress: Address;
   shippingPrice: number;
   paymentType: "card" | "slip";
   books: CartItem[];
   subtotal: number;
   total: number;
};
