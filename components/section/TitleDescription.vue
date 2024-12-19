<template>
  <div class="flex flex-col items-center justify-center container">
    <TextGradient>
      <h1 class="text-3xl mb-4 text-center">{{ title }}</h1>
    </TextGradient>
    <p class="text-xl text-center font-light" v-if="description">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  description?: string;
}>();
</script>
