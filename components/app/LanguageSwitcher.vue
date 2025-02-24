<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">
        <Icon name="material-symbols:language" />
        {{ locale.toUpperCase() }}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuGroup>
        <DropdownMenuItem v-for="locale in availableLocales" :key="locale.code">
          <NuxtLink
            :to="switchLocalePath(locale.code)"
            @click="toggleMenuIfMobile"
          >
            {{ locale.name }}
          </NuxtLink>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
