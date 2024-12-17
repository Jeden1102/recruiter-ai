<template>
  <Card class="mt-4">
    <CardHeader>
      <CardTitle class="flex gap-2 items-center">
        <Icon name="material-symbols:task-rounded" size="24" />
        Recruitment Task
      </CardTitle>
    </CardHeader>
    <CardContent>
      <slot />
    </CardContent>
  </Card>
</template>
