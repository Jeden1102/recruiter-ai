<template>
  <span
    :class="
      cn(
        'bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text',
        props.class
      )
    "
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>
