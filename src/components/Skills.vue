<template lang="pug">
  div
    .bg-secondary.text-uppercase.text-center.text-white.rounded
      h2.font-weight-bold.p-1 {{name}}
    .text-center.mb-3(v-for="skill in skills")
      .list-inline-item(v-for="tecnology in skill.tecnologies")
        .list-inline-item.bg-dark.p-1.rounded.text-white.mt-1 {{tecnology.name}}
        .list-inline-item(v-for="subtecnology in tecnology.subtecnologies")
          .list-inline-item.bg-secondary.p-1.rounded.text-white.mt-1 {{subtecnology}}
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
            { name: "AWS", subtecnologies: ["EC2"]},
            { name: "CI/CD", subtecnologies: ["Travis"]},
            { name: "Linux", subtecnologies: ["Ubuntu"]},
            { name: "Docker", subtecnologies: ["Compose"]},
            { name: "Web Servers", subtecnologies: ["IIS", "Nginx"]},
          ]
        }
      ]
    };
  }
};
</script>