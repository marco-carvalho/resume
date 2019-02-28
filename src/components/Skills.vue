<template lang="pug">
.mb-3
  .bg-dark.text-uppercase.text-center.text-white.rounded
    h2.font-weight-bold.px-1 {{name}}
  .row.mb-1(v-for="skill in skills")
    .col-auto
      .bg-dark.text-uppercase.text-center.text-white.rounded
        h2.font-weight-bold.px-1 {{skill.name}}
    .col
      .row.mb-1(v-for="tecnology in skill.tecnologies")
        .list-inline-item
          .bg-dark.px-1.rounded.text-white {{tecnology.name}}
        .list-inline-item(v-for="subtecnology in tecnology.subtecnologies")
          .bg-secondary.px-1.rounded.text-white {{subtecnology}}
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
            { name: "CSS", subtecnologies: ["Bootstrap", "SASS"] },
            { name: "Javascript", subtecnologies: ["VueJS", "React"]},
          ]
        },
        {
          name: "Back End",
          tecnologies: [
            { name: "C#", subtecnologies: ["Web API", "WCF"] },
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
            { name: "CI/CD", subtecnologies: ["Travis CI", "GoCD", "Azure DevOps"]},
            { name: "Logs", subtecnologies: ["Splunk"]},
            { name: "Cloud", subtecnologies: ["AWS"]},
          ]
        }
      ]
    };
  }
};
</script>
