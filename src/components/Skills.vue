<template lang="pug">
  div
    h2.font-weight-bold.text-uppercase.text-center.m-0 {{name}}
    hr.mt-0
    .row.text-center
      .col-6.mb-3(v-for="skill in skills")
        h5.font-weight-bold.text-uppercase.m-0 {{skill.name}}
        hr.mt-0
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
            { name: "Javascript", subtecnologies: ["AngularJS", "VueJS"]},
            { name: "HTML", subtecnologies: ["Pug"] },
            { name: "CSS", subtecnologies: ["Bootstrap", "Sass"] },
            { name: "Builds", subtecnologies: ["Webpack"]},
          ]
        },
        {
          name: "Back End",
          tecnologies: [
            { name: "C#", subtecnologies: ["Web API", "Entity", "WCF"] },
            { name: "Node.js", subtecnologies: ["Express"] },
            { name: "Python", subtecnologies: ["Django"] },
            { name: "PHP", subtecnologies: ["Wordpress"] },
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
            { name: "AWS"},
            { name: "CI/CD", subtecnologies: ["Travis", "CircleCI"]},
            { name: "Linux", subtecnologies: ["Ubuntu", "CentOS"]},
            { name: "Docker"},
            { name: "IIS"},
          ]
        }
      ]
    };
  }
};
</script>