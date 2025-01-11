import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { registerSchema } from "~/components/auth/registerSchema";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const data = registerSchema.parse({
    email: body?.email,
    password: body?.password,
    passwordRepeat: body?.passwordRepeat,
  });

  const existingUser = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (existingUser) {
    if (existingUser.password !== null) {
      throw createError({ statusMessage: "E-mail already in use" });
    } else {
      // User previously registered without a password - provider.
      const hashedPassword = await bcrypt.hash(body.password, 10);

      const updatedUser = await prisma.user.update({
        where: { email: body.email },
        data: {
          password: hashedPassword,
        },
      });

      return { success: true, user: updatedUser };
    }
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);

  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      password: hashedPassword,
    },
  });

  return { success: true, user: newUser };
});
