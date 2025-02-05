<script setup lang="ts">
const props = defineProps<{
  title: string;
  description?: string;
}>();
</script>

<template>
  <div class="container flex flex-col items-center justify-center">
    <TextGradient>
      <h1 class="mb-4 text-center text-3xl lg:text-5xl">{{ $t(title) }}</h1>
    </TextGradient>
    <p class="text-center text-xl font-light lg:text-2xl" v-if="description">
      {{ description }}
    </p>
  </div>
</template>
