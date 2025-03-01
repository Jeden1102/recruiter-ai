<script setup lang="ts">
import { twMerge } from "tailwind-merge";

const props = defineProps<{
  card: {
    title: string;
    description: string;
    key?: string;
    cta?: string;
    uri?: string;
  };
  last?: boolean;
  size?: "sm" | "md";
}>();

const emits = defineEmits(["click"]);
</script>

<template>
  <div
    :class="
      twMerge(
        'relative flex flex-col gap-4 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-6',
        last && 'md:col-span-2',
        size === 'sm' && 'gap-3 px-3 py-5',
      )
    "
  >
    <TextGradient
      :class="twMerge('text-2xl font-semibold', size === 'sm' && 'text-xl')"
    >
      {{ $t(card.title) }}
    </TextGradient>
    <p :class="twMerge('text-xl', size === 'sm' && 'text-base')">
      {{ $t(card.description) }}
    </p>
    <div class="mt-auto">
      <Button v-if="card.key" asChild class="mt-10 w-fit" size="lg">
        <NuxtLinkLocale :to="`/recruiter?mode=${card.key}`">
          {{ $t("common.getStarted") }}
        </NuxtLinkLocale>
      </Button>
      <Button
        v-else-if="card.cta"
        asChild
        class="mt-10 w-fit"
        size="lg"
        @click="emits('click')"
      >
        <NuxtLinkLocale :to="card.uri || '#'">
          {{ card.cta }}
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
