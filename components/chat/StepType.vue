<template>
  <form @submit="onSubmit">
    <FormField v-slot="{ componentField }" type="radio" name="type">
      <FormItem class="space-y-3">
        <FormLabel
          >How would you generate your recruitment questions?</FormLabel
        >

        <FormControl>
          <RadioGroup class="flex flex-col space-y-1" v-bind="componentField">
            <FormItem class="flex items-center space-y-0 gap-x-3">
              <FormControl>
                <RadioGroupItem value="url" />
              </FormControl>
              <FormLabel class="font-normal"> Job offer url </FormLabel>
            </FormItem>
            <FormItem class="flex items-center space-y-0 gap-x-3">
              <FormControl>
                <RadioGroupItem value="cv" />
              </FormControl>
              <FormLabel class="font-normal"> Based on my CV </FormLabel>
            </FormItem>
            <FormItem class="flex items-center space-y-0 gap-x-3">
              <FormControl>
                <RadioGroupItem value="custom" />
              </FormControl>
              <FormLabel class="font-normal"> Custom settings </FormLabel>
            </FormItem>
          </RadioGroup>
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit">Next</Button>
  </form>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const emit = defineEmits(["submit"]);

const formSchema = toTypedSchema(
  z.object({
    type: z.string().min(1),
  })
);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
  emit("submit", values);
});
</script>
