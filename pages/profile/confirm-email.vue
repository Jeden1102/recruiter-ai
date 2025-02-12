<script setup lang="ts">
const { t } = useI18n();

const route = useRoute();
const router = useRouter();

const code = route.query.code as string;

const responseMessage = ref("");
const isError = ref(true);

if (!code) {
  useRouter().push("/");
}

const confirmEmail = async () => {
  try {
    const response = await $fetch("/api/user/confirm-email", {
      method: "POST",
      body: {
        code,
      },
    });

    responseMessage.value = response.message;
    isError.value = false;
  } catch (error: any) {
    isError.value = true;
    if (error.data && error.data.statusMessage) {
      responseMessage.value = t(error.data.statusMessage);
    } else {
      responseMessage.value = "Something went wrong. Please try again.";
    }
  }
};

confirmEmail();
</script>
<template>
  <main class="slim-container container">
    <SectionTitleDescription :title="$t('confirmEmail.title')" />
    <Card class="my-4">
      <CardContent class="flex flex-col items-center gap-4 pt-4">
        <p>
          {{ responseMessage }}
        </p>
        <Button asChild v-if="!isError">
          <NuxtLinkLocale to="/login">{{ $t("common.logIn") }}</NuxtLinkLocale>
        </Button>
      </CardContent>
    </Card>
  </main>
</template>
