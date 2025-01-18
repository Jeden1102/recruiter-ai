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
  description:
    "Recruiter AI - generate interview questions with the use of AI.",
  ogDescription:
    "Recruiter AI - generate interview questions with the use of AI.",
  ogImage: config.public.APP_BASE_URI + "/bubbles.png",
  twitterCard: "summary_large_image",
});
</script>
