<template>
  <div>
    <img src="/imgs/sectionCutBottom.svg" class="-mb-1 select-none" />
    <div class="bg-gray-800 pt-10 pb-5">
      <HeadingH2 class="text-white text-center pb-10">Our Clients</HeadingH2>
      <LazyImageContainer>
        <template v-for="clientItem in clients" :key="clientItem">
          <a class="group flex flex-col gap-2 items-center my-4" :href="clientItem.link">
            <img
              :data-src="clientItem.img"
              loading="lazy"
              :alt="clientItem.title"
              :title="clientItem.title"
              class="h-16 md:h-20 p-2 md:p-4 mx-4 bg-white rounded-xl group-hover:scale-105 transition-all duration-200"
            />
            <span class="text-white underline">{{ clientItem.title }}</span>
          </a>
        </template>
      </LazyImageContainer>
    </div>
    <img src="/imgs/sectionCutTop.svg" class="-mt-3 filter drop-shadow-xl select-none" />
  </div>
</template>
<script setup>
import LazyImageContainer from '@/components/general/LazyImageContainer.vue';
import HeadingH2 from '@/components/general/typography/HeadingH2.vue';

const clients = [
  { img: '/imgs/clients/knallerfalke.png', title: 'Knallerfalke', link: 'https://knallerfalke.com/' },
  { img: '/imgs/clients/unite.png', title: 'Unite', link: 'https://unite.eu/' },
  { img: '/imgs/clients/accessowl.webp', title: 'AccessOwl', link: 'https://www.accessowl.io/' },
  { img: '/imgs/clients/brickfact.png', title: 'Brickfact', link: 'https://brickfact.com/' },
  { img: '/imgs/clients/mercateo.svg', title: 'Mercateo', link: 'https://www.mercateo.com/' },
];
</script>
<style></style>
