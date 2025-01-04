<template>
  <form @submit="onSubmit">
    <TextGradient class="mb-4 text-2xl font-semibold"
      >General settings</TextGradient
    >
    <ChatRadios
      :options="options"
      label="Questions difficulty level"
      field="level"
    />
    <FormField v-slot="{ value, handleChange }" type="checkbox" name="answers">
      <FormItem
        class="my-4 flex flex-row items-start gap-x-3 space-y-0 rounded-md border p-4 shadow"
      >
        <FormControl>
          <Checkbox :checked="value" @update:checked="handleChange" />
        </FormControl>
        <div class="space-y-1 leading-none">
          <FormLabel>Prepare answers</FormLabel>
          <FormDescription>
            Prepare sample answers for every question
          </FormDescription>
          <FormMessage />
        </div>
      </FormItem>
    </FormField>
    <FormField v-slot="{ value, handleChange }" type="checkbox" name="task">
      <FormItem
        class="my-4 flex flex-row items-start gap-x-3 space-y-0 rounded-md border p-4 shadow"
      >
        <FormControl>
          <Checkbox :checked="value" @update:checked="handleChange" />
        </FormControl>
        <div class="space-y-1 leading-none">
          <FormLabel>Recruitment task</FormLabel>
          <FormDescription> Prepare sample recruitment task </FormDescription>
          <FormMessage />
        </div>
      </FormItem>
    </FormField>
    <div class="mt-6 flex gap-4">
      <Button variant="outline" type="button" @click="emit('back')"
        >Previous</Button
      >
      <Button type="submit">Next Step</Button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const emit = defineEmits(["submit", "back"]);

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
    level: z.string().min(1),
    answers: z.boolean().default(false).optional(),
    task: z.boolean().default(false).optional(),
  }),
);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit((values) => {
  emit("submit", values);
});
</script>
