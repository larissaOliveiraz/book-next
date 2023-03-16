import { faker } from "@faker-js/faker";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
   secret: process.env.NEXTAUTH_SECRET,
   providers: [
      Credentials({
         id: "credentials",
         credentials: {
            name: { label: "Nome", type: "text" },
            email: { label: "E-mail", type: "text" },
         },
         authorize: (credentials) => {
            if (credentials && credentials.name && credentials.email) {
               return {
                  id: faker.datatype.uuid(),
                  name: credentials.name,
                  email: credentials.email,
               };
            }
            return null;
         },
      }),
   ],

   pages: {
      signIn: "/signIn",
   },
};

export default NextAuth(authOptions);
