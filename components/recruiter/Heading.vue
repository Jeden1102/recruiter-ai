<script setup lang="ts">
import type { Chat } from "@/components/chat/types";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { toast } from "vue-sonner";
import * as z from "zod";

const { data } = useAuth();

const props = defineProps<{ chatData: Chat }>();
const emit = defineEmits(["submit"]);

const isDialogOpen = ref(false);

const formSchema = toTypedSchema(
  z.object({
    restricted: z.boolean().optional(),
    authorizedEmails: z.array(z.string()).optional(),
  }),
);

const savedValues = ref({
  restricted: props.chatData.restricted ?? false,
  authorizedEmails: props.chatData.authorizedEmails ?? [],
});

const { handleSubmit, values, resetForm } = useForm({
  validationSchema: formSchema,
  initialValues: savedValues.value,
});

watch(isDialogOpen, (newVal) => {
  if (newVal) {
    resetForm({ values: savedValues.value });
  } else {
    savedValues.value = {
      ...(values as { restricted: boolean; authorizedEmails: string[] }),
    };
  }
});

const onSubmit = handleSubmit(async (values) => {
  if (props.chatData.id === undefined) return;
  try {
    await useUpdateChat({
      id: props.chatData.id,
      restricted: values.restricted,
      authorizedEmails: values.authorizedEmails,
    });
    savedValues.value = {
      ...(values as { restricted: boolean; authorizedEmails: string[] }),
    };
    isDialogOpen.value = false;

    toast("Chat restrictions updated", {
      description: "Chat restrictions updated successfully.",
    });
  } catch (error: any) {
    toast("Chat restrictions update failed", {
      description: error.statusMessage,
    });
  }
});
</script>

<template>
  <div class="flex justify-between">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger as-child>
          <Badge variant="outline" class="flex gap-2">
            Status: {{ chatData.restricted ? "Restricted" : "Public" }}
            <Icon size="16" name="solar:info-circle-bold" />
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
          @todo add status explanation
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <Dialog
      v-if="chatData.email && data?.user.email === chatData.email"
      v-model:open="isDialogOpen"
    >
      <DialogTrigger as-child>
        <Button>
          <Icon name="material-symbols:settings" /> Edit restrictions
        </Button>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit restrictions</DialogTitle>
          <DialogDescription>
            Make changes to the chat restrictions. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <FormField v-slot="{ value, handleChange }" name="restricted">
          <FormItem
            class="my-4 flex flex-row items-start gap-x-3 space-y-0 rounded-md border p-4 shadow"
          >
            <FormControl>
              <Checkbox :checked="value" @update:checked="handleChange" />
            </FormControl>
            <div class="space-y-1 leading-none">
              <FormLabel>{{ $t("settings.general.private.label") }}</FormLabel>
              <FormDescription>
                {{ $t("settings.general.private.description") }}
              </FormDescription>
              <FormMessage />
            </div>
          </FormItem>
        </FormField>

        <FormField
          v-slot="{ value }"
          name="authorizedEmails"
          v-if="values.restricted"
        >
          <FormItem>
            <FormLabel>Authorized Emails</FormLabel>
            <FormControl>
              <TagsInput :model-value="value">
                <TagsInputItem v-for="item in value" :key="item" :value="item">
                  <TagsInputItemText />
                  <TagsInputItemDelete />
                </TagsInputItem>
                <TagsInputInput placeholder="john@doe.com" />
              </TagsInput>
            </FormControl>
            <FormDescription> Type the email and press enter </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>

        <DialogFooter>
          <Button type="submit" @click="onSubmit"> Save changes </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>
