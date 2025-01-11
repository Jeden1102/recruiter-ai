import GithubProvider from "next-auth/providers/github";
import LinkedInProvider from "next-auth/providers/linkedin";
import bcrypt from "bcrypt";
import { loginSchema } from "~~/components/auth/loginSchema";

import { NuxtAuthHandler } from "#auth";
import Credentials from "next-auth/providers/credentials";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type TCredentials = {
  email: string;
  password: string;
};

type LinkedInProfile = {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  email: string;
};

export default NuxtAuthHandler({
  secret: useRuntimeConfig().authSecret,
  providers: [
    GithubProvider.default({
      clientId: useRuntimeConfig().auth.github.clientId,
      clientSecret: useRuntimeConfig().auth.github.clientSecret,
    }),
    LinkedInProvider.default({
      clientId: useRuntimeConfig().auth.linkedin.clientId,
      clientSecret: useRuntimeConfig().auth.linkedin.clientSecret,
      wellKnown:
        "https://www.linkedin.com/oauth/.well-known/openid-configuration",
      authorization: {
        params: {
          scope: "openid profile email",
        },
      },
      async profile(profile: LinkedInProfile) {
        return {
          id: profile.sub,
          name: profile.name,
          firstname: profile.given_name,
          lastname: profile.family_name,
          email: profile.email,
        };
      },
    }),
    Credentials.default({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: TCredentials, req: any) {
        try {
          const data = loginSchema.parse({
            email: credentials?.email,
            password: credentials?.password,
          });

          const user = await prisma.user.findUnique({
            where: { email: credentials?.email },
          });

          if (
            user &&
            user.password &&
            (await bcrypt.compare(credentials.password, user.password))
          ) {
            return { id: user.id, email: user.email };
          }

          throw new Error("Invalid credentials");
        } catch (error) {
          console.error("Validation error:", error);
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      const existingUser = await prisma.user.findUnique({
        where: { email: user.email || "" },
      });

      if (!existingUser) {
        await prisma.user.create({
          data: {
            email: user.email || "",
            provider: account?.provider,
            providerAccountId: account?.providerAccountId,
          },
        });
      }

      return true;
    },
  },
  pages: {
    signIn: "/login",
  },
});
