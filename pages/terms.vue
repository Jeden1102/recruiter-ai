<script setup lang="ts">
useSetPageSeo("terms");
</script>

<template>
  <main class="slim-container container">
    <SectionTitleDescription
      :title="$t('terms.meta.title')"
      :description="$t('terms.meta.description')"
    />

    <SectionTitleDescriptionPlain
      :title="$t('terms.sections.acceptance.title')"
      :description="$t('terms.sections.acceptance.content')"
    />

    <SectionTitleDescriptionPlain
      :title="$t('terms.sections.userResponsibilities.title')"
      :description="$t('terms.sections.userResponsibilities.content')"
    />

    <SectionTitleDescriptionPlain
      :title="$t('terms.sections.account.title')"
      :description="$t('terms.sections.account.content')"
    />

    <SectionTitleDescriptionPlain
      :title="$t('terms.sections.termination.title')"
      :description="$t('terms.sections.termination.content')"
    />

    <SectionTitleDescriptionPlain
      :title="$t('terms.sections.limitation.title')"
      :description="$t('terms.sections.limitation.content')"
    />
  </main>
</template>
