<template>
  <FormField v-slot="{ componentField }" type="radio" :name="field">
    <FormItem class="space-y-3">
      <FormLabel>{{ label }}</FormLabel>
      <FormControl>
        <RadioGroup class="grid grid-cols-1" v-bind="componentField">
          <FormItem v-for="option in options">
            <FormControl>
              <RadioGroupItem :value="option.value" class="hidden" />
            </FormControl>
            <FormLabel class="font-normal cursor-pointer h-full flex">
              <Card class="bg-zinc-900 relative w-full">
                <CardHeader>
                  <CardTitle class="text-xl"
                    ><TextGradient>{{ option.title }}</TextGradient></CardTitle
                  >
                </CardHeader>
                <CardContent>
                  <Badge
                    class="absolute right-2 top-2"
                    v-if="option.isCommingSoon"
                    >Comming soon</Badge
                  >
                  <CardDescription class="text-foreground">
                    <p>{{ option.desc }}</p>
                    <Icon
                      v-if="option.icon"
                      :name="option.icon"
                      class="text-4xl mt-2 bg-gradient-to-r from-primary to-secondary"
                    />
                  </CardDescription>
                </CardContent>
              </Card>
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
