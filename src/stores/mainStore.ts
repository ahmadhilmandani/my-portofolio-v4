import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainStore = defineStore("main", () => {
  const count = ref(1);

  function increment() {
    count.value = count.value + 1;
  }

  return { count, increment };
});
