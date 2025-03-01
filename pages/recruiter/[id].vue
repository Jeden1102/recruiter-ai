<script setup lang="ts">
import type { Question } from "~/components/chat/types";
import type { Chat } from "@/components/chat/types";

useSetPageSeo("recruiter");

const { t } = useI18n();

const questions = ref<Question[]>([]);
const task = ref("");
const chatData = ref<Chat | null>(null);
const route = useRoute();

type Response = {
  questions: Question[];
  task: string;
  title: string;
  email: string;
  level: string;
  createdAt: string;
};

const chatUri = computed(() => {
  return `${window.location.href}/${route.params.id}`;
});

try {
  const res = (await useGetChatById({
    id: route.params.id.toString(),
  })) as Response;
  questions.value = res.questions;
  task.value = res.task;
  chatData.value = res;
} catch (error: any) {
  throw createError({
    statusCode: error.statusCode || 404,
    statusMessage: t(error.statusMessage) || "Chat not found",
  });
}
</script>

<template>
  <div class="slim-container mx-auto pt-8">
    <Card v-if="chatData">
      <CardContent class="flex flex-col gap-8 py-4">
        <RecruiterHeading :chatData="chatData" />
        <RecruiterCards :chatData="chatData" />
        <div class="flex">
          <ClientOnly>
            <AppShareable
              :uri="chatUri"
              :subtitle="$t('share.subtitle')"
              :title="$t('share.title')"
            />
          </ClientOnly>
        </div>
        <ChatQuestions
          v-if="questions"
          :questions="questions"
          :loading="false"
        />
        <ChatRecruitmentTask class="mt-4" v-if="task">{{
          task
        }}</ChatRecruitmentTask>
      </CardContent>
    </Card>
  </div>
</template>
