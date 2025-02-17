<script setup lang="ts">
useSetPageSeo("privacy");
</script>

<template>
  <main class="slim-container container">
    <SectionTitleDescription
      :title="$t('privacy.meta.title')"
      :description="$t('privacy.meta.description')"
    />

    <SectionTitleDescriptionPlain
      :title="$t('privacy.sections.dataCollection.title')"
      :description="$t('privacy.sections.dataCollection.content')"
    />

    <SectionTitleDescriptionPlain
      :title="$t('privacy.sections.dataUsage.title')"
      :description="$t('privacy.sections.dataUsage.content')"
    />

    <SectionTitleDescriptionPlain
      :title="$t('privacy.sections.dataSharing.title')"
      :description="$t('privacy.sections.dataSharing.content')"
    />

    <SectionTitleDescriptionPlain
      :title="$t('privacy.sections.security.title')"
      :description="$t('privacy.sections.security.content')"
    />
  </main>
</template>
