import { PrismaClient } from "@prisma/client";
import { getServerSession } from "#auth";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const session = await getServerSession(event);

    if (!session || !session.user) {
      throw createError({
        statusCode: 401,
        statusMessage: "Unauthorized",
      });
    }

    const body = await readBody(event);

    const savedChat = await prisma.chat.create({
      data: {
        email: session.user.email,
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

    return { success: true, id: savedChat.id };
  } catch (error) {
    console.error("Error saving chat:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to save chat to the database.",
    });
  }
});
