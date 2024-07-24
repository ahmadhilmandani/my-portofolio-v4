<template>
  <div
    class="w-full min-h-screen flex justify-center items-end bg-cust-black pt-14 pb-12 px-16 relative gap-28 text-cust-white">
    <img :src="BlueDark" alt="" class="fixed top-0 left-0 z-[1]">
    <div class="w-[50%]">
      <img :src="MeColored" alt="" class="w-[340px] relative left-6 top-12 grayscale z-[2]">
      <h1 class="text-cust-white font-bold text-6xl relative z-[2]">
        Ahmad Hilman Dani
      </h1>
      <h2 class="text-2xl mt-6 leading-[160%]">
        Learn to mastering Frontend Web Dev <br> and UI/X Design
      </h2>
    </div>
    <div class="flex-1">
      <p class="w-[90%] text-[15px]">
        9 months as a Frontend Web Developer (intern & part-time) and still going strong! I mostly work with Vue, but
        React is also my buddy!
      </p>
      <div class="w-fit mt-5">
        <ButtonComp styleProp="fill">
          See Detail <IconArrowNarrowRight class="w-5" />
        </ButtonComp>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IconArrowNarrowRight } from '@tabler/icons-vue';
import BlueDark from '../assets/blue-dark.png';
import MeColored from '../assets/me-colored.png';
import ButtonComp from '../components/ButtonComp.vue';
</script>