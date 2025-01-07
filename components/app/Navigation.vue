<template>
  <nav>
    <button @click="toggleMenu" class="md:hidden" title="Toggle menu">
      <AppBurger :is-active="isMenuToggled" />
    </button>
    <Transition>
      <div
        v-if="isMenuToggled || isDesktop"
        :class="
          twMerge(
            'container absolute left-0 top-16 z-10 flex h-full w-full flex-col gap-6 bg-zinc-950/60 pb-24 pt-12 backdrop-blur-md md:static md:h-auto md:w-auto md:flex-row md:items-center md:bg-transparent md:py-0 md:backdrop-blur-none',
          )
        "
      >
        <NuxtLinkLocale
          @click="toggleMenuIfMobile"
          class="nav-link link-bg-hover"
          to="/"
        >
          {{ $t("navigation.home") }}
        </NuxtLinkLocale>
        <NuxtLinkLocale
          @click="toggleMenuIfMobile"
          class="nav-link link-bg-hover"
          to="/product"
        >
          {{ $t("navigation.product") }}
        </NuxtLinkLocale>
        <NuxtLinkLocale
          @click="toggleMenuIfMobile"
          class="nav-link link-bg-hover"
          to="/recruiter"
        >
          {{ $t("navigation.recruiter") }}
        </NuxtLinkLocale>

        <NuxtLinkLocale
          v-if="!data"
          @click="toggleMenuIfMobile"
          class="nav-link link-bg-hover border-b border-zinc-600 pb-6 md:pb-0"
          to="/login"
        >
          {{ $t("navigation.login") }}
        </NuxtLinkLocale>
        <DropdownMenu v-else>
          <DropdownMenuTrigger as-child>
            <Button variant="outline"> Account </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent class="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <NuxtLinkLocale to="/profile"> Profile </NuxtLinkLocale>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuSeparator />
            <DropdownMenuItem @click="logOut"> Log out </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <AppLanguageSwitcher />

        <div class="mt-auto flex gap-4 md:hidden">
          <NuxtLinkLocale to="/terms">{{ $t("footer.terms") }}</NuxtLinkLocale>
          <NuxtLinkLocale to="/privacy">{{
            $t("footer.privacy")
          }}</NuxtLinkLocale>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { ref, onMounted, onUnmounted } from "vue";

const isMenuToggled = ref(false);
const isDesktop = ref(false);

const { data, signOut } = useAuth();

const logOut = () => {
  signOut();
};
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
