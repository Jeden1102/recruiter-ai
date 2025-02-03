<script setup lang="ts">
const { data } = useAuth();

definePageMeta({
  auth: true,
});
</script>
<template>
  <main class="slim-container container" v-if="data?.user">
    <SectionTitleDescription
      title="Profile"
      :description="data.user.name ?? ''"
    />
    <Card class="my-4">
      <ProfileHeader :user="data.user" />
      <CardContent>
        <h2 class="text-2xl">Your recent recruiter AI activity</h2>
        <ProfileChats />
      </CardContent>
    </Card>
  </main>
</template>
