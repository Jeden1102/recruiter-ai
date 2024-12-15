<template>
  <Card>
    <CardContent class="flex flex-col gap-4">
      <div v-if="loading" class="flex justify-center items-center h-20">
        <div class="loader" />
      </div>

      <Alert v-if="isError || data.errorMessage">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          {{
            data.errorMessage ||
            `There was an issue generating the response. Please try again later or
          consider using other questions generation option.`
          }}
        </AlertDescription>
      </Alert>

      <div v-if="chatTree.length > 0 && !loading" class="mt-4">
        <Accordion type="single" collapsible>
          <AccordionItem v-for="q in data.questions" :value="q.question">
            <AccordionTrigger class="text-left">{{
              q.question
            }}</AccordionTrigger>
            <AccordionContent>
              {{ q.answer }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Card class="mt-4" v-if="data.task">
          <CardHeader>
            <CardTitle>Recruitment Task</CardTitle>
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
  answer: string;
};

const data = ref<{
  questions: Question[];
  task: string;
  errorMessage: string;
}>({ questions: [], task: "", errorMessage: "" });

const chatTree = ref([
  {
    role: "system",
    content:
      "Jesteś asystentem AI, który generuje przykładowe pytania i odpowiedzi na rozmowę o pracę w formacie JSON. Użytkownik poda listę wymagań, a Twoim zadaniem jest zwrócenie odpowiednich danych w postaci struktury JSON. Pytania powinny miec klucze typu 'questions' z obiektami 'question' i 'answer', zas w przypadku dostarczenia zadania rekrutacyjnego, jego klucz powinien byc 'task', juz bez odpowiedzi, jako prosty string. Nie podawaj tego ```json, tylko wyslij sam JSON, tak bym mogl sobie odpowiedz skonwertowac za pomoca JSON.parse(). W przypadku, gdyby treśc przeslana przez usera nie miala sensu, np. nie istnieje takie stanowisko pracy, wymagania sa nierealne, przeslany plik nie zawiera CV itp. to zwroc pod kluzcem 'error' ifnromacje o bledzie.",
  },
]);
const loading = ref(true);
const isError = ref(false);

function constructPrompt() {
  let prompt = "Listę pytań przygotuj na bazie informacji:";

  if (props.type === "url") {
    prompt += ` Przeanalizuj tę ofertę pracy ${props.details.url}.`;
  } else if (props.type === "file") {
    prompt += ` Przeanalizuj zawartość dostarczonego pliku.`;
  } else if (props.type === "custom") {
    prompt += `
    Użyj niestandardowych szczegółów: 
    Stanowisko: ${props.details.position},
    Wymagania: ${props.details.requirements},
    Zadania: ${props.details.responsibilities},
    Mile widziane:  ${props.details.niceToHave}.`;
  }

  if (props.general.level) {
    prompt += ` Poziom stanowiska: ${props.general.level}.`;
  }

  if (props.general.task) {
    prompt += ` Uwzględnij propozycję zadania rekrutacyjnego.`;
  }

  if (props.general.answers) {
    prompt += ` Przygotuj przykładowe odpowiedzi na pytania.`;
  }

  return prompt;
}

async function generateQuestions() {
  try {
    const userMessage = {
      role: "user",
      content: constructPrompt(),
    };

    chatTree.value.push(userMessage);

    const response = await chatCompletion(chatTree.value);

    const responseMessage = {
      role: response[0].message.role,
      content: response[0].message.content,
    };
    const obj = JSON.parse(responseMessage.content);
    console.log(obj);
    data.value.questions = obj.questions;
    data.value.task = obj.task;
    data.value.errorMessage = obj.error;
    chatTree.value.push(responseMessage);
  } catch (error) {
    isError.value = true;
  } finally {
    loading.value = false;
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
