<template>
  <div
    v-lazy-container="{ selector: 'img' }"
    class="flex flex-row justify-center items-center gap-1 md:gap-3 flex-wrap"
  >
    <slot></slot>
  </div>
</template>
