<template>
  <div class="relative">
    <NavbarComp />
    <RouterView />
    <SosmedAsideComp />
  </div>
</template>


<script lang="ts" setup>
import { RouterView } from 'vue-router';
import NavbarComp from '../components/NavbarComp.vue';
import SosmedAsideComp from '../components/SosmedAsideComp.vue';
</script>