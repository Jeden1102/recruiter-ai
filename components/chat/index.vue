<template>
  <Card>
    <CardContent class="flex flex-col gap-4">
      <div
        v-if="isLoading"
        class="flex justify-center items-center flex-col gap-8 py-4"
      >
        <Icon
          name="tabler:loader-3"
          size="48"
          class="animate-spin text-primary"
        />
        <p>Job is being analyzed</p>
      </div>

      <Alert
        variant="destructive"
        class="mt-6"
        v-if="isError || (data.errorMessage && !data.questions)"
      >
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          {{
            data.errorMessage ||
            `There was an issue generating the response. Please try again later or
          consider using other questions generation option.`
          }}
        </AlertDescription>
      </Alert>

      <div v-if="chatTree.length > 0 && !isLoading && !isError" class="mt-4">
        <Accordion type="single" collapsible>
          <AccordionItem v-for="q in data.questions" :value="q.question">
            <AccordionTrigger class="text-left">{{
              q.question
            }}</AccordionTrigger>
            <AccordionContent>
              {{ q.answer || "Brak odpowiedzi" }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Card class="mt-4" v-if="data.task">
          <CardHeader>
            <CardTitle class="flex gap-2 items-center">
              <Icon name="material-symbols:task-rounded" size="24" />
              Recruitment Task
            </CardTitle>
          </CardHeader>
          <CardContent>
            {{ data.task }}
          </CardContent>
        </Card>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import type { Details, General } from "./types";
import { ref, onMounted } from "vue";

const { chatCompletion } = useChatgpt();

const props = defineProps<{
  general: General;
  details: Details;
  type: string;
}>();

type Question = {
  question: string;
  answer?: string;
};

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
      8. Pamietaj aby odpowiedz byla w formie JSON, tak bym mogl ja wrzucic do JSON.parse().
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
    prompt += " Przeanalizuj zawartość dostarczonego pliku.";
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

async function generateQuestions() {
  try {
    const userMessage = {
      role: "user",
      content: await constructPrompt(),
    };

    chatTree.value.push(userMessage);

    const response = await chatCompletion(chatTree.value);

    const responseMessage = {
      role: response[0].message.role,
      content: response[0].message.content,
    };

    const obj = JSON.parse(responseMessage.content);
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

<style scoped>
.loader {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
