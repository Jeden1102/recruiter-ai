<script setup lang="ts">
import { ref } from "vue";
import { CopyIcon } from "@radix-icons/vue";

const props = defineProps<{
  title: string;
  subtitle?: string;
  uri: string;
}>();

const networks = ["facebook", "x", "linkedin"];

const copied = ref(false);

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.uri);
    copied.value = true;

    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button> {{ title }} </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>{{ title }}</DialogTitle>
        <DialogDescription v-if="subtitle">
          {{ subtitle }}
        </DialogDescription>
      </DialogHeader>
      <div class="flex items-center space-x-2">
        <div class="grid flex-1 gap-2">
          <Label for="link" class="sr-only"> Link </Label>
          <Input id="link" :default-value="uri" read-only disabled />
        </div>
        <Button type="button" @click="copyToClipboard">
          <span v-if="!copied" class="sr-only">{{ $t("common.copy") }}</span>
          <span v-else class="text-xs">{{ $t("common.copied") }}</span>
          <CopyIcon class="h-4 w-4" />
        </Button>
      </div>
      <div class="mt-4 flex flex-wrap gap-2">
        <ClientOnly>
          <Button v-for="network in networks">
            <SocialShare :network="network" :url="uri">
              <template #label>{{ $t("common.share") }}</template>
            </SocialShare>
          </Button>
        </ClientOnly>
      </div>
      <DialogFooter class="sm:justify-start">
        <DialogClose as-child>
          <Button type="button"> {{ $t("common.close") }} </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
