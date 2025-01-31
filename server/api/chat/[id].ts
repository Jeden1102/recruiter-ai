import { PrismaClient } from "@prisma/client";
import { getServerSession } from "#auth";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;

  if (!id || id.length !== 36) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid chat ID",
    });
  }

  try {
    const chat = await prisma.chat.findUnique({
      where: { id },
    });

    if (!chat) {
      throw createError({
        statusCode: 404,
        statusMessage: "Chat not found",
      });
    }

    if (!chat.restricted) {
      return chat;
    }

    const session = await getServerSession(event);
    const isAuthorized = await isUserAuthorized(session?.user?.email, chat);

    if (!isAuthorized) {
      throw createError({
        statusCode: 403,
        statusMessage: "You are not allowed to access this chat",
      });
    }

    if (session?.user?.email !== chat.email) {
      delete chat?.authorizedEmails;
    }

    return chat;
  } catch (error: any) {
    throw createError({
      statusCode: error?.statusCode || 500,
      statusMessage: error.statusMessage || "Something went wrong",
    });
  }
});

const isUserAuthorized = async (
  email: string | undefined | null,
  chat: { email: string | null; authorizedEmails: string[] },
) => {
  if (!email) {
    return false;
  }

  if (email === chat.email) {
    return true;
  }

  if (chat.authorizedEmails.includes(email)) {
    return true;
  }

  return false;
};
