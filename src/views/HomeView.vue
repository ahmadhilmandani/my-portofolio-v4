<template>
  <div class="w-full min-h-screen flex flex-col justify-center items-center bg-neutral-50 text-neutral-900">
    <h1>
      Halo Dunia
    </h1>
    <div>
      {{ mainStore.count }}
    </div>
  
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from '../stores/mainStore'
const mainStore = useMainStore()
</script>