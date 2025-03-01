<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { toast } from "vue-sonner";
import * as z from "zod";

const { t } = useI18n();

const { data, signOut } = useAuth();

const emit = defineEmits(["submit"]);

const props = defineProps<{ requirePassword: boolean }>();

const isDialogOpen = ref(false);

const formSchema = toTypedSchema(
  z.object({
    password: z.string().optional(),
  }),
);

const { handleSubmit, values, resetForm } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit(async (values) => {
  try {
    await useDeleteAccount({
      password: values.password || "",
    });

    isDialogOpen.value = false;

    signOut();
  } catch (error: any) {
    toast("Error", {
      description:
        t(error.statusMessage) || "There was an issue deleting account.",
    });
  }
});
</script>

<template>
  <div class="flex justify-between">
    <Dialog v-model:open="isDialogOpen">
      <DialogTrigger as-child>
        <Button variant="destructive">
          {{ $t("profile.deleteAccount.title") }}
        </Button>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{{ $t("profile.deleteAccount.title") }}</DialogTitle>
          <DialogDescription>
            {{ $t("profile.deleteAccount.description") }}
            <Alert variant="destructive" class="my-2">
              <ExclamationTriangleIcon class="h-4 w-4" />
              <AlertTitle>{{
                $t("profile.deleteAccount.beCareful")
              }}</AlertTitle>
              <AlertDescription>
                {{ $t("profile.deleteAccount.irreversible") }}
              </AlertDescription>
            </Alert>
          </DialogDescription>
        </DialogHeader>

        <FormField
          v-if="requirePassword"
          v-slot="{ componentField }"
          name="password"
        >
          <FormItem>
            <FormLabel>{{ $t("auth.password") }}</FormLabel>
            <FormControl>
              <Input
                type="password"
                placeholder="*******"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <DialogFooter>
          <Button variant="destructive" type="submit" @click="onSubmit">
            {{ $t("profile.deleteAccount.title") }}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>
