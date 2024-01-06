<template>
  <div>
    <div class="px-10 md:px-20">
      <HeadingH2 class="pb-10 text-center">Selected Portfolio</HeadingH2>
      <div class="text-justify md:text-center">
        We strongly recommend you to <a class="underline text-xl" href="#contact">contact us</a> for detailed overview
        of our past projects. Simply mentioning the names does not represent the multitude of underlaying tasks.
      </div>
      <div class="flex flex-row gap-3 md:gap-8 justify-around flex-wrap">
        <a
          class="py-10 group flex flex-col gap-3 items-center"
          href="https://brickfact.com"
          rel="nofollow"
          target="_blank"
        >
          <WithSuspense>
            <img
              v-lazy="`/imgs/clients/brickfact.png`"
              loading="lazy"
              class="group-hover:scale-105 transition-all w-20 h-20"
            />
          </WithSuspense>
          <h3>Brickfact Website & App</h3>
        </a>
        <a
          class="py-10 group flex flex-col gap-3 items-center"
          href="https://apps.apple.com/tr/app/knallerfalke/id1524120818"
          rel="nofollow"
          target="_blank"
        >
          <WithSuspense>
            <img
              v-lazy="`/imgs/clients/knallerfalke.png`"
              loading="lazy"
              class="group-hover:scale-105 transition-all w-20 h-20"
            />
          </WithSuspense>
          <h3>Knallerfalke App</h3>
        </a>
        <a
          class="py-10 group flex flex-col gap-3 items-center"
          href="https://www.accessowl.io/"
          rel="nofollow"
          target="_blank"
        >
          <WithSuspense>
            <img
              v-lazy="`/imgs/clients/accessowl.webp`"
              loading="lazy"
              class="group-hover:scale-105 transition-all w-40 h-20"
            />
          </WithSuspense>
          <h3>Backend Development for AccessOwl</h3>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import WithSuspense from '@/components/general/WithSuspense.vue';
import HeadingH2 from '@/components/general/typography/HeadingH2.vue';
</script>
<style></style>
