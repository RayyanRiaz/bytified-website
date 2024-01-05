<script setup>
defineProps({
  height: {
    type: Number,
    default: 12,
  },
});
</script>
<template>
  <div :class="`w-full h-${height} -mt-3`" :style="`background-image: url('/imgs/topCurve.svg')`" />
</template>
