<template>
  <nav class="h-[72px] flex justify-between items-center px-14 fixed top-0 left-0 right-0 z-50 bg-red-">
    <div class="flex gap-3 items-center relative z-[2]">
      <img :src="LogoDark" alt="" class="w-5">
      <h1 class="text-cust-white font-bold text-2xl">Hilman</h1>
    </div>
    <div class="flex gap-14">
      <RouterLink to="/" class="text-cust-white text-sm">
        Home
      </RouterLink>
      <RouterLink to="/1" class="text-cust-gray-lighter text-sm">
        Experience & Achievment
      </RouterLink>
      <RouterLink to="/2" class="text-cust-gray-lighter text-sm">
        Personal Project
      </RouterLink>
      <RouterLink to="/3" class="text-cust-gray-lighter text-sm">
        Boost My Mood!
      </RouterLink>
    </div>
  </nav>
</template>


<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import LogoDark from '../assets/logo-dark.png'

</script>

<style scoped>
.router-link-active {
  @apply font-bold text-cust-white;
}
</style>