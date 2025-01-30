<template>
  <form @submit="onSubmit">
    <TextGradient class="mb-4 text-2xl font-semibold">
      {{ $t("settings.difficultLevel.title") }}
    </TextGradient>
    <ChatRadios
      :options="options"
      :label="$t('settings.general.questionsDifficulty.label')"
      field="level"
    />
    <div class="mt-6 flex gap-4">
      <Button variant="outline" type="button" @click="emit('back')">
        {{ $t("form.buttons.previous") }}
      </Button>
      <Button type="submit">{{ $t("common.generate") }}</Button>
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
    title: "settings.general.questionsDifficulty.options.easy.title",
    desc: "settings.general.questionsDifficulty.options.easy.description",
    icon: "carbon:skill-level-basic",
  },
  {
    value: "intermediate",
    title: "settings.general.questionsDifficulty.options.intermediate.title",
    desc: "settings.general.questionsDifficulty.options.intermediate.description",
    icon: "carbon:skill-level-intermediate",
  },
  {
    value: "advanced",
    title: "settings.general.questionsDifficulty.options.advanced.title",
    desc: "settings.general.questionsDifficulty.options.advanced.description",
    icon: "carbon:skill-level-advanced",
  },
];

const formSchema = toTypedSchema(
  z.object({
    level: z.string().min(1),
  }),
);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit((values) => {
  emit("submit", values);
});
</script>
