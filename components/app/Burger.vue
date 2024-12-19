<template>
  <div class="flex h-4 w-4 flex-col items-center justify-center gap-[0.2rem]">
    <div
      :class="
        twMerge(
          'w-[1.5rem] h-[0.15rem] bg-white rounded-full transition-transform ease-curve-d duration-300 origin-center',
          isActive && 'rotate-45 translate-y-[0.3rem]'
        )
      "
    ></div>
    <div
      :class="
        twMerge(
          'w-[1.5rem] h-[0.15rem] bg-white rounded-full transition-opacity ease-curve-d duration-300',
          isActive && 'opacity-0'
        )
      "
    ></div>
    <div
      :class="
        twMerge(
          'w-[1.5rem] h-[0.15rem] bg-white rounded-full transition-transform ease-curve-d duration-300 origin-center',
          isActive && '-rotate-45 -translate-y-[0.4rem]'
        )
      "
    ></div>
  </div>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";

const props = defineProps<{
  isActive: boolean;
}>();
</script>
