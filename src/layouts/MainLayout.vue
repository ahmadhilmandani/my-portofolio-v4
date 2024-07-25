<template>
  <div class="relative">
    <SidebarComp />
    <NavbarComp />
    <div class="bg-cust-black">
      <RouterView />
      <!-- <FooterComp /> -->
    </div>
    <SosmedAsideComp />
  </div>
</template>


<script lang="ts" setup>
import { RouterView } from 'vue-router';
import NavbarComp from '../components/NavbarComp.vue';
import SosmedAsideComp from '../components/SosmedAsideComp.vue';
import SidebarComp from '../components/SidebarComp.vue';
import FooterComp from '../components/FooterComp.vue';
</script>