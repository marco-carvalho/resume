<template lang="pug">
div
  .bg-dark.text-uppercase.text-center.text-white.rounded
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
            company: 'BTG Pactual',
            position: 'Analista de Desenvolvimento Web',
            from: this.$moment('20190101'),
            to: null,
            description: 'Fui responsável pelo desenvolvimento de interfaces e APIs que atendem as necessidades e demandas dos funcionários internos e clientes externos das áreas de Asset Management, Wealth Management e Investment Banking.',
            tecnologies: [
              {name:"C#", subtecnologies: ["Web API", "WCF"]},
              {name:"SQL", subtecnologies: ["SQL Server"]},
              {name:"CI/CD", subtecnologies: ["Azure DevOps"]},
            ]
          },
          {
            company: 'Stone Pagamentos',
            position: 'Analista de Desenvolvimento Web',
            from: this.$moment('20180801'),
            to: this.$moment('20190101'),
            description: 'Fui responsável pelo desenvolvimento de interfaces e APIs que permitem a identificação e análise de lojistas que apresentaram comportamento transacional suspeito, suprindo a necessidade dos funcionários internos das áreas de Investigação, Credenciamento e Antifraude.',
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
            description: "Fui responsável pelo desenvolvimento de serviços e APIs no projeto do Banco Digital e no sistema interno da empresa, além de ter iniciado os projetos de migração dos sites institucionais para a utilização da JAMstack.",
            tecnologies: [
              {name:"C#", subtecnologies: ["Web API", "WCF"]},
              {name:"SQL", subtecnologies: ["SQL Server"]},
              {name:"HTML"},
              {name:"CSS", subtecnologies: ["Bootstrap"]},
              {name:"Javascript", subtecnologies: ["React"]},
            ]
          },
          {
            company: 'CEFET/RJ',
            position: 'Bolsista de Iniciação Científica',
            from: this.$moment("20170101"),
            to: this.$moment("20170601"),
            description: 'Implementei um framework de Machine Learning chamado Diffusion Map para reduzir a dimensionalidade e extrair funcionalidades de centenas de datasets formados por estrelas.',
            tecnologies: [
              {name: "R"}
            ]
          },
          {
            company: 'Itaú Unibanco',
            position: 'Estagiário de Desenvolvimento Web',
            from: this.$moment("20150501"),
            to: this.$moment("20161201"),
            description: 'Fui responsável pelo desenvolvimento de interfaces e serviços web dos clientes da área de Previdência.',
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
