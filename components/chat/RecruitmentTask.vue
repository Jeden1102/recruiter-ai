<template>
  <Card class="mt-4">
    <CardHeader>
      <CardTitle class="flex items-center gap-2">
        <Icon name="material-symbols:task-rounded" size="24" />
        {{ $t("recruitmentTask") }}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <slot />
    </CardContent>
  </Card>
</template>
