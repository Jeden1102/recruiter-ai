<template>
  <div
    :class="
      twMerge(
        'relative flex flex-col gap-4 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-6',
        last && 'md:col-span-2',
      )
    "
  >
    <TextGradient class="text-2xl font-semibold">
      {{ $t(card.title) }}
    </TextGradient>
    <p class="text-xl">{{ $t(card.description) }}</p>
    <div class="mt-auto">
      <Button asChild class="mt-10 w-fit" size="lg">
        <NuxtLinkLocale :to="`/recruiter?mode=${card.key}`">
          {{ $t("common.getStarted") }}
        </NuxtLinkLocale>
      </Button>
    </div>
    <NuxtImg
      src="/images/decorative.svg"
      width="200"
      height="200"
      alt="Bubbles image"
      class="absolute -bottom-20 -right-20 opacity-50"
    />
  </div>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";

const props = defineProps<{
  card: { title: string; description: string; key: string };
  last: boolean;
}>();
</script>
