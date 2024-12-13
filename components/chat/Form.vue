<script setup lang="ts">
const step = ref(0);
const type = ref("");

const details = ref<{
  url?: string;
  file?: File;
  requirements?: string;
  niceToHave?: string;
  responsibilities?: string;
}>({});

const general = ref<{ level?: string; task?: boolean; answers?: boolean }>({});

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
    {{ general }}
    {{ type }}
  </div>
</template>
