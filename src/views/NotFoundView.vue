<template>
  <main class="w-full min-h-screen flex justify-center items-center bg-cust-black">
    <div class="w-[500px] p-24 aspect-video flex justify-center items-center flex-col gap-4">
      <h1 class="font-bold text-5xl text-cust-white">404 🥲</h1>
      <div class="text-cust-white">waduh... ini dimanaaa??</div>
      <RouterLink to="/">
        <ButtonComp styleProp="fill">
          Balik skuy!
        </ButtonComp>
      </RouterLink>
    </div>
  </main>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router';
import ButtonComp from '../components/ButtonComp.vue';
</script>