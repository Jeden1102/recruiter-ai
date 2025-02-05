<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { registerSchema } from "./registerSchema";

const { signIn } = useAuth();

const formSchema = toTypedSchema(registerSchema);

const responseError = ref("");

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

    await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    useRouter().push("/profile");
  } catch (error: any) {
    if (error.data && error.data.statusMessage) {
      responseError.value = error.data.statusMessage;
    } else {
      responseError.value = "Something went wrong. Please try again.";
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
    <p v-if="responseError" class="text-center text-red-500">
      {{ responseError }}
    </p>
  </form>
</template>
