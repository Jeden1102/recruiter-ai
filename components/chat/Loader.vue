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
  <div class="flex justify-center items-center flex-col gap-8 py-4">
    <Icon name="tabler:loader-3" size="48" class="animate-spin text-primary" />
    <p>Job is being analyzed</p>

    <transition-group
      name="skeleton-transition"
      tag="div"
      class="w-full flex flex-col gap-3"
    >
      <div
        v-for="id in skeletons"
        :key="id"
        :class="
          twMerge(
            'w-full h-12 bg-zinc-600 rounded custom-pulse transition duration-300 ease-in-out transform',
            id % 2 === 0 && 'h-16',
            id % 3 === 0 && 'h-20'
          )
        "
      ></div>
    </transition-group>
  </div>
</template>

<style>
.skeleton-transition-enter-active {
  @apply opacity-0 -translate-y-10;
}
.skeleton-transition-enter-to {
  @apply opacity-100 translate-y-0;
}
.skeleton-transition-leave-active {
  @apply opacity-100 translate-y-0;
}
.skeleton-transition-leave-to {
  @apply opacity-0 -translate-y-10;
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
