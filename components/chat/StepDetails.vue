<template>
  <form @submit="onSubmit">
    <template v-if="type === 'url'">
      <FormField v-slot="{ componentField }" name="url">
        <FormItem class="space-y-3">
          <FormLabel>Type the URL of the job offer</FormLabel>
          <FormControl>
            <Input
              type="text"
              placeholder="https://google.com"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
    </template>

    <template v-if="type === 'cv'">
      <FormField v-slot="{ componentField }" name="file">
        <FormItem class="space-y-3">
          <FormLabel>Insert your CV file</FormLabel>
          <FormControl>
            <input type="file" v-bind="componentField" name="file" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
    </template>

    <template v-if="type === 'custom'">
      <FormField v-slot="{ componentField }" name="requirements">
        <FormItem class="space-y-3">
          <FormLabel>Job Requirements</FormLabel>
          <FormControl>
            <Textarea
              placeholder="List the job requirements"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="niceToHave">
        <FormItem class="space-y-3">
          <FormLabel>Nice to Have</FormLabel>
          <FormControl>
            <Textarea
              placeholder="List any 'nice to have' skills"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="responsibilities">
        <FormItem class="space-y-3">
          <FormLabel>Responsibilities</FormLabel>
          <FormControl>
            <Textarea
              placeholder="List the key responsibilities"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
    </template>
    <Button type="submit">Next</Button>
  </form>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import type { ZodType, ZodTypeDef } from "zod";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const props = defineProps<{
  type: string;
}>();

const emit = defineEmits(["submit"]);

const prepareSchema = (): ZodType<any, ZodTypeDef, any> => {
  if (props.type === "url") {
    return z.object({
      url: z.string().url(),
    });
  }
  if (props.type === "cv") {
    return z.object({
      file: z.any().refine((file) => file instanceof File, {
        message: "File is required",
      }),
    });
  }
  if (props.type === "custom") {
    return z.object({
      requirements: z.string().max(1024),
      niceToHave: z.string().max(1024),
      responsibilities: z.string().max(1024),
    });
  }
  return z.object({});
};

const formSchema = toTypedSchema(prepareSchema());

const { handleSubmit } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
  emit("submit", values, "here1");
});
</script>
