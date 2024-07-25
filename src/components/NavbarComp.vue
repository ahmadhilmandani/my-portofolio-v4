<template>
  <nav class="h-[72px] flex justify-between items-center px-8 xl:px-14 fixed top-0 left-0 right-0 z-50 bg-cust-black/75 backdrop-blur-md">
    <div class="flex gap-3 items-center relative z-[2]">
      <img :src="LogoDark" alt="" class="w-5">
      <h1 class="text-cust-white font-bold text-2xl">Hilman</h1>
    </div>
    <div class="hidden xl:flex gap-14">
      <RouterLink to="/" class="text-cust-gray-lighter text-sm">
        Home
      </RouterLink>
      <RouterLink to="/experience-achievment" class="text-cust-gray-lighter text-sm">
        Experience & Achievment
      </RouterLink>
      <RouterLink to="/personal-projects" class="text-cust-gray-lighter text-sm">
        Personal Project
      </RouterLink>
      <!-- <RouterLink to="/3" class="text-cust-gray-lighter text-sm">
        Boost My Mood!
      </RouterLink> -->
    </div>

    <IconMenu2 @click="useOpeSidebar.open" color="white" class="block xl:hidden w-7 relative z-[2]" />
  </nav>
</template>


<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import LogoDark from '../assets/logo-dark.png';
import { IconMenu2 } from '@tabler/icons-vue';
import { useOpenSidebarStore } from '../stores/openSidebar';

const useOpeSidebar = useOpenSidebarStore();


</script>

<style scoped>
a{
  @apply hover:text-cust-white transition-all;
}
.router-link-exact-active {
  @apply font-bold text-cust-white;
}
</style>