import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid chat ID",
    });
  }

  try {
    const chat = await prisma.chat.findUnique({
      where: {
        id: id,
      },
    });

    if (!chat) {
      throw createError({
        statusCode: 404,
        statusMessage: "Chat not found",
      });
    }

    return chat;
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: "Chat not found",
    });
  }
});
