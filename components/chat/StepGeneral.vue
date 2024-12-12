<template>
  <form @submit="onSubmit">
    <TextGradient class="text-2xl mb-4 font-semibold"
      >General settings</TextGradient
    >
    <ChatRadioGroup
      :options="options"
      label="Questions difficulty level"
      field="general"
    />
    <Button type="submit" class="mt-6">Next Step</Button>
  </form>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const emit = defineEmits(["submit"]);

const options = [
  {
    value: "easy",
    title: "Easy",
    desc: "Questions for entry level candidates",
    icon: "carbon:skill-level-basic",
  },
  {
    value: "intermediate",
    title: "Intermediate",
    desc: "More complex questions",
    icon: "carbon:skill-level-intermediate",
  },
  {
    value: "advanced",
    title: "Advanced",
    desc: "The most difficult questions",
    icon: "carbon:skill-level-advanced",
  },
];

const formSchema = toTypedSchema(
  z.object({
    general: z.string().min(1),
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
