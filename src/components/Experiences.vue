<template lang="pug">
div
  .bg-dark.text-uppercase.text-center.text-white.rounded
    h2.font-weight-bold.px-1 {{name}}
  .mb-1(v-for='experience in experiences')
    h4.font-weight-bold.m-0 {{experience.position}}
    h5.m-0 {{experience.company}}
    .list-inline.text-secondary
      .list-inline-item {{experience.from.format("MMMM/YYYY").toLowerCase()}}
      .list-inline-item -
      .list-inline-item {{experience.to ? experience.to.format("MMMM/YYYY").toLowerCase() : 'atualmente'}}
      .list-inline-item •
      .list-inline-item {{dateDiff(experience.from, experience.to)}} mes(es)
    .mb-1 {{experience.description}}
    .list-inline-item.mb-1(v-for='tecnology in experience.tecnologies')
      .list-inline-item.bg-dark.px-1.rounded.text-white {{tecnology.name}}
      .list-inline-item.bg-secondary.px-1.rounded.text-white(v-for='subtecnology in tecnology.subtecnologies') {{subtecnology}}
</template>

<script>
  export default {
    data () {
      return {
        name: "Histórico Profissional",
        experiences: [
          {
            company: 'BTG Pactual',
            position: 'Analista de Desenvolvimento Web',
            from: this.$moment('20190101'),
            to: null,
            description: 'Fui responsável pelo desenvolvimento e manutenção de interfaces e APIs que atendem as necessidades e demandas dos funcionários internos e clientes externos das áreas de Asset Management, Wealth Management e Investment Banking.',
            tecnologies: [
              {name:"HTML", subtecnologies: ["Pug"]},
              {name:"CSS", subtecnologies: ["Bootstrap"]},
              {name:"Javascript", subtecnologies: ["VueJS"]},
              {name:"C#"},
              {name:"Node.js", subtecnologies: ["Express"]},
              {name:"SQL", subtecnologies: ["SQL Server", "MySQL"]},
              {name:"Infra as Code", subtecnologies: ["Docker"]},
              {name:"CI/CD", subtecnologies: ["Azure DevOps"]},
              {name:"Cloud", subtecnologies: ["AWS"]},
            ]
          },
          {
            company: 'Stone Pagamentos',
            position: 'Analista de Desenvolvimento Web',
            from: this.$moment('20180801'),
            to: this.$moment('20190101'),
            description: 'Fui responsável pelo desenvolvimento e manutenção de interfaces e APIs que permitem a identificação e análise de lojistas que apresentaram comportamento transacional suspeito, suprindo a necessidade dos funcionários internos das áreas de Monitoramento, Credenciamento, Prevenção e Antifraude.',
            tecnologies: [
              {name:"C#", subtecnologies: ["WCF"]},
              {name:"Python"},
              {name:"SQL", subtecnologies: ["SQL Server"]},
              {name: "CI/CD", subtecnologies: ["GoCD", "Azure DevOps"]},
              {name:"Logs", subtecnologies: ["Splunk"]},
            ]
          },
          {
            company: 'Banco Modal',
            position: 'Estagiário de Desenvolvimento Web',
            from: this.$moment("20170601"),
            to: this.$moment('20180701'),
            description: "Fui responsável pelo desenvolvimento e manutenção de serviços e APIs do projeto do Banco Digital, pela criação de novas funcionalidades para o sistema interno da empresa, além de ter iniciado os projetos de migração dos sites institucionais do banco para a utilização da JAMstack.",
            tecnologies: [
              {name:"HTML"},
              {name:"CSS", subtecnologies: ["Bootstrap"]},
              {name:"Javascript", subtecnologies: ["React"]},
              {name:"C#", subtecnologies: ["Web API", "WCF"]},
              {name:"SQL", subtecnologies: ["SQL Server"]},
            ]
          },
          {
            company: 'CEFET/RJ',
            position: 'Bolsista de Iniciação Científica',
            from: this.$moment("20170101"),
            to: this.$moment("20170601"),
            description: 'Fui responsável por implementar e utilizar o framework de Machine Learning chamado Diffusion Map para reduzir a dimensionalidade e extrair funcionalidades do dataset de flores Iris e de datasets formados por características de estrelas, como coordenadas e informações referentes a luminosidade.',
            tecnologies: [
              {name: "R"}
            ]
          },
          {
            company: 'Itaú Unibanco',
            position: 'Estagiário de Desenvolvimento Web',
            from: this.$moment("20150501"),
            to: this.$moment("20161201"),
            description: 'Fui responsável pelo desenvolvimento e manutenção de projetos web dos clientes da área de Previdência, corrigindo bugs e melhorando o desempenho.',
            tecnologies: [
              {name: "HTML"},
              {name: "CSS"},
              {name: "Javascript", subtecnologies: ["Knockout"]},
              {name: "C#"},
              {name: "SQL", subtecnologies: ["SQL Server"]},
            ]
          }
        ]
      }
    },
    methods: {
      dateDiff(date1, date2) {
        const from = this.$moment(date1);
        const to = this.$moment(date2 || new Date());
        const diff = to.diff(from);
        const duration = this.$moment.duration(diff);
        const durationAsMonths = duration.asMonths();
        return Math.ceil(durationAsMonths);
      }
    }
  }
</script>
