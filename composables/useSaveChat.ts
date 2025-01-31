import type { Chat } from "@/components/chat/types";

export default async function (data: Chat) {
  try {
    const res = await $fetch("/api/chat/save", {
      method: "POST",
      body: Object.fromEntries(
        Object.entries(data).filter(([_, v]) => v !== undefined),
      ),
    });

    return res.id;
  } catch (error) {
    console.log(error);
  }
}
