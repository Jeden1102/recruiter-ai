<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { loginSchema } from "./loginSchema";
const { signIn } = useAuth();

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = toTypedSchema(loginSchema);

const responseError = ref("");

const isLoading = ref(false);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values) => {
  isLoading.value = true;
  const result = await signIn("credentials", {
    ...values,
    redirect: false,
  });

  if (result?.error) {
    responseError.value = result.error;
  } else {
    useRouter().push("/profile");
  }
  isLoading.value = false;
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
        <FormLabel>{{ $t("auth.password") }}</FormLabel>
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
    <Button
      :loading="isLoading"
      :disabled="isLoading"
      type="submit"
      class="mt-2 w-full"
    >
      {{ $t("auth.login") }}
    </Button>
    <p v-if="responseError" class="text-center text-red-500">
      {{ responseError }}
    </p>
  </form>
</template>
