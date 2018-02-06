<template lang="pug">
  div
    h2.text-center Histórico Profissional
    hr
    div(v-for='experience in experiences')
      strong {{experience.position}}
      span.mx-1 no
      strong.mr-1 {{experience.company}}
      span ({{experience.from}}
      span.mx-1 -
      span {{experience.to}})
      p {{experience.description}}
      div(v-for='tecnology in tecnologies')
        p {{tecnology}}
</template>

<script>
  import moment from 'moment';

  export default {
    data () {
      return {
        experiences: [
          {
            company: 'Banco Modal',
            position: 'Estagiário em Desenvolvimento Web',
            from: moment(new Date(2017, 5)).format("MMMM/YYYY"),
            to: "today",
            description: '',
            tecnologies: [
              "C# (Entity, WCF, Web API)",
              "SQL (SQL Server)",
              "PHP (Wordpress)",
              "HTML (Pug)",
              "CSS (Bootstrap)",
              "Javascript (AngularJS, VueJS, Webpack, Gulp)"
            ]
          },
          {
            company: 'CEFET/RJ',
            position: 'Bolsista de Iniciação Científica',
            from: moment(new Date(2017, 3)).format("MMMM/YYYY"),
            to: moment(new Date(2017, 7)).format("MMMM/YYYY"),
            description: 'Implementei o framework Diffusion Map para reduzir a dimensionalidade do dataset de flores Iris e de datasets formados por características de estrelas, como coordenadas e informações referentes a luminosidade.',
            tecnologies: [
              "R"
            ]
          },
          {
            company: 'Itaú Unibanco',
            position: 'Estagiário em Desenvolvimento Web',
            from: moment(new Date(2015, 4)).format("MMMM/YYYY"),
            to: moment(new Date(2016, 10)).format("MMMM/YYYY"),
            description: '',
            tecnologies: [
              "C#",
              "SQL (SQL Server)",
              "CSS",
              "Javascript (jQuery, Knockout)"
            ]
          }
        ]
      }
    }
  }
</script>