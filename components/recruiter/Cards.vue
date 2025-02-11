<script setup lang="ts">
import type { Chat } from "@/components/chat/types";

const { t } = useI18n();

const props = defineProps<{
  chatData: Chat;
}>();
</script>

<template>
  <div class="grid grid-cols-2 gap-2">
    <ProductCard
      :card="{ title: t('common.title'), description: chatData.title || '' }"
      size="sm"
    />
    <ProductCard
      :card="{
        title: t('common.dateCreated'),
        description: new Date(chatData.createdAt).toLocaleDateString(),
      }"
      size="sm"
    />
    <ProductCard
      :card="{
        title: t('common.author'),
        description: chatData?.user.email || 'Anonymous',
      }"
      size="sm"
    />
    <ProductCard
      :card="{ title: t('common.level'), description: chatData.level || '' }"
      size="sm"
    />
  </div>
</template>
