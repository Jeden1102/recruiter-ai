type Chat = {
  type: string;
  questions: object;
  task: string;
  requirements?: string;
  responsibilities?: string;
  position?: string;
  niceToHave?: string;
  file?: string | unknown;
  level?: string;
  url?: string;
};

export default async function (data: Chat) {
  try {
    const res = await $fetch("/api/chat/save", {
      method: "POST",
      body: {
        type: data.type,
        questions: data.questions,
        task: data.task,
        requirements: data.requirements,
        responsibilities: data.responsibilities,
        position: data.position,
        niceToHave: data.niceToHave,
        level: data.level,
        file: data.file,
        url: data.url,
      },
    });

    return res.id;
  } catch (error) {
    console.log(error);
  }
}
