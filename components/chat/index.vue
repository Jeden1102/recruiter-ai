<template>
  <Card class="pt-20">
    <CardContent class="flex flex-col gap-4">
      <Textarea v-model="inputData" />
      <Button @click="sendMessage" class="w-fit"> Send message </Button>
      <div>
        <div v-for="chat in chatTree" :key="chat">
          <template v-if="chat.role !== 'system'">
            <strong>{{ chat.role }} :</strong>
            <div>{{ chat.content }}</div>
          </template>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
<script setup lang="ts">
const { chatCompletion } = useChatgpt();

const chatTree = ref([
  {
    role: "system",
    content:
      "Jesteś asystentem AI, który generuje przykładowe pytania i odpowiedzi na rozmowę o pracę w formacie JSON. Użytkownik poda listę wymagań, a Twoim zadaniem jest zwrócenie odpowiednich danych w postaci struktury JSON.",
  },
]);
const inputData = ref("");

async function sendMessage() {
  console.log("TEARZ");
  try {
    const message = {
      role: "user",
      content: `${inputData.value}`,
    };

    chatTree.value.push(message);

    const response = await chatCompletion(chatTree.value);

    const responseMessage = {
      role: response[0].message.role,
      content: response[0].message.content,
    };

    chatTree.value.push(responseMessage);
  } catch (error) {
    alert(`Join the waiting list if you want to use GPT-4 models: ${error}`);
  }
}
</script>
