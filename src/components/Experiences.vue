<template lang="pug">
  div
    h2.font-weight-bold.text-uppercase.text-center.m-0 {{name}}
    hr.mt-0
    .mb-3(v-for='experience in experiences')
      .mb-1
        h4.font-weight-bold.m-0 {{experience.position}}
        h5.m-0 {{experience.company}}
        .text-secondary {{experience.from}} - {{experience.to}}
      p.m-0 {{experience.description}}
      .list-inline-item(v-for='tecnology in experience.tecnologies')
        .list-inline-item.bg-dark.p-1.rounded.text-white.mt-1 {{tecnology.name}}
        .list-inline-item(v-for='subtecnology in tecnology.subtecnologies')
          .list-inline-item.bg-secondary.p-1.rounded.text-white.mt-1 {{subtecnology}}
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
            to: "atual",
            description: "Trabalhei no projeto de fusão do banco com a corretora, sendo responsável pelo desenvolvimento/manutenção de serviços/APIs e pela criação de novas funcionalidades para o sistema interno da empresa, e migrei os sites institucionais do banco para a utilização da JAMstack, o que acarretou em melhorias na performance e redução de custos, removendo a necessidade de bancos de dados e hospedagens pagas.",
            tecnologies: [
              {name:"C#", subtecnologies: ["Web API", "Entity", "WCF"]},
              {name:"SQL", subtecnologies: ["SQL Server"]},
              {name:"HTML"},
              {name:"CSS", subtecnologies: ["Bootstrap"]},
              {name:"Javascript", subtecnologies: ["GatsbyJS", "React", "Webpack"]},
              {name:"PHP", subtecnologies: ["Wordpress"]},
              {name:"Headless CMS", subtecnologies: ["Netlify CMS"]},
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