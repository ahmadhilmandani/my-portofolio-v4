<template>
  <aside class="fixed z-50 right-5 top-0 bottom-0 hidden xl:flex flex-col justify-center items-center gap-10 w-fit">
    <a href="mailto: ahmadhilmanlagi@gmail.com" class="hover:shadow-xl hover:shadow-cust-blue/20 p-3 rounded-xl transition-all hover:translate-y-[-3px]">
      <IconMail class="w-5" color="white" />
    </a>
    <a href="https://github.com/ahmadhilmandani" target="_blank" class="hover:shadow-xl hover:shadow-cust-blue/20 p-3 rounded-xl transition-all hover:translate-y-[-3px]">
      <IconBrandGithub class="w-5" color="white" />
    </a>
    <a href="https://www.linkedin.com/in/ahmad-hilman-dani/" target="_blank" class="hover:shadow-xl hover:shadow-cust-blue/20 p-3 rounded-xl transition-all hover:translate-y-[-3px]">
      <IconBrandLinkedin class="w-5" color="white" />
    </a>
    <a href="https://x.com/hellohill__" target="_blank" class="hover:shadow-xl hover:shadow-cust-blue/20 p-3 rounded-xl transition-all hover:translate-y-[-3px]">
      <IconBrandX class="w-5" color="white" />
    </a>
    <!-- <div class="text-cust-black">
      asd
    </div> -->
  </aside>
</template>

<script lang="ts" setup>
import { IconBrandGithub, IconBrandLinkedin, IconBrandX, IconMail } from '@tabler/icons-vue';

</script>