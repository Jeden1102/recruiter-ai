<template>
  <form @submit="onSubmit">
    <TextGradient class="mb-4 text-2xl font-semibold">
      {{ $t("settings.general.title") }}
    </TextGradient>
    <FormField v-slot="{ value, handleChange }" type="checkbox" name="answers">
      <FormItem
        class="my-4 flex flex-row items-start gap-x-3 space-y-0 rounded-md border p-4 shadow"
      >
        <FormControl>
          <Checkbox :checked="value" @update:checked="handleChange" />
        </FormControl>
        <div class="space-y-1 leading-none">
          <FormLabel>{{
            $t("settings.general.prepareAnswers.label")
          }}</FormLabel>
          <FormDescription>
            {{ $t("settings.general.prepareAnswers.description") }}
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
          <FormLabel>{{
            $t("settings.general.recruitmentTask.label")
          }}</FormLabel>
          <FormDescription>
            {{ $t("settings.general.recruitmentTask.description") }}
          </FormDescription>
          <FormMessage />
        </div>
      </FormItem>
    </FormField>
    <FormField
      v-slot="{ value, handleChange }"
      type="checkbox"
      name="restricted"
    >
      <FormItem
        class="my-4 flex flex-row items-start gap-x-3 space-y-0 rounded-md border p-4 shadow"
      >
        <FormControl>
          <Checkbox :checked="value" @update:checked="handleChange" />
        </FormControl>
        <div class="space-y-1 leading-none">
          <FormLabel>{{ $t("settings.general.private.label") }}</FormLabel>
          <FormDescription>
            {{ $t("settings.general.private.description") }}
          </FormDescription>
          <FormMessage />
        </div>
      </FormItem>
    </FormField>
    <FormField
      v-slot="{ value }"
      name="authorizedEmails"
      v-if="values.restricted"
    >
      <FormItem>
        <FormLabel>Authorized Emails</FormLabel>
        <FormControl>
          <TagsInput :model-value="value">
            <TagsInputItem v-for="item in value" :key="item" :value="item">
              <TagsInputItemText />
              <TagsInputItemDelete />
            </TagsInputItem>

            <TagsInputInput placeholder="john@doe.com" />
          </TagsInput>
        </FormControl>
        <FormDescription> Type the email and press enter </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
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
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from "@/components/ui/tags-input";

const emit = defineEmits(["submit", "back"]);

const formSchema = toTypedSchema(
  z.object({
    answers: z.boolean().default(false).optional(),
    task: z.boolean().default(false).optional(),
    restricted: z.boolean().default(false).optional(),
    authorizedEmails: z.array(z.string()).optional(),
  }),
);

const { handleSubmit, values } = useForm({
  validationSchema: formSchema,
  initialValues: {
    authorizedEmails: [],
  },
});

const onSubmit = handleSubmit((values) => {
  emit("submit", values);
});
</script>
