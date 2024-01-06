<script setup>
defineProps({
  height: {
    type: Number,
    default: 12,
  },
});
</script>
<template>
  <div :class="`w-full h-${height} -mb-8 md:-mb-4`" :style="`background-image: url('/imgs/bottomCurve.svg')`" />
</template>
