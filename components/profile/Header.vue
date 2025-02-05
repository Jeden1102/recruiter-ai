<script setup>
defineProps({ user: Object });
</script>

<template>
  <CardHeader>
    <CardTitle class="flex flex-col items-center gap-4">
      <Avatar>
        <AvatarImage :src="user.image ?? ''" alt="User avatar" />
      </Avatar>
      <p>{{ user.email }}</p>
    </CardTitle>
  </CardHeader>
</template>
