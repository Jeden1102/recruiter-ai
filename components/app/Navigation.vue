<template>
  <nav>
    <button @click="toggleMenu">
      <AppBurger :is-active="isMenuToggled" />
    </button>
    <Transition>
      <div
        v-if="isMenuToggled"
        :class="
          twMerge(
            'absolute left-0 top-16 w-full h-full bg-zinc-950/60 backdrop-blur-md z-10 flex flex-col container gap-6 pt-12'
          )
        "
      >
        <NuxtLink @click="toggleMenu" class="nav-link" to="/">Home</NuxtLink>
        <NuxtLink @click="toggleMenu" class="nav-link" to="/product"
          >Product</NuxtLink
        >
        <NuxtLink @click="toggleMenu" class="nav-link" to="/recruiter"
          >Recruiter</NuxtLink
        >
        <Button as-child class="w-fit">
          <NuxtLink class="nav-link" @click="toggleMenu" to="/recruiter"
            >Log In</NuxtLink
          >
        </Button>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";

const isMenuToggled = ref(false);
const toggleMenu = () => {
  isMenuToggled.value = !isMenuToggled.value;
  document.body.style.overflow = isMenuToggled.value ? "hidden" : "auto";
};
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
