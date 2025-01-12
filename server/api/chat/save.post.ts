import { PrismaClient } from "@prisma/client";
import { getServerSession } from "#auth";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    let chatId = "";
    const session = await getServerSession(event);

    const body = await readBody(event);

    if (body.id) {
      const savedChat = await prisma.chat.update({
        where: {
          id: body.id,
        },
        data: {
          questions: body.questions,
        },
      });

      chatId = savedChat.id;
    } else {
      const savedChat = await prisma.chat.create({
        data: {
          email: session?.user?.email || "",
          type: body.type,
          questions: body.questions,
          task: body.task,
          requirements: body.requirements,
          responsibilities: body.responsibilities,
          position: body.position,
          niceToHave: body.niceToHave,
          level: body.level,
          file: body.file,
          url: body.url,
        },
      });
      chatId = savedChat.id;
    }

    return { success: true, id: chatId };
  } catch (error) {
    console.error("Error saving chat:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to save chat to the database.",
    });
  }
});
