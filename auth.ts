import NextAuth, { DefaultSession } from "next-auth"
import { UserRole } from "@prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter"

import { getUserById } from "./data/user";
import { db } from "./lib/db"
import authConfig from "./auth.config"


export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
  
    async session({ token, session }) { 
      console.log({ sessionToken: token, session, })     
      if (token.sub && session.user) {
      session.user.id = token.sub;
    }

   

    if (token.role && session.user) {
      session.user.role = token.role as UserRole;
    }
      return session;
      
    },
    async jwt({ token }) {    
      if (!token.sub) return token; 

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.role = existingUser.role;

      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt"},
  ...authConfig, 
})