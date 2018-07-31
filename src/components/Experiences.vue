<template lang="pug">
  div
    .bg-secondary.text-uppercase.text-center.text-white.rounded
      h2.font-weight-bold.p-1 {{name}}
    .mb-3(v-for='experience in experiences')
      h4.font-weight-bold.m-0 {{experience.position}}
      h5.m-0 {{experience.company}}
      .list-inline.text-secondary
        .list-inline-item {{experience.from.format("MMMM/YYYY")}}
        .list-inline-item -
        .list-inline-item {{experience.to ? experience.to.format("MMMM/YYYY") : 'atualmente'}}
        .list-inline-item •
        .list-inline-item {{dateDiff(experience.from, experience.to)}} mes(es)
      .mb-1 {{experience.description}}
      .list-inline-item.mb-1(v-for='tecnology in experience.tecnologies')
        .list-inline-item.bg-dark.p-1.rounded.text-white {{tecnology.name}}
        .list-inline-item.bg-secondary.p-1.rounded.text-white(v-for='subtecnology in tecnology.subtecnologies') {{subtecnology}}
</template>

<script>
  export default {
    data () {
      return {
        name: "Histórico Profissional",
        experiences: [
          {
            company: 'Banco Modal',
            position: 'Estagiário de Desenvolvimento Web',
            from: this.$moment("20170501"),
            to: null,
            description: "Trabalhei diretamente no projeto de fusão do banco com a corretora, sendo responsável pelo desenvolvimento/manutenção de serviços/APIs e pela criação de novas funcionalidades para o sistema interno da empresa, além de ter iniciado os projetos de migração dos sites institucionais do banco para a utilização da JAMstack.",
            tecnologies: [
              {name:"C#", subtecnologies: ["Web API", "Entity", "WCF"]},
              {name:"SQL", subtecnologies: ["SQL Server"]},
              {name:"HTML"},
              {name:"CSS", subtecnologies: ["Bootstrap"]},
              {name:"Javascript", subtecnologies: ["GatsbyJS"]},
              {name:"Headless CMS", subtecnologies: ["Netlify CMS"]},
              {name:"PHP", subtecnologies: ["Wordpress"]},
            ]
          },
          {
            company: 'CEFET/RJ',
            position: 'Bolsista de Iniciação Científica',
            from: this.$moment("20170101"),
            to: this.$moment("20170701"),
            description: 'O projeto de pesquisa teve como objetivo implementar e utilizar o framework Diffusion Map para reduzir a dimensionalidade do dataset de flores Iris e de datasets formados por características de estrelas, como coordenadas e informações referentes a luminosidade.',
            tecnologies: [
              {name: "R"}
            ]
          },
          {
            company: 'Itaú Unibanco',
            position: 'Estagiário de Desenvolvimento Web',
            from: this.$moment("20150401"),
            to: this.$moment("20161201"),
            description: 'No time de Propostas Comerciais, fui responsável pelo desenvolvimento/manutenção de projetos web dos diversos clientes da área de Previdência, corrigindo bugs e melhorando o desempenho.',
            tecnologies: [
              {name: "C#"},
              {name: "SQL", subtecnologies: ["SQL Server"]},
              {name: "HTML"},
              {name: "CSS"},
              {name: "Javascript", subtecnologies: ["jQuery", "Knockout"]},
              {name: "Scrum"}
            ]
          }
        ]
      }
    },
    methods: {
      dateDiff(date1, date2) {
        let from = this.$moment(date1);
        let to = this.$moment(date2 || new Date());
        return Number(this.$moment.duration(to.diff(from)).asMonths().toFixed(0)) + 1;
      }
    }
  }
</script>