<template>
  <div class="container pt-8">
    <Card>
      <CardContent class="flex flex-col gap-8 py-4 md:flex-row">
        <ChatHero class="hidden md:flex" />
        <div class="flex-1">
          <ChatQuestions
            v-if="questions"
            :questions="questions"
            :loading="false"
          />

          <ChatRecruitmentTask class="mt-4" v-if="task">
            {{ task }}
          </ChatRecruitmentTask>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
<script setup lang="ts">
import type { Question } from "~/components/chat/types";
useSeoMeta({
  title: "Recruiter",
  ogTitle: "Recruiter",
});

const questions = ref<Question[]>([]);
const task = ref("");

const route = useRoute();

type Response = {
  questions: Question[];
  task: string;
};

try {
  const res = (await useGetChatById({
    id: route.params.id.toString(),
  })) as Response;
  questions.value = res.questions;
  task.value = res.task;
  console.log(res);
} catch (error) {
  throw createError({
    statusCode: 404,
    statusMessage: "Chat Not Found",
  });
}
</script>
