<script setup lang="ts">
import { twMerge } from "tailwind-merge";

defineProps<{
  isActive: boolean;
}>();
</script>

<template>
  <div class="flex h-4 w-4 flex-col items-center justify-center gap-[0.2rem]">
    <div
      :class="
        twMerge(
          'ease-curve-d h-[0.15rem] w-[1.5rem] origin-center rounded-full bg-white transition-transform duration-300',
          isActive && 'translate-y-[0.3rem] rotate-45',
        )
      "
    ></div>
    <div
      :class="
        twMerge(
          'ease-curve-d h-[0.15rem] w-[1.5rem] rounded-full bg-white transition-opacity duration-300',
          isActive && 'opacity-0',
        )
      "
    ></div>
    <div
      :class="
        twMerge(
          'ease-curve-d h-[0.15rem] w-[1.5rem] origin-center rounded-full bg-white transition-transform duration-300',
          isActive && '-translate-y-[0.4rem] -rotate-45',
        )
      "
    ></div>
  </div>
</template>
