<template>
  <div>
    <div class="w-full h-full flex flex-col gap-2 shadow-lg px-4 py-8 max-w-full text-justify border border-gray-200">
      <h3 class="text-center text-lg md:text-2xl"><slot name="heading"></slot></h3>
      <hr />
      <div>
        <div class="w-full p-3 md:p-6">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
