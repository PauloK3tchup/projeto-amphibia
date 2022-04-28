<script>
import CompOpcao from "./CompOpcao.vue";
export default {
  components: { CompOpcao },
};
</script>
<template>
  <main id="content">
    <div id="Introdução">
      <h1>Seja Bem-vindo ao meu site!</h1>
      <h3>
        Aqui você verá curiosidades e análises do desenho animado Amphibia,
        feitas de fã para fã!
      </h3>
      <img src="../assets/img/Fundo_Casa-dos-Plantas.jpg" alt="" />
    </div>
    <div id="OutrasOpções">
      <CompOpcao />
      <CompOpcao />
      <CompOpcao />
      <CompOpcao />
    </div>
  </main>
</template>
