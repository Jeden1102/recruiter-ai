<script setup lang="ts">
import type { Details, DifficultLevel, General } from "./types";

const route = useRoute();

const STEPS = 5;

const step = ref(0);
const type = ref<string>("");

const details = ref<Details>({});

const difficultLevel = ref<DifficultLevel>({});

const general = ref<General>({});

const handleSubmitDetails = (values: Details) => {
  details.value = values;
  step.value = ++step.value;
};

const handleSubmitDifficultLevel = (values: DifficultLevel) => {
  difficultLevel.value = values;
  step.value = ++step.value;
};

const handleSubmitGeneral = (values: General) => {
  general.value = values;
  step.value = ++step.value;
};

const handleTypeSubmit = (values: { type: string }) => {
  type.value = values.type;
  step.value = ++step.value;
};

const isChatType = (value: string) => {
  return ["url", "cv", "custom"].includes(value);
};

const progressWidth = () => {
  return ((step.value + 1) / STEPS) * 100;
};

onMounted(() => {
  console.log(route.query.mode, "here");
  if (route.query.mode && isChatType(route.query.mode as string)) {
    type.value = route.query.mode as string;
    step.value = 1;
  }
});
</script>

<template>
  <div class="relative flex-1">
    <ClientOnly>
      <transition name="fade-slide" mode="out-in" appear>
        <div class="flex flex-col gap-4">
          <template v-if="step === 0">
            <ChatStepsType :type="type" @submit="handleTypeSubmit" />
          </template>
          <template v-if="step === 1">
            <ChatStepsDetails
              :type="type"
              @submit="handleSubmitDetails"
              @back="step--"
            />
          </template>
          <template v-if="step === 2">
            <ChatStepsDifficultLevel
              :type="type"
              @submit="handleSubmitDifficultLevel"
              @back="step--"
            />
          </template>
          <template v-if="step === 3">
            <ChatStepsGeneral
              :type="type"
              @submit="handleSubmitGeneral"
              @back="step--"
            />
          </template>
          <template v-if="step === 4">
            <Chat
              :type="type"
              :details="details"
              :general="general"
              :difficultLevel="difficultLevel"
              @reset="step = 0"
            />
          </template>
          <div>
            <p class="my-1 text-center text-sm font-semibold text-primary">
              {{ step + 1 }} / {{ STEPS }}
            </p>
            <Progress :model-value="progressWidth()" />
          </div>
        </div>
      </transition>
    </ClientOnly>
  </div>
</template>

<style>
.fade-slide-enter-active,
.fade-slide-leave-active {
  @apply transition-all duration-200 ease-in-out;
}
.fade-slide-enter-from {
  @apply opacity-0;
}
.fade-slide-enter-to {
  @apply opacity-100;
}
.fade-slide-leave-from {
  @apply opacity-100;
}
.fade-slide-leave-to {
  @apply opacity-0;
}
</style>
