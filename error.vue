<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col items-center gap-4 py-8">
      <h1 class="text-3xl text-center md:text-4xl lg:text-5xl">
        Something went wrong
      </h1>
      <TextGradient>
        <h2 class="text-3xl md:text-4xl lg:text-5xl">
          {{ error?.statusCode }}
        </h2>
      </TextGradient>
      <Button @click="handleError">Take me home</Button>
    </div>
  </NuxtLayout>
</template>
