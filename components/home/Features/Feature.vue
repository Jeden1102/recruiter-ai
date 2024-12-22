<template>
  <div class="container relative">
    <div
      :class="
        twMerge(
          'flex flex-col gap-4 relative md:flex-row md:items-center md:gap-8 md:py-8 md:justify-between',
          feature.imageFirst && 'md:flex-row-reverse'
        )
      "
    >
      <NuxtImg
        :src="feature.img"
        width="460"
        height="500"
        alt="Feature image"
        class="rounded-lg"
      />
      <div class="md:max-w-[400px]">
        <p class="text-primary mb-2 md:text-xl">{{ feature.title }}</p>
        <p class="text-xl font-urbanist relative md:text-2xl lg:text-4xl">
          {{ feature.description }}
        </p>
      </div>
    </div>
    <div
      :class="
        twMerge(
          'absolute -right-20 bottom-20 w-[200px] h-[200px] pointer-events-none -z-10 opacity-50',
          feature.imageFirst && 'left-0'
        )
      "
    >
      <div
        :class="
          twMerge(
            'absolute w-full h-full bg-gradient-radial from-secondary/50 to-transparent blur-2xl',
            feature.imageFirst && 'from-primary/50'
          )
        "
      ></div>
    </div>
  </div>
</template>

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
