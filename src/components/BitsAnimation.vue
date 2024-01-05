<template>
  <div>
    <div
      class="w-full flex flex-col gap-4 items-start md:gap-8 py-10 text-black font-bold text-sm md:px-16 md:text-2xl xl:text-4xl"
    >
      <HorizontalArrayAnimation
        class="numbers digital-font"
        :eWidth="arrayElSizes[0]"
        :inArray="numbers"
        :reverse="true"
      ></HorizontalArrayAnimation>
      <div class="flex flex-row items-center">
        <div class="ml-4 md:ml-0 w-20 h-20 animate-spin duration-1000">
          <img class="min-w-16 min-h-16 w-20 h-20" v-if="numbers.length === NUMBERS_SIZE" src="/imgs/cog.svg" />
        </div>
        <HorizontalArrayAnimation
          class="bits digital-font text-sm lg:text-lg xl:text-2xl flex flex-row items-center"
          :inArray="bits"
          :jump="8"
          :eWidth="arrayElSizes[1]"
          :tY="0"
        ></HorizontalArrayAnimation>
      </div>
    </div>
  </div>
</template>
<script setup>
import HorizontalArrayAnimation from '@/components/general/animations/HorizontalArrayAnimation.vue';
import { store } from '@/store';
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';

const NUMBERS_SIZE = 18;
const BITS_SIZE = 56;
const BYTES_SIZE = 5;

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
const setArrayElSizes = (newWidth = null) => {
  if (newWidth === null) {
    newWidth = window.innerWidth;
  }
  if (newWidth < 768) {
    arrayElSizes.value = [12, 4, 20];
  } else if (newWidth < 1028) {
    arrayElSizes.value = [16, 5, 28];
  } else {
    arrayElSizes.value = [24, 8, 40];
  }
};
watch(() => store.dims, setArrayElSizes);
onMounted(() => {
  [...Array(NUMBERS_SIZE)].forEach(() => getRandomByteNumber());
  numbersInterval = setInterval(getRandomByteNumber, 1500);
  setArrayElSizes();
});
onBeforeUnmount(() => {
  clearInterval(numbersInterval);
});
</script>

<style>
/* .bits .inline-block:nth-child(2n + 1) {
  color: #55c;
} */

/* .bits .inline-block:nth-child(2n + 2) {
  color: #c55;
} */

.bits .inline-block:nth-child(8n + 1),
.bits .inline-block:nth-child(8n + 2),
.bits .inline-block:nth-child(8n + 3),
.bits .inline-block:nth-child(8n + 4) {
  color: #c55;
}

.bits .inline-block:nth-child(8n + 5),
.bits .inline-block:nth-child(8n + 6),
.bits .inline-block:nth-child(8n + 7),
.bits .inline-block:nth-child(8n + 8) {
  color: #55c;
}

.bits .inline-block {
  transition: all 1s ease-in-out;
}
</style>
