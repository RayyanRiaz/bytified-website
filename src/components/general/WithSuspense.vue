<script setup></script>
<template>
  <Suspense>
    <slot></slot>
    <template #fallback>
      <img class="h-20 lg:h-32" src="/imgs/loading.svg" />
    </template>
  </Suspense>
</template>
