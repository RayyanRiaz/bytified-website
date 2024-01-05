<template>
  <div>
    <ModalCard>
      <div class="flex flex-col gap-8">
        <div class="flex flex-row gap-3 items-center">
          <div class="relative bg-teal-500 text-5xl text-center font-extrabold p-8 rounded-full">
            <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{{ letter }}</span>
          </div>
          <div class="w-full flex flex-col gap-2">
            <span class="text-xl">{{ name }}</span>
            <slot name="association"></slot>
          </div>
        </div>
        <div class="text-justify">{{ text }}</div>
      </div>
    </ModalCard>
  </div>
</template>
<script setup>
import ModalCard from '@/components/general/ModalCard.vue';

defineProps({
  letter: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
});
</script>
