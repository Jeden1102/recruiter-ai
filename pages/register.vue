<script setup lang="ts">
definePageMeta({
  unauthenticatedOnly: true,
});
</script>

<template>
  <div class="container mx-auto">
    <SectionTitleDescription title="Register" />
    <Card class="mx-auto my-4 max-w-[520px]">
      <CardHeader>
        <CardTitle class="text-center text-2xl font-light">
          <p>Create new account</p>
        </CardTitle>
      </CardHeader>
      <CardContent class="flex flex-col gap-2">
        <AuthRegisterForm />
      </CardContent>
      <CardFooter>
        <NuxtLinkLocale
          to="/login"
          class="w-full text-center text-secondary hover:underline"
          >Have an account? Log in</NuxtLinkLocale
        >
      </CardFooter>
    </Card>
  </div>
</template>
