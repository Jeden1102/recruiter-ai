<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <ProductCard
      :card="{ title: 'Tytuł', description: chatData.title || '' }"
    />
    <ProductCard
      :card="{
        title: 'Data utworzenia',
        description: new Date(chatData.createdAt).toLocaleDateString(),
      }"
    />
    <ProductCard
      :card="{
        title: 'Autor',
        description: chatData.email || 'Anonymous',
      }"
    />
    <ProductCard
      :card="{ title: 'Poziom trudności', description: chatData.level || '' }"
    />
  </div>
</template>

<script setup lang="ts">
import type { Chat } from "@/components/chat/types";

const props = defineProps<{
  chatData: Chat;
}>();
</script>
