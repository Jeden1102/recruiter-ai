<template>
  <footer class="bg-zinc-950 flex flex-col">
    <div class="container py-8 flex flex-col md:flex-row gap-4 md:gap-36">
      <div>
        <NuxtLink to="/">
          <AppLogo />
        </NuxtLink>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-lg font-semibold mb-2">Navigation</p>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/product">Product</NuxtLink>
        <NuxtLink to="/recruiter">Recruiter</NuxtLink>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-lg font-semibold mb-2">About</p>
        <NuxtLink to="/terms">Terms of Service</NuxtLink>
        <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
      </div>
    </div>
    <div class="container border-t border-zinc-600 py-4 md:pb-8">
      <p class="text-center text-sm text-zinc-300">© 2023 Recruiter AI</p>
    </div>
  </footer>
</template>
