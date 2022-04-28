<script>
import ConteudoPrincipal from "@/components/ConteudoPrincipal.vue";
import BlocoRodape from "@/components/BlocoRodape.vue";
import BlocoCabecalho from "@/components/BlocoCabecalho.vue";
export default {
  components: {
    ConteudoPrincipal,
    BlocoRodape,
    BlocoCabecalho,
  },
};
</script>
<template>
  <BlocoCabecalho />
  <ConteudoPrincipal />
  <BlocoRodape />
</template>
