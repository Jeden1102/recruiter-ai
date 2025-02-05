<script setup lang="ts">
const emit = defineEmits(["submit"]);

const modelValue = ref("");

watch(modelValue, () => {
  emit("submit", { type: modelValue.value });
});

const types = [
  {
    value: "url",
    title: "questions.method.types.url.title",
    desc: "questions.method.types.url.description",
    icon: "carbon:url",
  },
  {
    value: "cv",
    title: "questions.method.types.cv.title",
    desc: "questions.method.types.cv.description",
    icon: "ph:read-cv-logo-thin",
  },
  {
    value: "custom",
    title: "questions.method.types.custom.title",
    desc: "questions.method.types.custom.description",
    icon: "mdi-light:settings",
  },
];
</script>

<template>
  <form @submit="onSubmit">
    <TextGradient class="mb-4 text-2xl font-semibold">
      {{ $t("questions.method.title") }}
    </TextGradient>

    <ChatRadios
      :options="types"
      :label="$t('questions.method.label')"
      field="type"
      v-model="modelValue"
    />
  </form>
</template>

<style lang="scss">
button:has(input:checked) ~ label {
  & > div {
    @apply border-primary;
  }
}
</style>
