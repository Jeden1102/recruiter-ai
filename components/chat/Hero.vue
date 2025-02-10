<template>
  <div class="flex-1 flex-col items-center md:py-6">
    <h1 class="mb-2 text-2xl lg:text-4xl">
      <TextGradient>
        {{ $t("recruiter.title") }}
      </TextGradient>
    </h1>
    <p class="font-thin">
      {{ $t("recruiter.description") }}
    </p>
    <NuxtImg
      src="/images/bubbles-2.png"
      width="580"
      height="520"
      format="webp"
      alt="Bubbles image"
      class="mt-8 w-72 md:w-96"
    />
  </div>
</template>
