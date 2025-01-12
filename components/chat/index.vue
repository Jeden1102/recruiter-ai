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

      <Button @click="emit('reset')" class="my-2 text-white">Try again</Button>
    </ChatError>

    <div v-if="chatTree.length > 0 && !isLoading && !isError" class="mt-4">
      <AppShareable
        :uri="chatUri"
        subtitle="Save a link to the result or share on social media"
        title="Share or save the results"
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
    </div>
  </div>
</template>

<script setup lang="ts">
import useSaveChat from "~/composables/useSaveChat";
import type { Details, General, Question } from "./types";
import { ref, onMounted } from "vue";
const { chatCompletion } = useChatgpt();

const { locale } = useI18n();

const emit = defineEmits(["reset"]);

const chatId = ref("");

const chatUri = computed(() => {
  return `${window.location.href}/${chatId.value}`;
});

const props = defineProps<{
  general: General;
  details: Details;
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
      Jesteś asystentem AI, który generuje przykładowe pytania i §odpowiedzi na rozmowę o pracę w formacie JSON.
      Użytkownik poda listę wymagań, a Twoim zadaniem jest zwrócenie odpowiednich danych w postaci struktury JSON:
      - "questions": lista pytań - każdy obiekt zawiera "question" i "answer" (jesli user poprosi rowniez o przygotowanie listy odpowiedzi).
      - "task": klucz dla zadania rekrutacyjnego (prosty string, bez odpowiedzi) - tylko jesli user poprosi o zadanie rekrutacyjne.
      - Jeśli dane wejściowe nie mają sensu, zwróć {"error": "<opis błedu>"}.
      - Dane wejsciowe moga byc niekompletne, wystarczy np. samo stanowisko pracy.
      - Nie zwracaj treści w bloku JSON, odpowiedz samym JSON-em, tak aby można było użyć JSON.parse().
      1. Pytania muszą być specyficzne i szczegółowe – zadawaj pytania otwarte (np. "Jakie znasz klasy w Bootstrap?") zamiast pytań ogólnych (np. "Czy pracowałeś kiedyś z Bootstrap?").
      2. Dostosuj pytania techniczne do szczegółów oferty (np. jeśli wymagana jest znajomość API, pytania mogą dotyczyć metod, bezpieczeństwa lub problemów, które mogą się pojawić przy korzystaniu z API).
      3. Dodaj 2-3 pytania ogólne dotyczące miękkich umiejętności (np. "Jak radzisz sobie z pracą pod presją?").
      4. Przygotuj **dokladnie 10 pytań**.
      5. Jeśli użytkownik poprosi o zadanie rekrutacyjne, zaproponuj realistyczne zadanie dopasowane do stanowiska.
      6. Jeśli użytkownik poprosi o odpowiedzi, do kazdego z pytan, napisz odpowiedz w kluczu "answer". Rozwin troche te odpowiedzi do min. 2-3 zdan.
      7. Jesli to mozliwe dla stanowiska, postaraj sie zadac z 2-3 pytania typowo techniczne z wiedzy o umiejetnosciach/technologiach ktore sa wymagane/mile widziane.
      8. WAZNE - Pamietaj aby odpowiedz byla w formie JSON, tak bym mogl ja wrzucic do JSON.parse(). Nie uwzgledniaj tych tagow json.
      9. Odpowiedz przygotuj w jezyku ${locale.value}.
      10. W kluczu "title" dodaj tytul, ktory opisuje temat rozmowy - ma to byc prosty, kilkuwyrazowy max. string.
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
  let prompt = "Listę pytań przygotuj na bazie informacji:";

  if (props.type === "url") {
    try {
      const { data, status, error, refresh } = await useFetch("/api/page", {
        query: { uri: props.details.url },
      });

      prompt += ` Przeanalizuj tę ofertę pracy: ${data.value?.content}`;
    } catch (error) {
      console.log(error);
    }
  } else if (props.type === "file") {
    prompt += " Przeanalizuj zawartość dostarczonego pliku CV.";
  } else if (props.type === "custom") {
    prompt += `
      Użyj niestandardowych szczegółów:
      ${appendIfDefined(
        "",
        "Stanowisko",
        props.details.position || "Nie określono",
      )}
      ${appendIfDefined(
        "",
        "Wymagania",
        props.details.requirements || "Nie określono",
      )}
      ${appendIfDefined(
        "",
        "Zadania",
        props.details.responsibilities || "Nie określono",
      )}
      ${appendIfDefined(
        "",
        "Mile widziane",
        props.details.niceToHave || "Nie określono",
      )}`;
  }

  prompt = appendIfDefined(prompt, "Poziom stanowiska", props.general.level);
  if (props.general.task) {
    prompt += " Uwzględnij propozycję zadania rekrutacyjnego.";
  } else {
    prompt += " Nie Uwzględniaj propozycji zadania rekrutacyjnego.";
  }
  if (props.general.answers) {
    prompt += " Przygotuj przykładowe odpowiedzi na pytania.";
  } else {
    prompt += " Nie przygotuj przykładowych odpowiedzi na pytania.";
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
            text: "Przeslane CV:",
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
      level: props.general.level,
      file: props.details.file ? await useFileToBase64(props.details.file) : "",
      url: props.details.url,
      title: obj.title,
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
        "Wygeneruj kolejne 5 pytań na rozmowę o pracę na bazie poprzednich ustaleń. Zachowaj poprzednie ustalenia. Nie generuj nowego zadania rekrutacyjnego.",
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
