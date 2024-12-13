<template>
  <form @submit="onSubmit">
    <TextGradient class="text-2xl mb-4 font-semibold"
      >Questions generation method</TextGradient
    >

    <ChatRadios
      :options="types"
      label="How would you generate your recruitment questions?"
      field="type"
    />

    <Button type="submit" class="mt-6">Next Step</Button>
  </form>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const emit = defineEmits(["submit"]);

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
    isCommingSoon: true,
    icon: "ph:read-cv-logo-thin",
  },
  {
    value: "custom",
    title: "Custom settings",
    desc: "Questions generated based on your own settings",
    icon: "mdi-light:settings",
  },
];

const formSchema = toTypedSchema(
  z.object({
    type: z.string().min(1),
  })
);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit((values) => {
  emit("submit", values);
});
</script>

<style lang="scss">
button:has(input:checked) ~ label {
  & > div {
    @apply border-primary;
  }
}
</style>
