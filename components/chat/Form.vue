<script setup lang="ts">
import type { Details, General } from "./types";
const step = ref(0);
const type = ref<string>("");

const details = ref<Details>({});

const general = ref<General>({});

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
  <div>
    <keep-alive>
      <template v-if="step === 0">
        <ChatStepsType :type="type" @submit="handleTypeSubmit" />
      </template>
    </keep-alive>
    <keep-alive>
      <template v-if="step === 1">
        <ChatStepsDetails
          :type="type"
          @submit="handleSubmitDetails"
          @back="step--"
        />
      </template>
    </keep-alive>
    <keep-alive>
      <template v-if="step === 2">
        <ChatStepsGeneral
          :type="type"
          @submit="handleSubmitGeneral"
          @back="step--"
        />
      </template>
    </keep-alive>
    <keep-alive>
      <template v-if="step === 3">
        <Chat :type="type" :details="details" :general="general" />
      </template>
    </keep-alive>
  </div>
</template>
