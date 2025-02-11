import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    id: string;
    user: {
      name: string;
      email: string;
      avatar: string;
      role: "admin" | "manager" | "user";
      provider: string;
    };
  }
}
