<script setup lang="ts">
const { data } = useAuth();

definePageMeta({
  auth: true,
});
</script>
<template>
  <main class="slim-container container" v-if="data?.user">
    <SectionTitleDescription
      :title="$t('profile.title')"
      :description="data.user.name ?? ''"
    />
    <Card class="my-4">
      <ProfileHeader :user="data.user" />
      <CardContent>
        <h2 class="text-2xl">{{ $t("profile.recentActivity") }}</h2>
        <ProfileChats />
      </CardContent>
    </Card>
  </main>
</template>
