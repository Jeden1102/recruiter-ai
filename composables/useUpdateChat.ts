export default async function useUpdateChat(data: {
  id: string;
  restricted?: boolean;
  authorizedEmails?: string[];
}) {
  try {
    const res = await $fetch("/api/chat/update", {
      method: "POST",
      body: Object.fromEntries(
        Object.entries(data).filter(([_, v]) => v !== undefined),
      ),
    });

    return res.chat;
  } catch (error: any) {
    throw createError({
      statusCode: error?.statusCode,
      statusMessage: error?.statusMessage,
    });
  }
}
