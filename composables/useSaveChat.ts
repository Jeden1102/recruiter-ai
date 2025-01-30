type Chat = {
  type?: string;
  questions: object;
  task?: string;
  requirements?: string;
  responsibilities?: string;
  position?: string;
  niceToHave?: string;
  file?: string | unknown;
  level?: string;
  url?: string;
  id?: string;
  title?: string;
  restricted?: boolean;
  authorizedEmails?: string[];
};

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
