<template lang="pug">
  div
    .bg-dark.text-uppercase.text-center.text-white.rounded
      h2.font-weight-bold.p-1 {{name}}
    .row.mb-2(v-for="skill in skills")
      .col-auto
        .bg-dark.text-uppercase.text-center.text-white.rounded
          h2.font-weight-bold.p-1 {{skill.name}}
      .col
        .row(v-for="tecnology in skill.tecnologies")
          .list-inline-item.bg-dark.p-1.rounded.text-white {{tecnology.name}}
          .list-inline-item(v-for="subtecnology in tecnology.subtecnologies")
            .list-inline-item.bg-secondary.p-1.rounded.text-white {{subtecnology}}
</template>

<script>
export default {
  data() {
    return {
      name: "Habilidades",
      skills: [
        {
          name: "Front End",
          tecnologies: [
            { name: "HTML", subtecnologies: ["Pug"] },
            { name: "CSS", subtecnologies: ["Bootstrap", "Sass", 'BEM'] },
            { name: "Javascript", subtecnologies: ["VueJS", "AngularJS", "React"]},
          ]
        },
        {
          name: "Back End",
          tecnologies: [
            { name: "C#", subtecnologies: ["Web API", "Entity", "WCF"] },
            { name: "Node.js", subtecnologies: ["Express"] },
            { name: "Python", subtecnologies: ["Django"] },
          ]
        },
        {
          name: "DBA",
          tecnologies: [
            { name: "SQL", subtecnologies: ["SQL Server", "PostgreSQL", "MySQL"]},
            { name: "NoSQL", subtecnologies: ["MongoDB"]},
            { name: "Cache", subtecnologies: ["Redis"]},
          ]
        },
        {
          name: "DevOps",
          tecnologies: [
            { name: "Linux", subtecnologies: ["Ubuntu"]},
            { name: "Web Servers", subtecnologies: ["IIS", "Nginx"]},
            { name: "Infra as Code", subtecnologies: ["Docker"]},
            { name: "CI/CD", subtecnologies: ["Travis", "GoCD"]},
            { name: "Logs", subtecnologies: ["Splunk"]},
            { name: "Cloud", subtecnologies: ["AWS"]},
          ]
        }
      ]
    };
  }
};
</script>