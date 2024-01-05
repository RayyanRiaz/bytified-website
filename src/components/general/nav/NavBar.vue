<template>
  <div>
    <div class="w-full fixed top-0">
      <nav class="flex flex-wrap items-center justify-between px-2 py-3 bg-gray-800">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
            <a href="#" @click="onLogoClick" :boxed="false">
              <AppLogo class="w-52 pt-4" fill="#FFF" />
            </a>
            <button
              class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              v-on:click="toggleNavbar()"
            >
              <MenuButton class="w-8 h-8" />
            </button>
          </div>
          <div
            v-bind:class="{ hidden: !showMenu, flex: showMenu }"
            class="lg:flex lg:flex-grow items-center text-black"
          >
            <div class="flex flex-col lg:flex-row list-none ml-auto gap-3 lg:gap-8 pt-8 lg:pt-0">
              <NavbarButton class="text-white" href="#clients">CLIENTS</NavbarButton>
              <NavbarButton class="text-white" href="#tech_stack">TECH STACK</NavbarButton>
              <NavbarButton class="text-white" href="#reviews">REVIEWS</NavbarButton>
              <NavbarButton :boxed="true" href="#contact">CONTACT</NavbarButton>
            </div>
          </div>
        </div>
      </nav>
      <TopCurve style="filter: drop-shadow(0px 5px 2px #aaa)" />
    </div>
  </div>
</template>

<script setup>
import '@/assets/main.css';
import TopCurve from '@/components/general/TopCurve.vue';
import NavbarButton from '@/components/general/nav/NavbarButton.vue';
import AppLogo from '@/components/icons/AppLogo.vue';
import MenuButton from '@/components/icons/MenuButton.vue';
import { setCurrentPage, store } from '@/store';
import { ref } from 'vue';

const showMenu = ref(false);
const toggleNavbar = function (forceState = null) {
  if (forceState !== null) {
    showMenu.value = forceState;
  } else {
    showMenu.value = !showMenu.value;
  }
};
const onLogoClick = () => {
  toggleNavbar(false);
  store.currentPage !== 'index' && setCurrentPage('index');
};
</script>

<style scoped>
nav {
  background-image: '';
}
</style>
