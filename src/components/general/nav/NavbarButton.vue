<template>
  <a
    class="w-48 px-5 py-2 text-left lg:text-center font-semibold text-lg hover:text-xl hover:font-bold hover:transition-all"
    :class="[boxed ? 'bg-teal-400 hover:bg-teal-100 hover:shadow-md hover:shadow-teal-800' : '']"
    :href="href"
    @click="onClick"
  >
    <slot />
  </a>
</template>
<script setup>
import { setCurrentPage, store } from '@/store';

defineProps({
  href: {
    default: '',
  },
  boxed: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['clicked']);

const onClick = () => {
  store.currentPage !== 'index' && setCurrentPage('index');
  emit('clicked');
};
</script>
<style lang=""></style>
