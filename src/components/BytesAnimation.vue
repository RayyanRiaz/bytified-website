<template>
  <div>
    <!-- <img src="@/assets/imgs/sectionCutBottom.svg" /> -->
    <div
      class="vvv w-full flex flex-col gap-4 items-start md:gap-8 py-10 bg-gray-800 text-white font-bold text-sm md:px-16 md:text-2xl xl:text-4xl"
    >
      <HorizontalArrayAnimation
        class="numbers digital-font"
        :eWidth="arrayElSizes[0]"
        :inArray="numbers"
        :reverse="true"
      ></HorizontalArrayAnimation>
      <div class="flex flex-row">
        <div class="ml-4 md:ml-0 z-10 flex flex-row items-center w-10 h-10 md:w-20 md:h-20 animate-spin duration-1000">
          <img src="/imgs/cog.svg" />
        </div>
        <HorizontalArrayAnimation
          class="bits digital-font text-sm lg:text-lg xl:text-2xl flex flex-row items-center"
          :inArray="bits"
          :jump="8"
          :eWidth="arrayElSizes[1]"
        ></HorizontalArrayAnimation>
      </div>
      <div class="flex flex-row">
        <HorizontalArrayAnimation
          class="bytes digital-font flex flex-row items-center"
          :eWidth="arrayElSizes[2]"
          :inArray="ingestedBytes"
          :reverse="true"
        ></HorizontalArrayAnimation>
        <div
          v-if="ingestedBytes.length > 0"
          class="z-10 flex flex-row items-center w-10 h-10 md:w-20 md:h-20 animate-spin-rev transition-all ease-linear duration-500"
        >
          <img src="/imgs/cog.svg" />
        </div>
      </div>
    </div>
    <!-- <img src="@/assets/imgs/sectionCutTop.svg" class=""/> -->
  </div>
</template>
<script setup>
import HorizontalArrayAnimation from '@/components/general/animations/HorizontalArrayAnimation.vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';

const NUMBERS_SIZE = 4;
const BITS_SIZE = 24;
const BYTES_SIZE = 3;

const numbers = ref([]);
const bits = ref([]);
const ingestedBytes = ref([]);
const arrayElSizes = ref([12, 4, 20]);

const generateRandomString = () => Math.random().toString(36).slice(2);

let numbersInterval = null;
function getRandomByteNumber() {
  numbers.value.unshift({
    key: generateRandomString(),
    value: Math.floor(Math.random() * 9),
  });

  if (numbers.value.length === NUMBERS_SIZE + 1) {
    const lastNumberBits = convertByteNumberToBits(numbers.value[numbers.value.length - 1].value).map((e, idx) => ({
      key: numbers.value[numbers.value.length - 1].key + idx.toString(),
      value: e,
    }));
    bits.value = [...lastNumberBits, ...bits.value];
  }
  numbers.value = numbers.value.slice(0, NUMBERS_SIZE);

  if (bits.value.length == BITS_SIZE) {
    const byteToBeIngested = bits.value.slice(bits.value.length - 8);
    bits.value = bits.value.slice(0, bits.value.length - 8);
    ingestedBytes.value.unshift({
      key: generateRandomString(),
      value: byteToBeIngested.reduce((acc, curr) => {
        return (acc << 1) | curr.value;
      }),
    });
  }

  ingestedBytes.value = ingestedBytes.value.slice(0, BYTES_SIZE);
}

function convertByteNumberToBits(byteRepr) {
  const binaryRepr = byteRepr.toString(2).padStart(4, '0');
  return Array.from(binaryRepr)
    .map((i) => +i)
    .flat();
}

function setArrayElSizes() {
  if (innerWidth < 768) {
    arrayElSizes.value = [12, 4, 20];
  } else if (innerWidth < 1028) {
    arrayElSizes.value = [16, 5, 28];
  } else {
    arrayElSizes.value = [24, 8, 40];
  }
}

onMounted(() => {
  setArrayElSizes();
  numbersInterval = setInterval(getRandomByteNumber, 1000);
  window.addEventListener('resize', setArrayElSizes);
});

onBeforeUnmount(() => {
  clearInterval(numbersInterval);
  window.removeEventListener('resize');
});
</script>

<style>
.bits .inline-block:nth-child(2n + 1) {
  color: #55c;
}
.bits .inline-block:nth-child(2n + 2) {
  color: #c55;
}
.vvv > div {
  border: 1px solid #c55;
}
</style>
