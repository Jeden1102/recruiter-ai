<template>
  <FormField v-slot="{ componentField }" type="radio" :name="field">
    <FormItem class="space-y-3">
      <FormLabel>{{ label }}</FormLabel>
      <FormControl>
        <RadioGroup class="grid grid-cols-1" v-bind="componentField">
          <FormItem v-for="option in options">
            <FormControl>
              <RadioGroupItem
                :disabled="option.isCommingSoon"
                :value="option.value"
                class="hidden"
              />
            </FormControl>
            <FormLabel
              class="font-normal cursor-pointer h-full rounded-xl border text-card-foreground shadow bg-zinc-900 relative w-full flex flex-col"
            >
              <span class="flex flex-col gap-y-1.5 p-6">
                <CardTitle class="text-xl"
                  ><TextGradient>{{ option.title }}</TextGradient></CardTitle
                >
              </span>
              <span class="p-6 pt-0">
                <Badge
                  class="absolute right-2 top-2"
                  v-if="option.isCommingSoon"
                  >Comming soon</Badge
                >
                <span class="text-foreground">
                  <p>{{ option.desc }}</p>
                  <Icon
                    v-if="option.icon"
                    :name="option.icon"
                    class="text-4xl mt-2 bg-gradient-to-r from-primary to-secondary"
                  />
                </span>
              </span>
            </FormLabel>
          </FormItem>
        </RadioGroup>
      </FormControl>
      <FormMessage />
    </FormItem>
  </FormField>
</template>

<script setup lang="ts">
import Badge from "../ui/badge/Badge.vue";

interface Option {
  value: string;
  title: string;
  desc: string;
  icon?: string;
  isCommingSoon?: boolean;
}
const props = defineProps<{
  options: Option[];
  label: string;
  field: string;
}>();
</script>

<style lang="scss">
button:has(input:checked) ~ label {
  @apply border-primary;
}

button:has(input:disabled) ~ label {
  @apply opacity-60 cursor-auto;
}
</style>
