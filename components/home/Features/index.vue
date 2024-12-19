<template>
  <div class="container pr-0">
    <SectionTitleDescription
      title="Features"
      description="Revolutionating features for recruitment"
    />
    <div class="flex overflow-x-auto gap-4 snap-x no-scrollbar my-4 pr-4">
      <HomeFeaturesFeature v-for="feature in features" :feature="feature" />
    </div>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    title: "CV based questions",
    subtitle: "Easy as 1, 2, 3",
    description: "Generate questions based on your CV",
    icon: "ph:read-cv-logo-thin",
  },
  {
    title: "Job offer URL based questions",
    subtitle: "Just paste the URL",
    description: "Generate questions based on job offer URL",
    icon: "carbon:url",
  },
  {
    title: "Custom details based questions",
    subtitle: "For advanced users",
    description: "Generate questions based on your own settings",
    icon: "mdi-light:settings",
  },
  {
    title: "Save your questions",
    subtitle: "For future use",
    description: "Save your questions for future use",
    icon: "material-symbols-light:file-save-outline",
  },
];
</script>
