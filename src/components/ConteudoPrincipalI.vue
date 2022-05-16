<script>
import CompOpcao from "./CompOpcao.vue";
export default {
  components: { CompOpcao },
};
</script>
<template>
  <main id="content">
    <div id="Introdução">
      <h1 class="comecoP glow">Projeto Amphibia</h1>
      <h1>Seja Bem-vindo ao meu site!</h1>
      <h3>
        Aqui você verá curiosidades e análises do desenho animado Amphibia,
        feitas de fã para fã!
      </h3>
      <img
        src="../assets/img/Fundo_Casa-dos-Plantas.jpg"
        alt="Casa dos Plantars"
      />
      <h1>Atenção!!!</h1>
      <h3>
        Esse site está entupido de spoilers, se você não assistiu e gostaria de
        ter uma experiência sem spoilers eu recomendo que você saia deste site
        AGORA! (A não ser que você não se importe com spoilers, embora eu
        recomende que você tenha a experiência completa)
      </h3>
      <h3>
        Esse site foi produzido como um trabalho escolar para o segundo ano do
        ensino médio (vou colocar a nota aqui dps que entregar kk) mas também
        como uma forma de compartilhar os aspectos que eu mais gosto desse
        desenho com as pessoas que quiserem acessá-lo, então prepare-se pois
        vamos entrar em uma aventura e tanto!!!11!!1!!!
      </h3>
    </div>
    <div id="Resumo">
      <h1>Sobre o que é o desenho?</h1>
      <h3>
        O desenho é sobre uma garota tailandesa chamada Anne Boochuy que abriu
        uma caixa de músicas misteriosa e foi parar em outro mundo chamado
        Amphibia. Nesse mundo ela foi acolhida pela família Plantar da cidade de
        Wartwood e decide ficar lá até descobrir como reativar a caixa de música
        e retornar para o planeta terra.
      </h3>
      <img src="../assets/img/Abertura.gif" alt="Primeira cena da abertura" />
      <h3>
        O desenho estreou em 17 de julho de 2019 noos EUA e em 5 de agosto de
        2019 no Brasil e conta com 3 temporadas e 58 episódios tendo deu último
        episódio lançado em 14 de maio de 2022. O desenho também possui uma nota
        geral de 8,1/10 no IMDB e 9,8/10 em seu melhor episódio. <br />
        O desenho foi criado por Matt Braly, um animador, diretor, escritor,
        artista de storyboard e produtor americano conhecido anteriormente por
        ter trabalhado como diretor em Gravity Falls.
      </h3>
      <h3>
        O desenho teve seu percurso na Disney ao lado de outro desenho chamado
        The Owl House, que embora tenha estreado no ano seguinte, acompanhou
        Amphibia do início ao fim de seu percurso, fazendo com que muitas das
        pessoas que assistissem Amphibia também acabassem assistindo The Owl
        House (principalmente quase se considera a amizade dos criadores de
        ambos desenhos e o quanto eles interagem online).
      </h3>
      <h3>
        Apesar do foco em comédia, o desenho possui uma tonelada de segredos e
        detalhes ao longo que tornam a lore do mesmo muito mais complexa, desde
        de um sistema político corrupto até profecias e horrores desumanos além
        de nossa compreensão.
      </h3>
      <h2>
        Abaixo você poderá escolher qual aspecto do desenho deseja explorar
      </h2>
      <img src="../assets/img/Caixa-De-Música.jpg" alt="Caixa da calamidade" />
      <h1 class="glow">Para onde deseja ir?</h1>
    </div>
    <div class="container">
      <div id="OutrasOpções">
        <CompOpcao class="Lore glow" texto="Lore" />
        <CompOpcao class="Episódios glow" texto="Episodios" />
        <CompOpcao class="Segredos glow" texto="Segredos" />
        <CompOpcao class="Personagens glow" texto="Personagens" />
      </div>
    </div>

    <br /><br />

    <div id="Explicação">
      <h1>
        Cada um dos botões acima vai te levar para as informações que deseja
      </h1>
      <h3>
        O botão Lore vai te levar para a página com um resumo da lore do
        desenho, desde o início de Newtopia até o fim do desenho.
      </h3>
      <h3>
        O botão Episódios vai te levar para a página com uma lista de todos os
        episódios do desenho.
      </h3>
      <h3 class="codf">
        O botao Segredos vai te levar para uma pagina com os segredos e runas de
        Amphibia.
      </h3>
      <h3>
        O botão Personagens vai te levar para uma página com um resumo dos
        pesonagens mais importantes.
      </h3>
    </div>
    <h1 class="comecoP glow codf">Divirta-se!</h1>
  </main>
</template>
