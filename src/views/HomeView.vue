<script>
import { RouterView } from "vue-router";
import BlocoRodape from "@/components/BlocoRodape.vue";
export default {
  components: {
    RouterView,
    BlocoRodape,
  },
};
</script>
<template>
  <RouterView />
  <BlocoRodape />
</template>
