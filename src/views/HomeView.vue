<template>
  <div
    class="w-full min-h-screen xl:flex justify-center items-end bg-cust-black pt-32 pb-12 px-8 xl:px-16 relative text-cust-white">
    <img :src="BlueDark" alt="" class="fixed top-0 left-0 z-[1]">
    <div class="max-w-[640px] w-full xl:mx-0 mx-auto">
      <h1 v-motion-fade :duration="1000" class="xl:hidden text-center block text-cust-white font-bold text-6xl relative z-[2] leading-relaxed">
        Ahmad Hilman Dani
      </h1>
      <h2 v-motion-fade :duration="1000" class="xl:hidden text-center block text-xl mt-3 leading-[160%]">
        Learn to mastering Frontend Web Dev and UI/X Design
      </h2>

      <img v-motion-fade :duration="200" :src="MeColored" alt="" class="max-w-[340px] w-full relative left-0 xl:left-6 top-12 grayscale z-[2] xl:mx-0 mx-auto hover:grayscale-0 transition-all duration-700">
      <h1 v-motion-fade :duration="1000" class="hidden xl:block text-cust-white font-bold text-6xl relative z-[2]">
        Ahmad Hilman Dani
      </h1>
      <h2 v-motion-fade :duration="1000" class="hidden xl:block text-2xl mt-6 leading-[160%]">
        Learn to mastering Frontend Web Dev <br> and UI/X Design
      </h2>
    </div>
    <div class="flex-1">
      <p v-motion-fade :duration="1000" class="w-[90%] text-[15px] xl:mx-0 mx-auto xl:text-left text-center">
        More than 6 months as a Frontend Web Developer (intern & part-time) and still going strong! I mostly work with Vue, but
        React is also my buddy!
      </p>
      <RouterLink v-motion-fade :duration="1000" to="/experience-achievment" class="block w-fit mt-5 mx-auto xl:mx-0 relative z-[2]">
        <ButtonComp styleProp="fill">
          See Detail <IconArrowNarrowRight class="w-5" />
        </ButtonComp>
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IconArrowNarrowRight } from '@tabler/icons-vue';
import BlueDark from '../assets/blue-dark.png';
import MeColored from '../assets/me-colored.png';
import ButtonComp from '../components/ButtonComp.vue';
</script>