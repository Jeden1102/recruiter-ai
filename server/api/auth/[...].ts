import GithubProvider from "next-auth/providers/github";
import LinkedInProvider from "next-auth/providers/linkedin";
import { loginSchema } from "~~/components/auth/loginSchema";

import { NuxtAuthHandler } from "#auth";
import Credentials from "next-auth/providers/credentials";

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
      async profile(profile) {
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
      async authorize(credentials, req) {
        try {
          const data = loginSchema.parse({
            email: credentials?.email,
            password: credentials?.password,
          });
          return credentials;
        } catch (error) {
          console.error("Validation error:", error);
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log(user, account, profile, email, credentials, "here");
      return true;
    },
  },
  pages: {
    signIn: "/login",
  },
});
