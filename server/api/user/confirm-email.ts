import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.code) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing code parameter",
    });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { emailVerificationCode: body.code, emailVerified: true },
    });

    if (user) {
      return {
        success: true,
        message:
          "Email confirmed succesfully. Now you can login to your account!",
      };
    }

    const updatedUser = await prisma.user.update({
      where: { emailVerificationCode: body.code },
      data: {
        emailVerified: true,
      },
    });

    return {
      success: true,
      message:
        "Email confirmed succesfully. Now you can login to your account!",
    };
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed confirming the email",
    });
  }
});
