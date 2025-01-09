import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().min(2).max(50).email(),
  password: z.string().min(2).max(50),
});

export type AuthSchema = z.infer<typeof loginSchema>;