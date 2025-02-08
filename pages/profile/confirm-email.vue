<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const code: string = route.query.code;

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

    console.log(response);
    // responseMessage.value = response.statusMessage;
    // isError.value = false;
  } catch (error: any) {
    console.log(error);
    // isError.value = true;
    // if (error.data && error.data.statusMessage) {
    //   responseMessage.value = error.data.statusMessage;
    // } else {
    //   responseMessage.value = "Something went wrong. Please try again.";
    // }
  }
};

confirmEmail();
</script>
<template>
  <main class="slim-container container">
    <SectionTitleDescription
      title="Email confirmation"
      description="Email confirmed successfully"
    />
    <Card class="my-4">
      <CardContent class="flex flex-col items-center gap-4 pt-4">
        <p>
          Your email has been confirmed successfully. Now you can login to your
          account!
        </p>
        <Button asChild>
          <NuxtLinkLocale to="/login">Log in</NuxtLinkLocale>
        </Button>
      </CardContent>
    </Card>
  </main>
</template>
