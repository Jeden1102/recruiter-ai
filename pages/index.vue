<template>
  <main>
    <HomeHero />
    <HomeFeatures />
  </main>
</template>
<script setup lang="ts">
const config = useRuntimeConfig();

useSeoMeta({
  title: "Home",
  ogTitle: "Home",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: config.public.APP_BASE_URI + "/bubbles.png",
  twitterCard: "summary_large_image",
});
</script>
