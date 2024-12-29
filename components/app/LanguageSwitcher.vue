<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

console.log(locales.value);

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
  <NuxtLink
    v-for="locale in availableLocales"
    :key="locale.code"
    :to="switchLocalePath(locale.code)"
    class="uppercase nav-link"
  >
    {{ locale.code }}
  </NuxtLink>
</template>
