<script setup lang="ts">
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CaretSortIcon, CheckIcon } from "@radix-icons/vue";
import { twMerge } from "tailwind-merge";
import languages from "@cospired/i18n-iso-languages";
import en from "@cospired/i18n-iso-languages/langs/en.json";

languages.registerLocale(en);

const model = defineModel<string>({ required: true });

const allLanguages = computed(() =>
  Object.entries(languages.getNames("en")).map(([code, name]) => ({
    label: name,
    value: code,
  })),
);
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        class="w-[200px] justify-between"
      >
        {{
          allLanguages.find((lang) => lang.value === model)?.label ||
          "Select language..."
        }}
        <CaretSortIcon class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-[200px] p-0">
      <Command>
        <CommandInput placeholder="Search language..." />
        <CommandEmpty>Nothing found.</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="language in allLanguages"
              :key="language.value"
              :value="language.label"
              @select="model = language.value"
            >
              {{ language.label }}
              <CheckIcon
                :class="
                  twMerge(
                    'ml-auto h-4 w-4',
                    language.value === model ? 'opacity-100' : 'opacity-0',
                  )
                "
              />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
