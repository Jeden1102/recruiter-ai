<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const config = useRuntimeConfig();

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Recruiter AI` : "Recruiter AI";
  },
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  title: "Home",
  ogTitle: "Home",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: config.public.APP_BASE_URI + "/bubbles.png",
  twitterCard: "summary_large_image",
});
</script>
