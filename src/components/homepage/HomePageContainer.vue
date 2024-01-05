<template>
  <div>
    <div class="flex flex-col gap-16 pb-12 pt-44 md:pt-56">
      <div>
        <HeadingH1 class="text-center w-full capitalize px-10 md:px-20 lg:px-32 xl:px-96">
          Your Partner in Full-Stack, Mobile, and Data Science Solutions
        </HeadingH1>
        <BitsAnimation />
        <WhyUs />
        <PastWork id="clients" class="md:-mt-10 lg:-mt-20" />
      </div>
      <TechStack class="px-10" />
      <OurReviews id="reviews" />
      <CookiePopup />
    </div>
  </div>
</template>
<script setup>
import BitsAnimation from '@/components/BitsAnimation.vue';
import CookiePopup from '@/components/general/CookiePopup.vue';
import HeadingH1 from '@/components/general/typography/HeadingH1.vue';
import OurReviews from '@/components/homepage/OurReviews.vue';
import PastWork from '@/components/homepage/PastWork.vue';
import TechStack from '@/components/homepage/TechStack.vue';
import WhyUs from '@/components/homepage/WhyUs.vue';
</script>
