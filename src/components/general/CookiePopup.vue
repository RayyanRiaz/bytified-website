<template>
  <div>
    <Transition>
      <div
        v-show="showPopup"
        class="fixed bottom-0 w-full flex flex-row gap-4 bg-gray-300 p-4 justify-center items-center shadow-md"
      >
        <span
          >We use Cookies to ensure seamless experience. By using this website, you agree to the use of Cookies.</span
        >
      </div>
    </Transition>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';

const showPopup = ref(false);
onMounted(() => {
  if (document.cookie.indexOf('okClickedOnCookie') == -1) {
    showPopup.value = true;
    setTimeout(() => {
      document.cookie = 'okClickedOnCookie=true;' + document.cookie;
      showPopup.value = false;
    }, 5000);
  }
});
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
