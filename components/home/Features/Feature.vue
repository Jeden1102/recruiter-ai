<template>
  <Card class="min-w-[300px] snap-center">
    <CardHeader>
      <CardTitle>
        <TextGradient class="text-xl">
          {{ feature.title }}
        </TextGradient>
      </CardTitle>
      <CardDescription>{{ feature.subtitle }}</CardDescription>
    </CardHeader>
    <CardContent> {{ feature.description }} </CardContent>
    <CardFooter>
      <Icon
        :name="feature.icon"
        class="text-4xl mt-2 bg-gradient-to-r from-primary to-secondary"
      />
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
const props = defineProps<{
  feature: {
    title: string;
    subtitle: string;
    description: string;
    icon: string;
  };
}>();
</script>

<style scoped></style>
