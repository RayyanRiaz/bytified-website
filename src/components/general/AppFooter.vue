<template>
  <div>
    <div class="flex flex-col gap-0">
      <BottomCurve :height="40" />
      <div class="w-full min-h-40 bg-gray-800 flex flex-col gap-10 justify-end text-white">
        <div class="flex flex-col items-center md:flex-row justify-around gap-4">
          <div id="contact" class="flex flex-col gap-4 items-center">
            <h4 class="text-3xl"><img src="/imgs/contact.svg" />Contact</h4>
            <div class="flex flex-col gap-6 justify-start">
              <a class="group" href="mailto:contact@bytified.com">
                <img class="w-8 h-8 inline mr-4 group-hover:scale-125 transition-all" src="/imgs/email.svg" />
                via Email (<span class="underline inline">contact@bytified.com</span>)
              </a>
              <a class="group" href="https://calendly.com/contact-bytified/30min">
                <img class="-ml-1 w-10 h-8 inline mr-4 group-hover:scale-125 transition-all" src="/imgs/calendar.svg" />
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
        <div class="flex flex-col border-t border-gray-500 py-2 items-center gap-4 md:flex-row md:justify-around">
          <span>Bytified © 2023. All rights reserved</span>
          <button @click="setCurrentPage('privacyPolicy')">Privacy Policy</button>
          <button @click="setCurrentPage('toc')">Terms & Conditions</button>
          <a href="https://storyset.com/work">Illustrations powered by Storyset</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import BottomCurve from '@/components/general/BottomCurve.vue';
import { setCurrentPage } from '@/store';
</script>
<style lang=""></style>
