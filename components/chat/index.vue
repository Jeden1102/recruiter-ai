<template>
  <div class="flex flex-col gap-4">
    <ChatLoader v-if="isLoading" />

    <ChatError v-if="isError || (data.errorMessage && !data.questions)">
      {{
        data.errorMessage ||
        `There was an issue generating the response. Please try again later or
          consider using other questions generation option.`
      }}
    </ChatError>

    <div v-if="chatTree.length > 0 && !isLoading && !isError" class="mt-4">
      <ChatQuestions v-if="data.questions" :questions="data.questions" />

      <ChatRecruitmentTask class="mt-4" v-if="data.task">
        {{ data.task }}
      </ChatRecruitmentTask>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Details, General, Question } from "./types";
import { ref, onMounted } from "vue";

const { chatCompletion } = useChatgpt();

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
      Jesteś asystentem AI, który generuje przykładowe pytania i odpowiedzi na rozmowę o pracę w formacie JSON.
      Użytkownik poda listę wymagań, a Twoim zadaniem jest zwrócenie odpowiednich danych w postaci struktury JSON:
      - "questions": lista pytań - każdy obiekt zawiera "question" i "answer" (jesli user poprosi rowniez o przygotowanie listy odpowiedzi).
      - "task": klucz dla zadania rekrutacyjnego (prosty string, bez odpowiedzi).
      - Jeśli dane wejściowe nie mają sensu, zwróć {"error": "<opis błedu>"}.
      - Dane wejsciowe moga byc niekompletne, wystarczy np. samo stanowisko pracy.
      - Nie zwracaj treści w bloku JSON, odpowiedz samym JSON-em, tak aby można było użyć JSON.parse().
      1. Pytania muszą być specyficzne i szczegółowe – zadawaj pytania otwarte (np. "Jakie znasz klasy w Bootstrap?") zamiast pytań ogólnych (np. "Czy pracowałeś kiedyś z Bootstrap?").
      2. Dostosuj pytania techniczne do szczegółów oferty (np. jeśli wymagana jest znajomość API, pytania mogą dotyczyć metod, bezpieczeństwa lub problemów, które mogą się pojawić przy korzystaniu z API).
      3. Dodaj 2-3 pytania ogólne dotyczące miękkich umiejętności (np. "Jak radzisz sobie z pracą pod presją?").
      4. Przygotuj **minimum 10 pytań**.
      5. Jeśli użytkownik poprosi o zadanie rekrutacyjne, zaproponuj realistyczne zadanie dopasowane do stanowiska.
      6. Jeśli użytkownik poprosi o odpowiedzi, do kazdego z pytan, napisz odpowiedz w kluczu "answer". Rozwin troche te odpowiedzi do min. 2-3 zdan.
      7. Jesli to mozliwe dla stanowiska, postaraj sie zadac z 2-3 pytania typowo techniczne z wiedzy o umiejetnosciach/technologiach ktore sa wymagane/mile widziane.
      8. WAZNE - Pamietaj aby odpowiedz byla w formie JSON, tak bym mogl ja wrzucic do JSON.parse(). Nie uwzgledniaj tych tagow json.
    `.trim(),
  },
]);

const isLoading = ref(true);
const isError = ref(false);

function appendIfDefined(
  baseText: string,
  label: string,
  value: string | null | undefined
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
        props.details.position || "Nie określono"
      )}
      ${appendIfDefined(
        "",
        "Wymagania",
        props.details.requirements || "Nie określono"
      )}
      ${appendIfDefined(
        "",
        "Zadania",
        props.details.responsibilities || "Nie określono"
      )}
      ${appendIfDefined(
        "",
        "Mile widziane",
        props.details.niceToHave || "Nie określono"
      )}`;
  }

  prompt = appendIfDefined(prompt, "Poziom stanowiska", props.general.level);
  if (props.general.task)
    prompt += " Uwzględnij propozycję zadania rekrutacyjnego.";
  if (props.general.answers)
    prompt += " Przygotuj przykładowe odpowiedzi na pytania.";

  return prompt.trim();
}

const sanitizeJSON = (content: string) => {
  let sanitized = content.trim();

  sanitized = sanitized.replaceAll(/```/g, "");

  sanitized = sanitized.replace(/\\(?=")/g, "\\\\");

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
  } catch (error) {
    console.log(error);
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  generateQuestions();
});
</script>
