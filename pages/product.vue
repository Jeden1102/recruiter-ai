<script setup lang="ts">
useSeoMeta({
  title: "Product",
  ogTitle: "Product",
});
</script>

<template>
  <main class="slim-container container">
    <SectionTitleDescription
      :title="$t('product.title')"
      :description="$t('product.description')"
    />
    <ProductCards />
  </main>
</template>
