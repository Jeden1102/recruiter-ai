<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { registerSchema } from "./registerSchema";
const { signIn } = useAuth();

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = toTypedSchema(registerSchema);

const responseError = ref("");

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values) => {
  const response = await $fetch("/api/register", {
    method: "POST",
    body: { email: values.email, password: values.password },
  });

  if (response.success) {
    console.log(response);
    useRouter().push("/login");
  } else {
    console.log(response);
    responseError.value = "There was an error creating your account";
  }
});
</script>

<template>
  <form @submit.prevent="onSubmit" class="flex flex-col gap-2">
    <FormField v-slot="{ componentField }" name="email">
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input
            type="email"
            placeholder="john@doe.com"
            v-bind="componentField"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="password">
      <FormItem>
        <FormLabel>Password</FormLabel>
        <FormControl>
          <Input
            type="password"
            placeholder="********"
            v-bind="componentField"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="passwordRepeat">
      <FormItem>
        <FormLabel>Password repeat</FormLabel>
        <FormControl>
          <Input
            type="password"
            placeholder="********"
            v-bind="componentField"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit" class="mt-2 w-full"> Register </Button>
    <p v-if="responseError" class="text-center text-red-500">
      {{ responseError }}
    </p>
  </form>
</template>
