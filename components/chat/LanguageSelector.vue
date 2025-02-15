<script setup lang="ts">
import { CaretSortIcon, CheckIcon } from "@radix-icons/vue";
import { twMerge } from "tailwind-merge";
import languages from "@cospired/i18n-iso-languages";
import en from "@cospired/i18n-iso-languages/langs/en.json";

languages.registerLocale(en);

const model = defineModel<string>({ required: true });

const open = ref(false);

const allLanguages = computed(() =>
  Object.entries(languages.getNames("en")).map(([code, name]) => ({
    label: name,
    value: code,
  })),
);

onMounted(() => {
  const lang = allLanguages.value.find((lang) => lang.value === model.value);
  if (lang) {
    model.value = lang.label;
  }
});
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        class="w-[200px] justify-between"
      >
        {{
          allLanguages.find((lang) => lang.label === model)?.label ||
          $t("common.selectLanguage")
        }}
        <CaretSortIcon class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-[200px] p-0">
      <Command>
        <CommandInput :placeholder="$t('common.selectLanguage')" />
        <CommandEmpty>{{ $t("common.selectLanguage") }}</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="language in allLanguages"
              :key="language.value"
              :value="language.label"
              @select="
                model = language.label;
                open = false;
              "
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
