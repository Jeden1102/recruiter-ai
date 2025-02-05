<script setup lang="ts">
const features = [
  {
    title: "home.features.feature1.title",
    description: "home.features.feature1.description",
    img: "https://placehold.co/460x500",
  },
  {
    title: "home.features.feature2.title",
    description: "home.features.feature2.description",
    img: "https://placehold.co/460x500",
  },
  {
    title: "home.features.feature3.title",
    description: "home.features.feature3.description",
    img: "https://placehold.co/460x500",
  },
  {
    title: "home.features.feature4.title",
    description: "home.features.feature4.description",
    img: "https://placehold.co/460x500",
  },
];
</script>

<template>
  <div class="overflow-hidden pb-8">
    <SectionTitleDescription
      :title="$t('home.features.title')"
      :description="$t('home.features.description')"
      class="px-4"
    />
    <div class="mt-8 flex flex-col gap-4">
      <HomeFeaturesFeature
        v-for="(feature, key) in features"
        :feature="{ ...feature, imageFirst: key % 2 === 0 }"
      />
    </div>
  </div>
</template>
