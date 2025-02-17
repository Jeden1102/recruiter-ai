<script setup lang="ts">
const props = defineProps<{
  title: string;
  description?: string;
}>();
</script>

<template>
  <section>
    <h2 class="text-xl font-semibold">{{ title }}</h2>
    <p v-if="description">{{ description }}</p>
  </section>
</template>
