<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
  <NuxtLink
    v-for="locale in availableLocales"
    :key="locale.code"
    :to="switchLocalePath(locale.code)"
    class="nav-link block border-l uppercase md:border-b-0 md:border-zinc-600 md:!pl-6"
  >
    {{ locale.code }}
  </NuxtLink>
</template>
