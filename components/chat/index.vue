<template>
  <Card class="pt-20">
    <CardContent class="flex flex-col gap-4">
      <div v-if="loading" class="flex justify-center items-center h-20">
        <div class="loader" />
      </div>

      <div v-if="chatTree.length > 0 && !loading" class="mt-4">
        <Accordion type="single" collapsible>
          <AccordionItem v-for="q in data.questions" :value="q.question">
            <AccordionTrigger>{{ q.question }}</AccordionTrigger>
            <AccordionContent>
              {{ q.answer }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Card class="mt-4">
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

const data = ref({ questions: [], task: "" });

const chatTree = ref([
  {
    role: "system",
    content:
      "Jesteś asystentem AI, który generuje przykładowe pytania i odpowiedzi na rozmowę o pracę w formacie JSON. Użytkownik poda listę wymagań, a Twoim zadaniem jest zwrócenie odpowiednich danych w postaci struktury JSON. Pytania powinny miec klucze typu 'questions' z obiektami 'question' i 'answer', zas w przypadku dostarczenia zadania rekrutacyjnego, jego klucz powinien byc 'task', juz bez odpowiedzi, jako prosty string",
  },
]);
const loading = ref(true);

function constructPrompt() {
  let prompt =
    "Na podstawie dostarczonych informacji przygotuj listę pytań rekrutacyjnych w formacie JSON. Klucz pytań to 'questions', zawiera on obiekty z kluczemi 'question' oraz 'answer'. Zaś w przypadku dostarczenia zadania rekrutacyjnego, jego klucz powinien byc 'task', ju bez odpowiedzi. Listę pytań przygotuj na bazie informacji:";

  if (props.type === "url") {
    prompt += ` Przeanalizuj tę ofertę pracy ${props.details.url}.`;
  } else if (props.type === "file") {
    prompt += ` Przeanalizuj zawartość dostarczonego pliku.`;
  } else if (props.type === "custom") {
    prompt += ` Użyj niestandardowych szczegółów: ${props.details.requirements}, ${props.details.responsibilities}, ${props.details.niceToHave}.`;
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

    const response = await chatCompletion(chatTree.value, "gpt-4");

    const responseMessage = {
      role: response[0].message.role,
      content: response[0].message.content,
    };

    const obj = JSON.parse(responseMessage.content);
    console.log(obj);
    data.value.questions = obj.questions;
    data.value.task = obj.task;
    chatTree.value.push(responseMessage);
  } catch (error) {
    alert(`Error generating questions: ${error}`);
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
