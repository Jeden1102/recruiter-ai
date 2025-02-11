<template>
  <div class="flex flex-col gap-4">
    <ChatLoader v-if="isLoading" />
    <ChatError
      class="flex flex-col"
      v-if="isError || (data.errorMessage && !data.questions)"
    >
      <p>
        {{
          data.errorMessage ||
          `There was an issue generating the response. Please try again later or
          consider using other questions generation option.`
        }}
      </p>

      <Button @click="emit('reset')" class="my-2 text-white">{{
        $t("common.tryAgain")
      }}</Button>
    </ChatError>

    <div v-if="chatTree.length > 0 && !isLoading && !isError" class="mt-4">
      <AppShareable
        v-if="chatId"
        :uri="chatUri"
        :subtitle="$t('share.subtitle')"
        :title="$t('share.title')"
      />
      <ChatQuestions
        v-if="data.questions"
        :questions="data.questions"
        :loading="isLoadingAdditional"
      />

      <ChatRecruitmentTask class="mt-4" v-if="data.task">
        {{ data.task }}
      </ChatRecruitmentTask>
      <Button
        :disabled="isLoadingAdditional"
        v-if="data.questions"
        @click="generateNewQuestions"
        class="my-4"
      >
        {{ $t("common.generateNew") }}
      </Button>

      <div class="mt-4 flex flex-col gap-2 md:flex-row">
        <ProductCard
          :card="{
            title: t('common.newChat'),
            description: t('product.differentSettings'),
            cta: t('common.tryAgain'),
          }"
          @click="emit('reset')"
        />
        <ProductCard
          v-if="!user"
          logInToSave
          :card="{
            title: t('product.saveChats'),
            description: t('product.logInToSave'),
            cta: t('product.logIn'),
            uri: '/login',
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useSaveChat from "~/composables/useSaveChat";
import type { Details, General, Question, DifficultLevel } from "./types";
const { chatCompletion } = useChatgpt();

const { t } = useI18n();

const emit = defineEmits(["reset"]);

const chatId = ref("");

const { data: user } = useAuth();

const chatUri = computed(() => {
  return `${window.location.href}/${chatId.value}`;
});

const props = defineProps<{
  general: General;
  details: Details;
  difficultLevel: DifficultLevel;
  type: string;
}>();

const data = ref<{
  questions: Question[];
  task: string;
  errorMessage: string;
}>({ questions: [], task: "", errorMessage: "" });

const chatTree = ref([
  {
    role: "system",
    content: `
      You are an AI assistant that generates example interview questions and answers in JSON format.
      The user will provide a list of requirements, and your task is to return structured JSON data:
      - "questions": a list of questions, where each object contains "question" and "answer" (if the user requests answers).
      - "task": a key for a coding challenge (a simple string without an answer), but only if the user explicitly asks for a task.
      - If the input is invalid, return {"error": "<error description>"}.
      - The input might be incomplete, such as only a job title.
      - Do not wrap the response in a JSON block; return raw JSON that can be used directly with JSON.parse().

      Guidelines:
      1. **Generate exactly 10 questions**, with a focus on technical depth and specificity.
      2. **Ask detailed, open-ended questions** (e.g., "How does the ref function work in Vue?" rather than "Have you used ref in Vue?").
      3. **Tailor technical questions to the job requirements**, covering topics such as API usage, security concerns, optimization strategies, and debugging common issues.
      4. Include **1-2 behavioral questions** (e.g., "How do you handle tight deadlines?").
      5. If a coding challenge is requested, propose a **realistic task relevant to the job**.
      6. If answers are requested, provide detailed responses (at least 2-3 sentences per answer).
      7. If possible, include at least **6-7 deep technical questions** covering key technologies/skills required for the role.
      8. Ensure the response is **valid JSON**, formatted correctly for parsing.
      9. Generate the response in the language specified by langcode key:  ${props.general.language}.
      10. Add a "title" key summarizing the interview topic in a concise phrase.
      11. If the input is incomplete, and some data are not specified, still generate the response.
    `.trim(),
  },
]);

const isLoading = ref(true);
const isLoadingAdditional = ref(false);
const isError = ref(false);

function appendIfDefined(
  baseText: string,
  label: string,
  value: string | null | undefined,
) {
  return value ? `${baseText} ${label}: ${value}.` : baseText;
}

async function constructPrompt() {
  let prompt = "Genarate question based on details:";

  if (props.type === "url") {
    try {
      const { data, status, error, refresh } = await useFetch("/api/page", {
        query: { uri: props.details.url },
      });

      prompt += ` Analyse this job offer: ${data.value?.content}`;
    } catch (error) {
      console.log(error);
    }
  } else if (props.type === "file") {
    prompt += " Analyse the CV fle.";
  } else if (props.type === "custom") {
    prompt += `
      Analyse the details of the job offer:
      ${appendIfDefined(
        "",
        "Position",
        props.details.position || "Not specified",
      )}
      ${appendIfDefined(
        "",
        "Requirements",
        props.details.requirements || "Not specified",
      )}
      ${appendIfDefined(
        "",
        "Tasks",
        props.details.responsibilities || "Not specified",
      )}
      ${appendIfDefined(
        "",
        "Nice to have",
        props.details.niceToHave || "Not specified",
      )}`;
  }

  prompt = appendIfDefined(
    prompt,
    "Position level",
    props.difficultLevel.level,
  );
  if (props.general.task) {
    prompt += " Include a recruitment task.";
  } else {
    prompt += " Don't include a recruitment task.";
  }
  if (props.general.answers) {
    prompt += " Prepare answer in advance.";
  } else {
    prompt += " Don't prepare answer in advance.";
  }

  return prompt.trim();
}

const sanitizeJSON = (content: string) => {
  let sanitized = content.trim();

  sanitized = sanitized.replaceAll(/```/g, "");

  sanitized = sanitized.replace(/\\(?=")/g, "\\\\");

  sanitized = sanitized.replace(/,(\s*[}\]])/g, "$1");

  return sanitized;
};

async function generateQuestions() {
  try {
    const userMessage = {
      role: "user",
      content: await constructPrompt(),
    };

    chatTree.value.push(userMessage);

    if (props.details.file) {
      const file = await useFileToBase64(props.details.file);
      chatTree.value.push({
        role: "user",
        content: [
          {
            type: "text",
            text: "Included CV:",
          },
          {
            type: "image_url",
            image_url: {
              url: file,
            },
          },
        ],
      });
    }
    const response = await chatCompletion(chatTree.value);

    const responseMessage = {
      role: response[0].message.role,
      content: response[0].message.content,
    };
    const obj = JSON.parse(sanitizeJSON(responseMessage.content));
    data.value.questions = obj.questions;
    data.value.task = obj.task;
    data.value.errorMessage = obj.error;
    chatTree.value.push(responseMessage);

    const res = await useSaveChat({
      type: props.type,
      questions: data.value.questions,
      task: data.value.task,
      requirements: props.details.requirements,
      responsibilities: props.details.responsibilities,
      position: props.details.position,
      niceToHave: props.details.niceToHave,
      level: props.difficultLevel.level,
      file: props.details.file ? await useFileToBase64(props.details.file) : "",
      url: props.details.url,
      title: obj.title,
      restricted: props.general.restricted,
      authorizedEmails: props.general.authorizedEmails,
    });

    chatId.value = res || "";
  } catch (error) {
    console.log(error);
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
}

async function generateNewQuestions() {
  if (isLoadingAdditional.value) return;
  isLoadingAdditional.value = true;
  try {
    const userMessage = {
      role: "user",
      content:
        "Genarate 5 more question based on previous settings. Don't generate new recruitment task.",
    };

    chatTree.value.push(userMessage);

    const response = await chatCompletion(chatTree.value);

    const responseMessage = {
      role: response[0].message.role,
      content: response[0].message.content,
    };

    const obj = JSON.parse(sanitizeJSON(responseMessage.content));
    data.value.questions.push(...obj.questions);
    chatTree.value.push(responseMessage);

    await useSaveChat({
      questions: data.value.questions,
      id: chatId.value,
    });
  } catch (error) {
    console.log(error);
    isError.value = true;
  } finally {
    isLoadingAdditional.value = false;
  }
}

onMounted(() => {
  generateQuestions();
});
</script>
