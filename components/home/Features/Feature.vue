<script setup lang="ts">
import { twMerge } from "tailwind-merge";

const props = defineProps<{
  feature: {
    title: string;
    description: string;
    img: string;
    imageFirst: boolean;
  };
}>();
</script>

<style scoped>
.bg-gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-stops));
}
</style>

<template>
  <div class="container relative">
    <div
      :class="
        twMerge(
          'relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8 md:py-8',
          feature.imageFirst && 'md:flex-row-reverse',
        )
      "
    >
      <NuxtImg
        :src="feature.img"
        alt="Feature image"
        class="my-4 rounded-lg object-cover md:my-0"
        format="webp"
        width="560"
        height="440"
        loading="lazy"
        fit="cover"
      />
      <div class="md:max-w-[400px]">
        <p class="mb-2 text-secondary md:text-xl">{{ $t(feature.title) }}</p>
        <p class="relative font-urbanist text-xl md:text-2xl lg:text-4xl">
          {{ $t(feature.description) }}
        </p>
      </div>
    </div>
    <GradientCircle
      :position="{ x: feature.imageFirst ? 'left' : 'right', y: 'bottom' }"
      :variant="feature.imageFirst ? 'primary' : 'secondary'"
    />
  </div>
</template>
