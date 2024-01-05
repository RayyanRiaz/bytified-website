<script setup>
import LeftArrow from '@/components/icons/LeftArrow.vue';
import RightArrow from '@/components/icons/RightArrow.vue';
import { store } from '@/store';
import { createDebounce } from '@/utils/general';
import { ref, watch } from 'vue';

const scrollStart = ref(true);
const scrollEnd = ref(false);
const scrollable = ref(null);
const isScrollable = ref(false);

const debounce = createDebounce(100);

const onScroll = (e) => {
  /** @type HTMLElement */
  const el = e.target;
  scrollStart.value = el.scrollLeft < 2;
  scrollEnd.value = el.scrollWidth - el.scrollLeft - el.clientWidth < 2;
};

const refresh = () => {
  isScrollable.value = scrollable.value.scrollWidth - scrollable.value.clientWidth > 2;
};

const move = (forward) => {
  scrollable.value.scrollBy({
    left: Math.ceil(scrollable.value.clientWidth / 3) * (forward ? 1 : -1),
    behavior: 'smooth',
  });
};

watch(() => store.dims, refresh);
</script>

<template>
  <div>
    <div class="relative w-full px-16 md:px-20">
      <div class="py-4 scroller w-full overflow-x-scroll" ref="scrollable" @scroll="debounce(() => onScroll($event))">
        <div class="flex flex-row gap-16 lg:gap-32 items-center justify-between">
          <slot :refresh="refresh"></slot>
        </div>
        <div v-if="isScrollable" class="absolute top-1/2 left-4 -mt-8 h-16 w-10 md:-mt-12 md:h-24 md:w-16">
          <LeftArrow :fill="scrollStart ? '#CCC' : '#666'" @click="move(false)" />
        </div>
        <div v-if="isScrollable" class="absolute top-1/2 right-4 -mt-8 h-16 w-10 md:-mt-12 md:h-24 md:w-16">
          <RightArrow :fill="scrollEnd ? '#CCC' : '1f2937'" @click="move(true)" />
        </div>
      </div>
    </div>
  </div>
</template>
