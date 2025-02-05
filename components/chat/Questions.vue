<script setup lang="ts">
import type { Question } from "./types";

const props = defineProps<{ questions: Question[]; loading: boolean }>();
</script>

<template>
  <Accordion type="single" collapsible>
    <AccordionItem v-for="(q, key) in questions" :value="q.question">
      <AccordionTrigger class="gap-2 text-left">
        <p>
          {{ q.question }}
          <Badge v-if="key > 9">Additional</Badge>
        </p>
      </AccordionTrigger>
      <AccordionContent>
        {{ q.answer || $t("noAnswer") }}
      </AccordionContent>
    </AccordionItem>
    <div v-if="loading" class="my-4 flex items-center gap-4">
      <Icon
        name="tabler:loader-3"
        size="36"
        class="animate-spin text-primary"
      />
      <p>{{ $t("jobAnalysisNew") }}</p>
    </div>
  </Accordion>
</template>
