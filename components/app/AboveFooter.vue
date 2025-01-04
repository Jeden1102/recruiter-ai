<template>
  <div class="mt-8">
    <div
      class="container relative mt-auto flex flex-col items-center justify-center gap-4 overflow-hidden py-8 lg:py-12"
    >
      <p class="flex flex-col items-center text-2xl lg:text-5xl">
        <span class="mb-2 lg:mb-4">Get started with</span>
        <TextGradient>
          <span>AI-Powered tool</span>
        </TextGradient>
      </p>

      <p class="text-center text-3xl font-light">
        Your AI-powered recruitment assistant
      </p>
      <Button asChild size="lg" class="mt-8">
        <NuxtLinkLocale to="/recruiter">Get started</NuxtLinkLocale>
      </Button>
      <NuxtImg
        src="/images/decorative.svg"
        width="580"
        height="520"
        alt="Bubbles image"
        class="absolute -bottom-3/4 left-1/2 -z-10 -translate-x-1/2 opacity-20"
      />
    </div>
  </div>
</template>
