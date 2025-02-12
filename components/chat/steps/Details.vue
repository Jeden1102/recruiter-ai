<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import type { ZodType, ZodTypeDef } from "zod";

const { t } = useI18n();

const props = defineProps<{
  type: string;
}>();

const MAX_FILE_SIZE = 500000;

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const emit = defineEmits(["submit", "back"]);

const prepareSchema = (): ZodType<any, ZodTypeDef, any> => {
  if (props.type === "url") {
    return z.object({
      url: z.string().url(),
    });
  }
  if (props.type === "cv") {
    return z.object({
      file: z
        .any()
        .refine((file) => file instanceof File, {
          message: t("validations.fileRequired"),
        })
        .refine((file) => file.size <= MAX_FILE_SIZE, {
          message: t("validations.fileSize", { size: MAX_FILE_SIZE / 1000 }),
        })
        .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
          message: t("validations.fileTypes"),
        }),
    });
  }
  if (props.type === "custom") {
    return z.object({
      position: z.string().max(1024),
      requirements: z.string().max(1024).optional(),
      niceToHave: z.string().max(1024).optional(),
      responsibilities: z.string().max(1024).optional(),
    });
  }
  return z.object({});
};

const formSchema = toTypedSchema(prepareSchema());

const { handleSubmit } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit((values) => {
  emit("submit", values);
});
</script>

<template>
  <form @submit="onSubmit">
    <template v-if="type === 'url'">
      <TextGradient class="mb-4 text-2xl font-semibold">
        {{ $t("form.url.title") }}
      </TextGradient>
      <FormField v-slot="{ componentField }" name="url">
        <FormItem class="space-y-3">
          <FormLabel>{{ $t("form.url.label") }}</FormLabel>
          <FormControl>
            <Input
              type="text"
              :placeholder="$t('form.url.placeholder')"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
    </template>
    <template v-if="type === 'cv'">
      <TextGradient class="mb-4 text-2xl font-semibold">
        {{ $t("form.cv.title") }}
      </TextGradient>
      <FormField v-slot="{ componentField }" name="file">
        <FormItem class="space-y-3">
          <FormLabel>{{ $t("form.cv.label") }}</FormLabel>
          <FormControl>
            <Input
              class="bg-zinc-700"
              type="file"
              v-bind="componentField"
              name="file"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
    </template>

    <template v-if="type === 'custom'">
      <TextGradient class="mb-4 text-2xl font-semibold">
        {{ $t("form.custom.title") }}
      </TextGradient>
      <FormField v-slot="{ componentField }" name="position">
        <FormItem class="space-y-3">
          <FormLabel>{{ $t("form.custom.position.label") }}</FormLabel>
          <FormControl>
            <Textarea
              :placeholder="$t('form.custom.position.placeholder')"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="requirements">
        <FormItem class="space-y-3">
          <FormLabel>{{ $t("form.custom.requirements.label") }}</FormLabel>
          <FormControl>
            <Textarea
              :placeholder="$t('form.custom.requirements.placeholder')"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="niceToHave">
        <FormItem class="space-y-3">
          <FormLabel>{{ $t("form.custom.niceToHave.label") }}</FormLabel>
          <FormControl>
            <Textarea
              :placeholder="$t('form.custom.niceToHave.placeholder')"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="responsibilities">
        <FormItem class="space-y-3">
          <FormLabel>{{ $t("form.custom.responsibilities.label") }}</FormLabel>
          <FormControl>
            <Textarea
              :placeholder="$t('form.custom.responsibilities.placeholder')"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
    </template>
    <div class="mt-6 flex gap-4">
      <Button variant="outline" type="button" @click="emit('back')">
        {{ $t("form.buttons.previous") }}
      </Button>
      <Button type="submit">{{ $t("form.buttons.next") }}</Button>
    </div>
  </form>
</template>
