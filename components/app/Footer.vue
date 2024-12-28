<template>
  <footer class="bg-zinc-950 flex flex-col">
    <div class="container py-8 flex flex-col md:flex-row gap-4 md:gap-36">
      <div>
        <NuxtLinkLocale to="/">
          <AppLogo />
        </NuxtLinkLocale>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-lg font-semibold mb-2">Navigation</p>
        <NuxtLinkLocale to="/">Home</NuxtLinkLocale>
        <NuxtLinkLocale to="/product">Product</NuxtLinkLocale>
        <NuxtLinkLocale to="/recruiter">Recruiter</NuxtLinkLocale>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-lg font-semibold mb-2">About</p>
        <NuxtLinkLocale to="/terms">Terms of Service</NuxtLinkLocale>
        <NuxtLinkLocale to="/privacy">Privacy Policy</NuxtLinkLocale>
      </div>
    </div>
    <div class="container border-t border-zinc-600 py-4 md:pb-8">
      <p class="text-center text-sm text-zinc-300">© 2023 Recruiter AI</p>
    </div>
  </footer>
</template>
