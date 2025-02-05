import type { Chat } from "@/components/chat/types";

export default async function (data: Pick<Chat, "questions" | "id">) {
  try {
    const res = await $fetch("/api/chat/save", {
      method: "POST",
      body: Object.fromEntries(
        Object.entries(data).filter(([_, v]) => v !== undefined),
      ),
    });

    return res.id;
  } catch (error: any) {
    throw createError({
      statusCode: error?.statusCode,
      statusMessage: error?.statusMessage,
    });
  }
}
