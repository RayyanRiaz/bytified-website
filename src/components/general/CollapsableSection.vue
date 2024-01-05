<template>
  <div>
    <div class="cursor-pointer" @click="() => (isOpen = !isOpen)">
      <HeadingH2 class="bg-gray-800 rounded-md text-white px-4 py-4">
        <span class="underline">{{ title }}</span>
        <RightArrow
          class="mx-4 w-8 h-8 inline animate-pulse transition-all ease-in-out"
          :class="[isOpen ? 'rotate-90' : '']"
          fill="#FFF"
        />
      </HeadingH2>
    </div>
    <div v-show="isOpen" class="shadow-md py-4">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import HeadingH2 from '@/components/general/typography/HeadingH2.vue';
import RightArrow from '@/components/icons/RightArrow.vue';
import { ref } from 'vue';

const isOpen = ref(false);

defineProps({
  title: {
    type: String,
    default: '',
  },
});
</script>
