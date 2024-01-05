<template>
  <div>
    <HeadingH2 class="text-center pb-4 md:pb-8">Past Reviews</HeadingH2>
    <div class="flex flex-row gap-8 md:gap-20 flex-wrap justify-center items-start px-8">
      <ReviewCard
        letter="M"
        name="Moritz Fenske"
        text="[...] helped us overhaul our dockerized scrapping infrastructure. Highly recommended!"
      >
        <template #association>
          <a class="underline" href="https://knallerfalke.com/">Knallerfalke</a>
        </template>
      </ReviewCard>
      <ReviewCard
        letter="L"
        name="Luke Strauer"
        text="[...] contributed extensively to our web and app-based projects, including front and backend development (Vue.js, Flutter, Firebase/GCP, Python) as well as ML model development for price prediction of Lego sets. [...] showed expertise, commitment, transparency, and professionalism at every level. [...] able to quickly understand and implement technical requirements while maintaining clear and open communication. I can certainly recommend [...] to anyone interested and would love to work with him again."
      >
        <template #association>
          <a class="underline" href="https://brickfact.com/">Brickfact</a>
        </template>
      </ReviewCard>
      <ReviewCard
        letter="M"
        name="Mathias Nestler"
        text="I had the pleasure of working with [...]. They demonstrated professionalism and technical expertise throughout from beginning till end of the project. [...] took time to understand our requirements thoroughly and were always ready to go the extra mile to ensure the project's success. I would definitely work together with them in the future!"
      >
        <template #association>
          <a class="underline" href="https://www.accessowl.io/">Accessowl</a>
        </template>
      </ReviewCard>
    </div>
  </div>
</template>
<script setup>
import HeadingH2 from '@/components/general/typography/HeadingH2.vue';
import ReviewCard from '@/components/homepage/ReviewCard.vue';
</script>
