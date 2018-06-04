<template lang="pug">
  div
    hr.m-0.mb-2
    h2.font-weight-bold.text-uppercase.text-center.m-0 {{name}}
    hr.mt-0
    .mb-3(v-for='experience in experiences')
      h4.font-weight-bold.m-0 {{experience.position}}
      h5.m-0 {{experience.company}}
      .text-secondary {{experience.from}} - {{experience.to || "atual"}}
      p.m-0 {{experience.description}}
      .list-inline-item(v-for='tecnology in experience.tecnologies')
        .list-inline-item.bg-dark.p-1.rounded.text-white.mb-1 {{tecnology.name}}
        .list-inline-item(v-for='subtecnology in tecnology.subtecnologies')
          .list-inline-item.bg-secondary.p-1.rounded.text-white.mb-1 {{subtecnology}}
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
            from: this.moment(new Date(2017, 5)).format("MMMM/YYYY"),
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
            from: this.moment(new Date(2017, 3)).format("MMMM/YYYY"),
            to: this.moment(new Date(2017, 7)).format("MMMM/YYYY"),
            description: 'O projeto de pesquisa teve como objetivo implementar e utilizar o framework Diffusion Map para reduzir a dimensionalidade do dataset de flores Iris e de datasets formados por características de estrelas, como coordenadas e informações referentes a luminosidade.',
            tecnologies: [
              {name: "R"}
            ]
          },
          {
            company: 'Itaú Unibanco',
            position: 'Estagiário de Desenvolvimento Web',
            from: this.moment(new Date(2015, 4)).format("MMMM/YYYY"),
            to: this.moment(new Date(2016, 10)).format("MMMM/YYYY"),
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
    }
  }
</script>