<script setup>
const { locale } = useI18n();

const config = useRuntimeConfig();

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Recruiter AI` : "Recruiter AI";
  },
  htmlAttrs: {
    lang: locale.value,
  },
});

useSetPageSeo("home");

useSeoMeta({
  ogImage: config.public.APP_BASE_URI + "/images/bubbles.png",
  twitterImage: config.public.APP_BASE_URI + "/images/bubbles.png",
  icon: config.public.APP_BASE_URI + "/images/bubbles.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <NuxtLoadingIndicator :height="2" color="red" />
  <Toaster />
  <NuxtLayout>
    <VitePwaManifest />
    <NuxtPage />
  </NuxtLayout>
</template>
