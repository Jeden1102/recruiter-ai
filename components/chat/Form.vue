<script setup lang="ts">
import type { Details, General } from "./types";
const step = ref(0);
const type = ref<string>("");

const details = ref<Details>({});

const general = ref<General>({});

const handleSubmitDetails = (values: any) => {
  details.value = values;
  step.value = ++step.value;
};

const handleSubmitGeneral = (values: any) => {
  general.value = values;
  step.value = ++step.value;
};

const handleTypeSubmit = (values: any) => {
  type.value = values.type;
  step.value = ++step.value;
};
</script>

<template>
  <div class="relative">
    <transition name="fade-slide" mode="out-in" appear>
      <div :key="step">
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
          <ChatStepsGeneral
            :type="type"
            @submit="handleSubmitGeneral"
            @back="step--"
          />
        </template>
        <template v-if="step === 3">
          <Chat :type="type" :details="details" :general="general" />
        </template>
      </div>
    </transition>
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
