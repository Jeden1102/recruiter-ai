import { PrismaClient } from "@prisma/client";
import { getServerSession } from "#auth";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const session = await getServerSession(event);

    if (!session?.user?.email) {
      throw createError({
        statusCode: 401,
        statusMessage: "apiResponses.userNotAuthenticated",
      });
    }

    const userChats = await prisma.chat.findMany({
      where: {
        userId: session.id,
      },
      select: {
        id: true,
        type: true,
        createdAt: true,
        title: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return userChats;
  } catch (error) {
    console.error("Error fetching user chats:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "apiResponses.failedToFetchUserChats",
    });
  }
});
