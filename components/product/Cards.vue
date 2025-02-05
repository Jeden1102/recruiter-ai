<script setup lang="ts">
const cards = [
  {
    title: "features.cv_questions_title",
    description: "features.cv_questions_description",
    key: "cv",
  },
  {
    title: "features.url_questions_title",
    description: "features.url_questions_description",
    key: "url",
  },
  {
    title: "features.custom_questions_title",
    description: "features.custom_questions_description",
    key: "custom",
  },
];
</script>

<template>
  <div class="flex flex-col gap-4 py-4 md:grid md:grid-cols-2">
    <ProductCard
      v-for="(card, idx) in cards"
      :card="{
        title: $t(card.title),
        description: $t(card.description),
        key: card.key,
      }"
      :last="idx === cards.length - 1"
    />
  </div>
</template>
