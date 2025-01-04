<template>
  <form @submit="onSubmit">
    <TextGradient class="mb-4 text-2xl font-semibold"
      >Questions generation method</TextGradient
    >

    <ChatRadios
      :options="types"
      label="How would you generate your recruitment questions?"
      field="type"
      v-model="modelValue"
    />
  </form>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const emit = defineEmits(["submit"]);

const modelValue = ref("");

watch(modelValue, () => {
  emit("submit", { type: modelValue.value });
});

const types = [
  {
    value: "url",
    title: "Job offer url",
    desc: "Questions generated based on the job offer URL",
    icon: "carbon:url",
  },
  {
    value: "cv",
    title: "Based on my CV",
    desc: "Questions generated baseod on your CV",
    icon: "ph:read-cv-logo-thin",
  },
  {
    value: "custom",
    title: "Custom settings",
    desc: "Questions generated based on your own settings",
    icon: "mdi-light:settings",
  },
];
</script>

<style lang="scss">
button:has(input:checked) ~ label {
  & > div {
    @apply border-primary;
  }
}
</style>
