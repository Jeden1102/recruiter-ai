<template>
  <div class="flex justify-between">
    <Dialog v-model:open="isDialogOpen">
      <DialogTrigger as-child>
        <Button variant="destructive"> Delete account </Button>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete account</DialogTitle>
          <DialogDescription>
            Warning! All of the data will be permanently deleted. Also all the
            chats created by you will be deleted.
            <Alert variant="destructive" class="my-2">
              <ExclamationTriangleIcon class="h-4 w-4" />
              <AlertTitle>Be careful!</AlertTitle>
              <AlertDescription>
                This action is irreversible.
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
            <FormLabel>Your password</FormLabel>
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
          <Button type="submit" @click="onSubmit"> Save changes </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { toast } from "vue-sonner";
import * as z from "zod";
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
        error.statusMessage || "There was an issue deleting account.",
    });
  }
});
</script>
