<template>
  <footer class="flex flex-col bg-zinc-950">
    <div class="container flex flex-col gap-4 py-8 md:flex-row md:gap-36">
      <div>
        <NuxtLinkLocale to="/">
          <AppLogo />
        </NuxtLinkLocale>
      </div>
      <div class="flex flex-col gap-2">
        <p class="mb-2 text-lg font-semibold">Navigation</p>
        <NuxtLinkLocale to="/">Home</NuxtLinkLocale>
        <NuxtLinkLocale to="/product">Product</NuxtLinkLocale>
        <NuxtLinkLocale to="/recruiter">Recruiter</NuxtLinkLocale>
      </div>
      <div class="flex flex-col gap-2">
        <p class="mb-2 text-lg font-semibold">About</p>
        <NuxtLinkLocale to="/terms">Terms of Service</NuxtLinkLocale>
        <NuxtLinkLocale to="/privacy">Privacy Policy</NuxtLinkLocale>
      </div>
    </div>
    <div class="container border-t border-zinc-600 py-4 md:pb-8">
      <p class="text-center text-sm text-zinc-300">© 2023 Recruiter AI</p>
    </div>
  </footer>
</template>
