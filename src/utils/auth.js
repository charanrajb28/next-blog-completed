// import { PrismaAdapter } from "@auth/prisma-adapter";
// import GithubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
// import prisma from "./connect";
// import { getServerSession } from "next-auth";

// export const authOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//   ],
// };

// export const getAuthSession = () => getServerSession(authOptions);


import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./connect";
import { getServerSession } from "next-auth";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // import prisma from './connect'  // your prisma client singleton file

CredentialsProvider({
  name: "Email/Password",
  credentials: {
    email: { label: "Email", type: "email" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials) {
    try {
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
            returnSecureToken: true,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.error.message);

      // Upsert the user in Prisma DB
      const user = await prisma.user.upsert({
        where: { email: data.email },
        update: {},
        create: {
          id: data.localId,      // optional: use Firebase UID or omit to auto-generate
          email: data.email,
          name: data.displayName || data.email,
          // image: data.photoUrl || null,  // if available from Firebase
        },
      });

      return user;
    } catch (err) {
      console.error("Firebase Auth Error:", err.message);
      return null;
    }
  },
})
,
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login", // Optional: redirect to your login UI
  },
};

export const getAuthSession = () => getServerSession(authOptions);
export const dynamic = "force-dynamic";