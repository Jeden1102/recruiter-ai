<script setup lang="ts">
const { signIn } = useAuth();

const providers = [
  {
    id: "google",
    name: "Google",
    icon: "mdi:google",
    className: "bg-[#4285F4] hover:bg-[#4285F4]/90",
  },
  {
    id: "github",
    name: "Github",
    icon: "mdi:github",
    className: "bg-zinc-700 hover:bg-zinc-600",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: "mdi:linkedin",
    className: "bg-blue-600 hover:bg-blue-500",
  },
];

definePageMeta({
  unauthenticatedOnly: true,
});
</script>

<template>
  <div class="container mx-auto">
    <SectionTitleDescription title="Login" />
    <Card class="mx-auto my-4 max-w-[520px]">
      <CardHeader>
        <CardTitle class="text-center text-2xl font-light">
          <p>Login to your account</p>
        </CardTitle>
      </CardHeader>
      <CardContent class="flex flex-col gap-2">
        <AuthLoginForm />
        <Separator class="my-4" label="Or" />
        <p class="text-center text-sm font-light">
          Use one of the following providers
        </p>
        <Button
          v-for="provider in providers"
          :key="provider.id"
          size="lg"
          @click="signIn(provider.id)"
          :class="provider.className"
        >
          <Icon :name="provider.icon" size="20" />
          {{ provider.name }}
        </Button>
      </CardContent>
      <CardFooter>
        <NuxtLinkLocale
          to="/register"
          class="w-full text-center text-secondary hover:underline"
          >Don't have an account? Create new one</NuxtLinkLocale
        >
      </CardFooter>
    </Card>
  </div>
</template>
