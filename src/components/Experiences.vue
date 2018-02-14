<template lang="pug">
  div
    h2.text-center {{name}}
    hr
    div.mb-3(v-for='experience in experiences')
      strong {{experience.position}}
      span.mx-1 no
      strong.mr-1 {{experience.company}}
      span (
      span {{experience.from}}
      span.mx-1 -
      span {{experience.to}}
      span )
      p.m-0 {{experience.description}}
      .list-inline-item(v-for='tecnology in experience.tecnologies')
        .list-inline-item.bg-dark.p-1.rounded.text-white.mt-1.mr-1 {{tecnology.name}}
        .list-inline-item.bg-secondary.p-1.rounded.text-white.mt-1.mr-1.list-inline-item(v-for='subtecnology in tecnology.subtecnologies') {{subtecnology}}
</template>

<script>
  import moment from 'moment';

  export default {
    data () {
      return {
        name: "Histórico Profissional",
        experiences: [
          {
            company: 'Banco Modal',
            position: 'Estagiário em Desenvolvimento Web',
            from: moment(new Date(2017, 5)).format("MMMM/YYYY"),
            to: "today",
            description: 'No time de Desenvolvimento, fui responsável pelo desenvolvimento e manutenção de APIs.',
            tecnologies: [
              {name:"C#", subtecnologies: ["Entity", "WCF", "Web API"]},
              {name:"SQL", subtecnologies: ["SQL Server"]},
              {name:"PHP", subtecnologies: ["Wordpress"]},
              {name:"HTML", subtecnologies: ["Pug"]},
              {name:"CSS", subtecnologies: ["Bootstrap"]},
              {name:"Javascript", subtecnologies: ["AngularJS", "VueJS", "Webpack"]}
            ]
          },
          {
            company: 'CEFET/RJ',
            position: 'Bolsista de Iniciação Científica',
            from: moment(new Date(2017, 3)).format("MMMM/YYYY"),
            to: moment(new Date(2017, 7)).format("MMMM/YYYY"),
            description: 'Implementei o framework Diffusion Map para reduzir a dimensionalidade do dataset de flores Iris e de datasets formados por características de estrelas, como coordenadas e informações referentes a luminosidade.',
            tecnologies: [
              {name: "R"}
            ]
          },
          {
            company: 'Itaú Unibanco',
            position: 'Estagiário em Desenvolvimento Web',
            from: moment(new Date(2015, 4)).format("MMMM/YYYY"),
            to: moment(new Date(2016, 10)).format("MMMM/YYYY"),
            description: 'No time de Propostas Comerciais, fui responsável pelo desenvolvimento e manutenção de projetos web dos diversos clientes da área de Previdência.',
            tecnologies: [
              {name: "C#"},
              {name: "SQL", subtecnologies: ["SQL Server"]},
              {name: "CSS"},
              {name: "Javascript", subtecnologies: ["jQuery", "Knockout"]},
              {name: "Scrum"}
            ]
          }
        ]
      }
    }
  }
</script>