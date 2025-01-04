<template>
  <div class="relative overflow-x-hidden py-20">
    <div class="container flex flex-col items-center justify-center gap-4">
      <TextGradient>
        <h1 class="mb-4 text-5xl">Recruiter AI</h1>
      </TextGradient>
      <p class="text-center text-3xl font-light">
        {{ $t("home.hero.title") }}
      </p>
      <p class="text-center font-semibold uppercase text-secondary">
        {{ $t("home.hero.subtitle") }}
      </p>
      <Button asChild size="lg" class="mt-8">
        <NuxtLinkLocale to="/recruiter">
          {{ $t("common.getStarted") }}
        </NuxtLinkLocale>
      </Button>
      <NuxtImg
        src="/images/bubbles.png"
        width="580"
        height="520"
        alt="Bubbles image"
        class="mt-8"
      />
    </div>
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
