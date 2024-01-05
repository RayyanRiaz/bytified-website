<template>
  <div>
    <div class="flex flex-row gap-8 md:gap-20 flex-wrap justify-center items-start px-8">
      <ModalCard>
        <WithSuspense>
          <OurTeam class="self-center w-2/3 md:w-full" />
        </WithSuspense>
        <h3 class="text-center text-lg md:text-2xl">The Team</h3>
        <hr />
        <div>
          Our strength lies in our global team—experts from diverse backgrounds collaborating to bring you unparalleled
          solutions. Our consultants bring years of experience, ensuring a depth of knowledge and proficiency that sets
          our solutions apart.
        </div>
      </ModalCard>
      <ModalCard>
        <WithSuspense>
          <ProductQuality class="self-center w-2/3 md:w-full" />
        </WithSuspense>
        <h3 class="text-center text-lg md:text-2xl">The Quality</h3>
        <hr />
        <div>
          At Bytified, we stand by our commitment to unwavering product quality, ensuring each deliverable meets the
          highest standards of excellence.
        </div>
      </ModalCard>
      <ModalCard>
        <WithSuspense>
          <WorkModes class="self-center w-2/3 md:w-full" />
        </WithSuspense>
        <h3 class="text-center text-lg md:text-2xl">Working Models</h3>
        <hr />
        <div>
          We offer flexible working models tailored to your needs, be it through outsourcing for project efficiency or
          outstaffing for dedicated expertise. Experience seamless collaboration that suits your vision and goals.
        </div>
      </ModalCard>
    </div>
  </div>
</template>
<script setup>
import ModalCard from '@/components/general/ModalCard.vue';
import WithSuspense from '@/components/general/WithSuspense.vue';
import { defineAsyncComponent } from 'vue';

const OurTeam = defineAsyncComponent(() => import('@/components/general/animations/OurTeam.vue'));
const ProductQuality = defineAsyncComponent(() => import('@/components/general/animations/ProductQuality.vue'));
const WorkModes = defineAsyncComponent(() => import('@/components/general/animations/WorkModes.vue'));
</script>
<style scoped></style>
