<script setup>
defineProps({
  height: {
    type: Number,
    default: 12,
  },
});
</script>
<template>
  <div :class="`w-full h-${height} -mb-1`" :style="`background-image: url('/imgs/bottomCurve.svg')`" />
</template>
