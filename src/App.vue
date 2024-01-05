<script setup>
import AppFooter from '@/components/general/AppFooter.vue';
import NavBar from '@/components/general/nav/NavBar.vue';
import HomePageContainer from '@/components/homepage/HomePageContainer.vue';
import { setDimsAndSize, store } from '@/store';
import { defineAsyncComponent, onMounted } from 'vue';

onMounted(() => {
  setDimsAndSize();
  window.addEventListener('resize', setDimsAndSize);
});

const PrivacyPolicy = defineAsyncComponent(() => import('@/components/PrivacyPolicy.vue'));
const TermsAndConditions = defineAsyncComponent(() => import('@/components/TermsAndConditions.vue'));
</script>

<template>
  <main>
    <HomePageContainer v-if="store.currentPage == 'index'" class="transition-all duration-1000 ease-in-out" />
    <PrivacyPolicy v-if="store.currentPage == 'privacyPolicy'" class="transition-all duration-1000 ease-in-out" />
    <TermsAndConditions v-if="store.currentPage == 'toc'" class="transition-all duration-1000 ease-in-out" />
    <AppFooter />
    <NavBar />
  </main>
</template>
