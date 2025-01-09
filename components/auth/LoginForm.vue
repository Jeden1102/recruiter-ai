<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
const { signIn } = useAuth();

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = toTypedSchema(
  z.object({
    email: z.string().min(2).max(50).email(),
    password: z.string().min(2).max(50),
  }),
);

const isError = ref(false);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values) => {
  const result = await signIn("credentials", {
    ...values,
    redirect: false,
  });

  if (result?.error) {
    console.error("Login error:", result.error);
    isError.value = true;
  } else {
    useRouter().push("/profile");
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
    <Button type="submit" class="mt-2 w-full"> Login </Button>
    <p v-if="isError" class="text-center text-red-500">Invalid credentials</p>
  </form>
</template>
