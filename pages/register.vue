<script setup lang="ts">
definePageMeta({
  unauthenticatedOnly: true,
});

useSetPageSeo("register");
</script>

<template>
  <div class="container mx-auto">
    <SectionTitleDescription :title="$t('register.meta.title')" />
    <Card class="mx-auto my-4 max-w-[520px]">
      <CardHeader>
        <CardTitle class="text-center text-2xl font-light">
          <p>{{ $t("register.meta.description") }}</p>
        </CardTitle>
      </CardHeader>
      <CardContent class="flex flex-col gap-2">
        <AuthRegisterForm />
      </CardContent>
      <CardFooter>
        <NuxtLinkLocale
          to="/login"
          class="w-full text-center text-secondary hover:underline"
          >{{ $t("register.haveAccount") }}</NuxtLinkLocale
        >
      </CardFooter>
    </Card>
  </div>
</template>
