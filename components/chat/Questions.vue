<template>
  <Accordion type="single" collapsible>
    <AccordionItem v-for="q in questions" :value="q.question">
      <AccordionTrigger class="text-left">{{ q.question }}</AccordionTrigger>
      <AccordionContent>
        {{ q.answer || "Brak odpowiedzi" }}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>

<script setup lang="ts">
import type { Question } from "./types";

const props = defineProps<{ questions: Question[] }>();
</script>
