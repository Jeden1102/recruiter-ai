<script setup lang="ts">
useSeoMeta({
  title: "Recruiter",
  ogTitle: "Recruiter",
});
</script>

<template>
  <div class="container pt-8">
    <Card>
      <CardContent class="flex flex-col gap-8 py-4 md:flex-row">
        <ChatHero class="hidden md:flex" />
        <ChatForm />
      </CardContent>
    </Card>
  </div>
</template>
