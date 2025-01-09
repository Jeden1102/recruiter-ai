<script setup lang="ts">
import { Avatar, AvatarImage } from "@/components/ui/avatar";

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
      <CardHeader>
        <CardTitle class="flex flex-col items-center gap-4">
          <Avatar>
            <AvatarImage :src="data.user.image ?? ''" alt="@radix-vue" />
          </Avatar>
          <p>{{ data.user.email }}</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        Your recent recruiter AI activity
        {{ data.user }}
      </CardContent>
    </Card>
  </main>
</template>
