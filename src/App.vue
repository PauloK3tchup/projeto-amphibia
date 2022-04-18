<script>
import MenuLateral from "@/components/MenuLateral.vue";
import ConteudoPrincipal from "@/components/ConteudoPrincipal.vue";
import BlocoRodape from "@/components/BlocoRodape.vue";
import BlocoCabecalho from "@/components/BlocoCabecalho.vue";
export default {
  components: {
    MenuLateral,
    ConteudoPrincipal,
    BlocoRodape,
    BlocoCabecalho,
  },
};
</script>
<template>
  <BlocoCabecalho />
  <MenuLateral />
  <ConteudoPrincipal />
  <BlocoRodape />
</template>
