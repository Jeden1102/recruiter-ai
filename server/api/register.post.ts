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

      try {
        const code = await sendVerificationEmail(body.email);

        const updatedUser = await prisma.user.update({
          where: { email: body.email },
          data: {
            password: hashedPassword,
            emailVerified: false,
            emailVerificationCode: code,
          },
        });

        return {
          success: true,
          message:
            "Account created. To confirm your account, please check your email.",
        };
      } catch (error) {
        throw createError({
          statusCode: 500,
          statusMessage: "Failed to create the account",
        });
      }
    }
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);

  try {
    const code = await sendVerificationEmail(body.email);

    const newUser = await prisma.user.create({
      data: {
        email: body.email,
        password: hashedPassword,
        emailVerified: false,
        emailVerificationCode: code,
      },
    });
    return {
      success: true,
      statusMessage:
        "Account created. To confirm your account, please check your email.",
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to create the account",
    });
  }
});

const sendVerificationEmail = async (email: string) => {
  try {
    const { sendMail } = useNodeMailer();
    const config = useRuntimeConfig();

    const emailVerificationCode = await bcrypt.hash(Date.now().toString(), 10);

    const templatePath = "mail-templates/account-confirmation.html";
    const templateSource = await readFile(templatePath, "utf8");

    const template = Handlebars.compile(templateSource);
    const htmlContent = template({
      url: `${config.public.APP_BASE_URI}/profile/confirm-email?code=${emailVerificationCode}`,
    });

    sendMail({
      subject: "Account confirmation",
      to: email,
      html: htmlContent,
    });

    return emailVerificationCode;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to send the confirmation email.",
    });
  }
};

// add email confimration logic on account/confirm page
// add validation methods for accountConfirmed -> for providers skip, for login by email and password check if account is confirmed
