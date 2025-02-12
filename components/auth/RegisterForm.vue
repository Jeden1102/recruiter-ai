<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { registerSchema } from "./registerSchema";

const { t } = useI18n();

const formSchema = toTypedSchema(registerSchema);

const isError = ref(false);
const responseMessage = ref("");

const isLoading = ref(false);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values) => {
  isLoading.value = true;
  try {
    const response = await $fetch("/api/register", {
      method: "POST",
      body: {
        email: values.email,
        password: values.password,
        passwordRepeat: values.passwordRepeat,
      },
    });

    responseMessage.value = t(response.statusMessage);
    isError.value = false;
  } catch (error: any) {
    isError.value = true;
    if (error.data && error.data.statusMessage) {
      responseMessage.value = t(error.data.statusMessage);
    } else {
      responseMessage.value = "Something went wrong. Please try again.";
    }
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
    <FormField v-slot="{ componentField }" name="passwordRepeat">
      <FormItem>
        <FormLabel>{{ $t("auth.passwordRepeat") }}</FormLabel>
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
      {{ $t("auth.register") }}
    </Button>
    <Alert :variant="isError && 'destructive'" v-if="responseMessage">
      <AlertDescription>
        {{ responseMessage }}
      </AlertDescription>
    </Alert>
  </form>
</template>
