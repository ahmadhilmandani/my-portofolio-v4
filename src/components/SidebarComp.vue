<template>
  <div @click="openSidebar.close" :class="openSidebar.isOpen ? 'w-full' : 'w-0'"
    class="h-screen fixed top-0 bottom-0 left-0 right-0 bg-cust-black z-[1000000000000000000] transition-all overflow-hidden">

    <RouterLink to="/" class="block px-5 mt-10 text-cust-gray-lighter text-sm">
      Home
    </RouterLink>
    <RouterLink to="/experience-achievment" class="block px-5 mt-10 text-cust-gray-lighter text-sm">
      Experience & Achievment
    </RouterLink>
    <RouterLink to="/personal-projects"
      class="block px-5 mt-10 text-cust-gray-lighter text-sm border-b border-cust-gray-lighter pb-5">
      Personal Project
    </RouterLink>

    <a href="mailto: ahmadhilmanlagi@gmail.com"
      class="hover:shadow-xl hover:shadow-cust-blue/20 mt-5 p-5 rounded-xl transition-all hover:translate-y-[-3px] flex items-center gap-5">
      <IconMail class="w-5" color="white" />
      <span class="text-cust-white">
        ahmadhilmanlagi@gmail.com
      </span>
    </a>
    <a href="https://github.com/ahmadhilmandani" target="_blank"
      class="hover:shadow-xl hover:shadow-cust-blue/20 mt-10 p-5 rounded-xl transition-all hover:translate-y-[-3px] flex items-center gap-5">
      <IconBrandGithub class="w-5" color="white" />
      <span class="text-cust-white">
        ahmadhilmandani
      </span>
    </a>
    <a href="https://www.linkedin.com/in/ahmad-hilman-dani/" target="_blank"
      class="hover:shadow-xl hover:shadow-cust-blue/20 mt-10 p-5 rounded-xl transition-all hover:translate-y-[-3px] flex items-center gap-5">
      <IconBrandLinkedin class="w-5" color="white" />
      <span class="text-cust-white">
        Ahmad Hilman Dani
      </span>
    </a>
    <a href="https://x.com/hellohill__" target="_blank"
      class="hover:shadow-xl hover:shadow-cust-blue/20 mt-10 p-5 rounded-xl transition-all hover:translate-y-[-3px] flex items-center gap-5">
      <IconBrandX class="w-5" color="white" />
      <span class="text-cust-white">
        @hellohill__
      </span>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { useOpenSidebarStore } from '../stores/openSidebar';
import { IconBrandGithub, IconBrandLinkedin, IconBrandX, IconMail } from '@tabler/icons-vue';

const openSidebar = useOpenSidebarStore()
</script>

<style scoped>
a {
  @apply hover:text-cust-white transition-all;
}

.router-link-exact-active {
  @apply font-bold text-cust-white;
}
</style>