<template>
  <button @click="() => { handleClick?.() }" v-if="styleProp === 'fill'"
    class="flex justify-center items-center rounded-xl gap-2 w-full text-center px-4 py-2 font-bold text-sm hover:opacity-75 transition-all bg-cust-white text-cust-black relative z-[2]">
    <slot></slot>
  </button>

  <button @click="() => { handleClick?.() }" v-else-if="styleProp === 'outline'"
    class="flex justify-center items-center rounded-xl gap-2 w-full text-center px-4 py-2 border border-cust-white text-custborder-cust-white font-bold text-sm" >
    <slot></slot>
  </button>

</template>

<script lang="ts" setup>
defineProps(
  {
    styleProp: {
      validator(value: string) {
        return ['fill', 'outline'].includes(value)
      }
    },
    handleClick: Function
  }
)
</script>