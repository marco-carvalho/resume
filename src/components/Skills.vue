<template lang="pug">
  div
    h2.text-center {{name}}
    hr
    .text-center
      .mb-3(v-for='skill in skills')
        .font-weight-bold {{skill.name}}
        .list-inline-item(v-for='tecnology in skill.tecnologies')
          .list-inline-item.bg-dark.p-1.rounded.text-white.mt-1 {{tecnology.name}}
          .list-inline-item(v-for='subtecnology in tecnology.subtecnologies')
            .list-inline-item.bg-secondary.p-1.rounded.text-white.mt-1 {{subtecnology}}
</template>

<script>
export default {
  data() {
    return {
      name: "Habilidades",
      skills: [
        {
          name: "Back End",
          tecnologies: [
            { name: "C#", subtecnologies: ["Entity Framework", "WCF", "Web API"] },
            { name: "Node.js", subtecnologies: ["Express"] },
            { name: "Python", subtecnologies: ["Django"] },
            { name: "PHP", subtecnologies: ["Wordpress"] },
            { name: "R"},
          ]
        },
        {
          name: "Front End",
          tecnologies: [
            { name: "Javascript", subtecnologies: ["AngularJS", "VueJS", "Webpack", 'Gulp']},
            { name: "HTML", subtecnologies: ["Pug"] },
            { name: "CSS", subtecnologies: ["Bootstrap", "Sass", "Stylus"] }
          ]
        },
        {
          name: "Infra",
          tecnologies: [
            { name: "SQL", subtecnologies: ["SQL Server", "PostgreSQL", "MySQL"]},
            { name: "Linux"},
            { name: "Docker"},
            { name: "Controle de Versão", subtecnologies: ["Git", "TFS"]},
          ]
        }
      ]
    };
  }
};
</script>