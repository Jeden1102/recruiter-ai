<template>
  <div
    class="flex flex-col items-center justify-center gap-4 pt-12 pb-20 container relative"
  >
    <TextGradient>
      <h1 class="text-5xl mb-4">Recruiter AI</h1>
    </TextGradient>
    <p class="text-3xl text-center font-light">
      Your AI-powered recruitment assistant
    </p>
    <p class="text-center uppercase text-secondary font-semibold">
      Generate questions, find the job of your dream!
    </p>
    <Button asChild size="lg" class="mt-8">
      <NuxtLink to="/recruiter">Get started</NuxtLink>
    </Button>
    <NuxtImg
      src="/images/bubbles.png"
      width="580"
      height="520"
      alt="Bubbles image"
      class="mt-8"
    />
    <GradientCircle :position="{ x: 'left', y: 'top' }" variant="primary" />
    <GradientCircle
      :position="{ x: 'right', y: 'bottom' }"
      variant="secondary"
    />
  </div>
</template>

<script setup lang="ts">
import { GradientCircle } from "../ui/gradient-circle";
</script>

<style scoped></style>
