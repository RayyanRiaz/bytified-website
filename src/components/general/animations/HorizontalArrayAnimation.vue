<template>
  <div class="px-8">
    <!-- <div class="w-full flex" :class="[reverse ? 'flex-row-reverse justify-end' : 'flex-row justify-start']"> -->
    <div
      class="relative w-full flex items-center"
      :class="[`min-h-${Math.min(eWidth, 12)}`, reverse ? 'flex-row-reverse' : 'flex-row']"
    >
      <div class="absolute left-20 bottom-[calc(50% + 10px)] h-1 border-b border-red-300 w-[calc(100% - 5rem)]"></div>
      <span class="flex-grow" v-if="reverse"></span>
      <TransitionGroup name="list" tag="div">
        <div :class="`inline-block w-${eWidth}`" v-for="n in displayArray" :key="n.key">
          <span class="w-full">{{ n.value }}</span>
        </div>
      </TransitionGroup>
      <span class="flex-grow" v-if="!reverse"></span>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';

const props = defineProps({
  inArray: {
    type: Array,
    default: () => [],
  },
  eWidth: {
    type: Number,
    default: 20,
  },
  jump: {
    type: Number,
    default: 1,
  },
  reverse: {
    type: Boolean,
    default: false,
  },
  tY: {
    type: Number,
    default: 1,
  },
});

const displayArray = computed(() => (props.reverse ? [].concat(props.inArray).reverse() : props.inArray));

const enterTx = `${(props.jump / 2) * 100 * (props.reverse ? -1 : 1)}%`;
const tY = `${props.tY * 8}rem`;
</script>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 1s linear;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(calc(v-bind(enterTx) * -1));
}

.list-leave-to {
  opacity: 0;
  transform: translateX(v-bind(enterTx));
  transform: translateY(v-bind(tY));
  /* transform: translateX(100%); */
}
.list-leave-active {
  position: absolute;
}
</style>
