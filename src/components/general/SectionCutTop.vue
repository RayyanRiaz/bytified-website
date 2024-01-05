<script setup>
defineProps({
  height: {
    type: Number,
    default: 12,
  },
});
</script>
<template>
  <div :class="`w-full h-${height} -mt-1`" :style="`background-image: url('imgs/sectionCutTop.svg')`" />
</template>
