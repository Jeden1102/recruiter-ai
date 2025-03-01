import { PrismaClient } from "@prisma/client";
import { getServerSession } from "#auth";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const session = await getServerSession(event);
    const body = await readBody(event);

    if (!body.id) {
      throw createError({
        statusCode: 400,
        statusMessage: "apiResponses.chatIdRequired",
      });
    }

    const updatedChat = await prisma.chat.update({
      where: {
        id: body.id,
        userId: session?.user.id,
      },
      data: {
        restricted: body.restricted,
        authorizedEmails: body.authorizedEmails,
      },
    });

    return { success: true, chat: updatedChat };
  } catch (error) {
    console.error("Error updating chat:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "apiResponses.updateChatFailed",
    });
  }
});
