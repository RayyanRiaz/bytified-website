<template>
  <div>
    <!-- <img class="h-20 lg:h-32 w-auto select-none" v-lazy="'@/assets/imgs/clients/knallerfalke.png'" @load="refresh" /> -->
    <img src="/imgs/sectionCutBottom.svg" class="-mb-1 select-none" />
    <div class="bg-gray-800 pt-10 pb-5">
      <HorizontalSlider class="mx-2 flex flex-row justify-center">
        <template v-slot:default="{ refresh }">
          <img
            class="h-12 lg:h-20 w-auto select-none hover:scale-125 transition-all"
            v-lazy="'/imgs/clients/knallerfalke.png'"
            @load="refresh"
          />
          <img
            class="h-12 lg:h-20 w-auto select-none hover:scale-125 transition-all"
            v-lazy="'/imgs/clients/brickfact.svg'"
            @load="refresh"
          />
          <img
            class="h-12 lg:h-20 w-auto select-none hover:scale-125 transition-all"
            v-lazy="'/imgs/clients/unite.png'"
            @load="refresh"
          />
          <img
            class="h-12 lg:h-20 w-auto select-none hover:scale-125 transition-all"
            v-lazy="'/imgs/clients/accessowl.webp'"
            @load="refresh"
          />
        </template>
      </HorizontalSlider>
    </div>
    <img src="/imgs/sectionCutTop.svg" class="-mt-3 filter drop-shadow-xl select-none" />
  </div>
</template>
<script setup>
import HorizontalSlider from '@/components/general/slider/HorizontalSlider.vue';
</script>
<style></style>
