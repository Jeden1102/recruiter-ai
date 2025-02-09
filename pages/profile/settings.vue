<script setup lang="ts">
const { data } = useAuth();

definePageMeta({
  auth: true,
});
</script>
<template>
  <main class="slim-container container" v-if="data?.user">
    <SectionTitleDescription
      :title="$t('profileSettings.title')"
      :description="data.user.name ?? ''"
    />
    <Card class="my-4">
      <ProfileHeader :user="data.user" />
      <CardContent>
        <h2 class="mb-4 text-2xl">{{ $t("profileSettings.dangerZone") }}</h2>
        <ProfileDeleteAccountDialog
          :require-password="data.user.provider === ''"
        />
      </CardContent>
    </Card>
  </main>
</template>
