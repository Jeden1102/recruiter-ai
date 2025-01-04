<template>
  <Card class="mt-4">
    <CardHeader>
      <CardTitle class="flex items-center gap-2">
        <Icon name="material-symbols:task-rounded" size="24" />
        Recruitment Task
      </CardTitle>
    </CardHeader>
    <CardContent>
      <slot />
    </CardContent>
  </Card>
</template>
