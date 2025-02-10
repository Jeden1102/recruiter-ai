<script setup lang="ts">
useSetPageSeo("product");
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
