import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { registerSchema } from "~/components/auth/registerSchema";
import { readFile } from "fs/promises";
import Handlebars from "handlebars";

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

  const emailVerificationCode = await bcrypt.hash(Date.now().toString(), 10);

  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      password: hashedPassword,
      emailVerified: false,
      emailVerificationCode: emailVerificationCode,
    },
  });

  sendVerificationEmail(body.email, emailVerificationCode);

  return { success: true, user: newUser };
});

const sendVerificationEmail = async (
  email: string,
  verificationCode: string,
) => {
  const { sendMail } = useNodeMailer();

  const templatePath = "mail-templates/account-confirmation.html";
  const templateSource = await readFile(templatePath, "utf8");

  const template = Handlebars.compile(templateSource);
  const htmlContent = template({
    url: `http://localhost:3000/account/confirm?code=${verificationCode}`,
  });

  sendMail({
    subject: "Account confirmation",
    to: email,
    html: htmlContent,
  });
};

// @todo -> add email response check
// add email response check with info for user to check his email
// add email confimration logic on account/confirm page
// add validation methods for accountConfirmed -> for providers skip, for login by email and password check if account is confirmed
