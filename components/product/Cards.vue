<template>
  <div class="flex flex-col gap-4 py-4 md:grid md:grid-cols-2">
    <ProductCard
      v-for="(card, idx) in cards"
      :card="card"
      :last="idx === cards.length - 1"
    />
  </div>
</template>

<script setup lang="ts">
const cards = [
  {
    title: "CV based questions",
    description: "Harness the power of your CV to generate tailored questions.",
    key: "cv",
  },
  {
    title: "Job offer URL based questions",
    description:
      "Provide a job offer URL and let our system craft questions specific to the role.",
    key: "url",
  },
  {
    title: "Custom details based questions",
    description: "Input your own settings to generate customized questions.",
    key: "custom",
  },
];
</script>
