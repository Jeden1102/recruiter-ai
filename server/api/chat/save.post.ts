import { PrismaClient } from "@prisma/client";
import { getServerSession } from "#auth";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    let chatId = "";
    const session = await getServerSession(event);

    let userId = session?.id;

    const body = await readBody(event);

    if (body.id) {
      const savedChat = await prisma.chat.update({
        where: { id: body.id },
        data: { questions: body.questions },
      });

      chatId = savedChat.id;
    } else {
      const savedChat = await prisma.chat.create({
        data: {
          userId,
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
          title: body.title,
          restricted: body.restricted,
          authorizedEmails: body.authorizedEmails,
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
