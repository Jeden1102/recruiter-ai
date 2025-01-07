<script setup lang="ts">
const { data } = useAuth();
console.log(data);
</script>

<template>
  <div v-if="data">
    here
    {{ data }}
    <!-- You can access the session data you injected above! -->
  </div>
</template>
