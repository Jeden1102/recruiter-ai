<script setup lang="ts">
import { twMerge } from "tailwind-merge";

const skeletons = ref<number>(1);

const addSkeleton = () => {
  if (skeletons.value >= 10) {
    clearInterval(intervalId);
  }
  skeletons.value = skeletons.value + 1;
};

let intervalId: number | undefined;

onMounted(() => {
  intervalId = setInterval(addSkeleton, 2000);
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-8 py-4">
    <Icon name="tabler:loader-3" size="48" class="animate-spin text-primary" />
    <p>Job is being analyzed</p>

    <transition-group
      name="skeleton-transition"
      tag="div"
      class="flex w-full flex-col gap-3"
    >
      <div
        v-for="id in skeletons"
        :key="id"
        :class="
          twMerge(
            'custom-pulse h-12 w-full transform rounded bg-zinc-600 transition duration-300 ease-in-out',
            id % 2 === 0 && 'h-16',
            id % 3 === 0 && 'h-20',
          )
        "
      ></div>
    </transition-group>
  </div>
</template>

<style>
.skeleton-transition-enter-active {
  @apply -translate-y-10 opacity-0;
}
.skeleton-transition-enter-to {
  @apply translate-y-0 opacity-100;
}
.skeleton-transition-leave-active {
  @apply translate-y-0 opacity-100;
}
.skeleton-transition-leave-to {
  @apply -translate-y-10 opacity-0;
}

@keyframes custom-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.custom-pulse {
  animation: custom-pulse 2s ease-in-out infinite;
}
</style>
