<script setup lang="ts">
import type { Chat } from "@/components/chat/types";

const props = defineProps<{
  chatData: Chat;
}>();
</script>

<template>
  <div class="grid grid-cols-2 gap-2">
    <ProductCard
      :card="{ title: 'Tytuł', description: chatData.title || '' }"
      size="sm"
    />
    <ProductCard
      :card="{
        title: 'Data utworzenia',
        description: new Date(chatData.createdAt).toLocaleDateString(),
      }"
      size="sm"
    />
    <ProductCard
      :card="{
        title: 'Autor',
        description: chatData.email || 'Anonymous',
      }"
      size="sm"
    />
    <ProductCard
      :card="{ title: 'Poziom trudności', description: chatData.level || '' }"
      size="sm"
    />
  </div>
</template>
