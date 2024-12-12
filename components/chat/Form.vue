<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const step = ref(0);
const type = ref("");

const details = ref({});
const general = ref({});

const formSchema = toTypedSchema(
  z.object({
    type: z.string().min(1),
  })
);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit((values) => {
  type.value = values.type;
  step.value = ++step.value;
});

const handleSubmitDetails = (values: any) => {
  details.value = values;
  step.value = ++step.value;
};

const handleSubmitGeneral = (values: any) => {
  general.value = values;
  step.value = ++step.value;
};

const handleTypeSubmit = (values: any) => {
  type.value = values.type;
  step.value = ++step.value;
};
</script>

<template>
  <form @submit="onSubmit" enctype="multipart/form-data">
    <keep-alive>
      <template v-if="step === 0">
        <ChatStepType :type="type" @submit="handleTypeSubmit" />
      </template>
    </keep-alive>
    <keep-alive>
      <template v-if="step === 1">
        <ChatStepDetails
          :type="type"
          @submit="handleSubmitDetails"
          @back="step--"
        />
      </template>
    </keep-alive>
    <keep-alive>
      <template v-if="step === 2">
        <ChatStepGeneral
          :type="type"
          @submit="handleSubmitGeneral"
          @back="step--"
        />
      </template>
    </keep-alive>
    <keep-alive>
      <template v-if="step === 3">
        <Chat />
      </template>
    </keep-alive>
    {{ details }}
  </form>
</template>
