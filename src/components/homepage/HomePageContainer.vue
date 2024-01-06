<template>
  <div>
    <div class="flex flex-col gap-16 pb-12 pt-44 md:pt-56">
      <div>
        <HeadingH1 class="text-center w-full capitalize px-10 md:px-20 lg:px-32 xl:px-96">
          Your Partner in Full-Stack, Mobile, and Data Science Solutions
        </HeadingH1>
        <BitsAnimation />
        <WhyUs />
        <OurClients id="clients" />
      </div>
      <TechStack class="px-10" />
      <OurReviews id="reviews" />
      <OurPortfolio id="portfolio" />
      <CookiePopup />
    </div>
  </div>
</template>
<script setup>
import BitsAnimation from '@/components/BitsAnimation.vue';
import CookiePopup from '@/components/general/CookiePopup.vue';
import HeadingH1 from '@/components/general/typography/HeadingH1.vue';
import OurClients from '@/components/homepage/OurClients.vue';
import OurPortfolio from '@/components/homepage/OurPortfolio.vue';
import OurReviews from '@/components/homepage/OurReviews.vue';
import TechStack from '@/components/homepage/TechStack.vue';
import WhyUs from '@/components/homepage/WhyUs.vue';
</script>
