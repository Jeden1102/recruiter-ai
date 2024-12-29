<template>
  <div
    :class="
      twMerge(
        'rounded-lg bg-zinc-900 border border-zinc-800 flex flex-col py-6 px-4 gap-4 relative overflow-hidden',
        last && 'md:col-span-2'
      )
    "
  >
    <TextGradient class="text-2xl font-semibold"
      >{{ card.title }}
    </TextGradient>
    <p class="text-xl">{{ card.description }}</p>
    <div class="mt-auto">
      <Button asChild class="w-fit mt-10" size="lg">
        <NuxtLinkLocale :to="`/recruiter?mode=${card.key}`"
          >Try out</NuxtLinkLocale
        >
      </Button>
    </div>
    <NuxtImg
      src="/images/decorative.svg"
      width="200"
      height="200"
      alt="Bubbles image"
      class="absolute -right-20 -bottom-20 opacity-50"
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
