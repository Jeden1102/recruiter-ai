<template>
  <NuxtLoadingIndicator :height="2" color="red" />
  <Toaster />
  <NuxtLayout>
    <VitePwaManifest />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { Toaster } from "@/components/ui/sonner";
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
