<template>
  <div
    :class="
      twMerge(
        'absolute -right-20 bottom-20 w-[200px] h-[200px] pointer-events-none -z-10 opacity-30',
        position.x === 'left' && 'left-0',
        position.y === 'top' && 'top-0'
      )
    "
  >
    <div
      :class="
        twMerge(
          'absolute w-full h-full bg-secondary/50 to-transparent blur-2xl',
          variant === 'primary' && 'bg-primary/50'
        )
      "
    >
      here
    </div>
  </div>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";

const props = defineProps<{
  position: {
    x: "left" | "right";
    y: "top" | "bottom";
  };
  variant: "primary" | "secondary";
}>();
</script>
