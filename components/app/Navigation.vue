<template>
  <nav>
    <button @click="toggleMenu" class="md:hidden">
      <AppBurger :is-active="isMenuToggled" />
    </button>
    <Transition>
      <div
        v-if="isMenuToggled || isDesktop"
        :class="
          twMerge(
            'absolute left-0 top-16 w-full h-full bg-zinc-950/60 backdrop-blur-md z-10 flex flex-col container gap-6 pt-12 md:static md:w-auto md:h-auto md:bg-transparent md:backdrop-blur-none md:pt-0 md:flex-row md:items-center'
          )
        "
      >
        <NuxtLinkLocale @click="toggleMenuIfMobile" class="nav-link" to="/">
          {{ $t("navigation.home") }}
        </NuxtLinkLocale>
        <NuxtLinkLocale
          @click="toggleMenuIfMobile"
          class="nav-link"
          to="/product"
        >
          {{ $t("navigation.product") }}
        </NuxtLinkLocale>
        <NuxtLinkLocale
          @click="toggleMenuIfMobile"
          class="nav-link"
          to="/recruiter"
        >
          {{ $t("navigation.recruiter") }}
        </NuxtLinkLocale>
        <Button as-child class="w-fit text-2xl md:text-base" size="lg">
          <NuxtLinkLocale
            class="nav-link"
            @click="toggleMenuIfMobile"
            to="/recruiter"
          >
            {{ $t("common.logIn") }}
          </NuxtLinkLocale>
        </Button>
        <AppLanguageSwitcher />
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { ref, onMounted, onUnmounted } from "vue";

const isMenuToggled = ref(false);
const isDesktop = ref(false);

const toggleMenu = () => {
  isMenuToggled.value = !isMenuToggled.value;
  document.body.classList.toggle("overflow-hidden", isMenuToggled.value);
};

const toggleMenuIfMobile = () => {
  if (!isDesktop.value) {
    toggleMenu();
  }
};

const updateIsDesktop = () => {
  isDesktop.value = window.innerWidth >= 768;
};

onMounted(() => {
  updateIsDesktop();
  window.addEventListener("resize", updateIsDesktop);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateIsDesktop);
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
