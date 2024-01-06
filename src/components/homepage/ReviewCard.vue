<template>
  <div>
    <div
      class="w-full h-full flex flex-col gap-2 px-4 py-8 max-w-full lg:max-w-96 text-justify bg-white text-black transition-all duration-300"
    >
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
    </div>
  </div>
</template>
<script setup>
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
