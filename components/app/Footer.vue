<template>
  <footer class="flex flex-col bg-zinc-950">
    <div class="container flex flex-col gap-4 py-8 md:flex-row md:gap-36">
      <div>
        <NuxtLinkLocale to="/">
          <AppLogo />
        </NuxtLinkLocale>
      </div>
      <div class="flex flex-col gap-2">
        <p class="mb-2 text-lg font-semibold">
          {{ $t("footer.navigationTitle") }}
        </p>
        <NuxtLinkLocale to="/">{{ $t("navigation.home") }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/product">{{
          $t("navigation.product")
        }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/recruiter">{{
          $t("navigation.recruiter")
        }}</NuxtLinkLocale>
      </div>
      <div class="flex flex-col gap-2">
        <p class="mb-2 text-lg font-semibold">{{ $t("footer.aboutTitle") }}</p>
        <NuxtLinkLocale to="/terms">{{ $t("footer.terms") }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/privacy">{{
          $t("footer.privacy")
        }}</NuxtLinkLocale>
      </div>
    </div>
    <div class="container border-t border-zinc-600 py-4 md:pb-8">
      <p class="text-center text-sm text-zinc-300">
        © {{ currentYear }} Recruiter AI
      </p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const currentYear = new Date().getFullYear();
</script>
