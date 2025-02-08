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
    // @todo update fix
    const updatedUser = await prisma.user.update({
      where: { emailVerificationCode: body.code },
      data: {
        emailVerified: true,
        emailVerificationCode: "",
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
