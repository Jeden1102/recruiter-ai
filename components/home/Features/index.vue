<template>
  <div class="overflow-hidden">
    <SectionTitleDescription
      title="Features"
      description="Revolutionating features for recruitment"
      class="px-4"
    />
    <div class="flex flex-col gap-4 my-4">
      <HomeFeaturesFeature
        v-for="(feature, key) in features"
        :feature="{ ...feature, imageFirst: key % 2 === 0 }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    title: "CV based questions",
    description:
      "Harness the power of your CV to generate tailored questions. This feature analyzes the contents of your CV to create relevant and personalized queries.",
    img: "https://placehold.co/460x500",
  },
  {
    title: "Job offer URL based questions",
    description:
      "Provide a job offer URL and let our system craft questions specific to the role. This ensures that the questions are aligned with the requirements of the job listing.",
    img: "https://placehold.co/460x500",
  },
  {
    title: "Custom details based questions",
    description:
      "Input your own settings to generate customized questions. This option allows for flexibility and personalization to meet specific recruitment needs.",
    img: "https://placehold.co/460x500",
  },
  {
    title: "Save your questions",
    description:
      "Easily save your generated questions for future reference. This feature ensures you have access to your curated list whenever needed.",
    img: "https://placehold.co/460x500",
  },
];
</script>
