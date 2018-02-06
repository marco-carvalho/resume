<template lang="pug">
  div
    h2.text-center Habilidades
    hr
    .row.text-center
      .col-12.col-md-6
        strong Back-End
        ul.list-inline
          li.list-inline-item(v-for='skill in backEnd') {{skill}}
        strong Front-End
        ul.list-inline
          li.list-inline-item(v-for='skill in frontEnd') {{skill}}
      .col-12.col-md-6
        strong Infrastructure
        ul.list-inline
          li.list-inline-item(v-for='skill in infra') {{skill}}
        strong Design & UX
        ul.list-inline
          li.list-inline-item(v-for='skill in design') {{skill}}
</template>

<script>
export default {
  data () {
    return {
      backEnd: [
        'C# (Entity, WCF, WebAPI)',
        'Node.js (npm)',
        'Python (Django)',
        'PHP (Wordpress)',
        'R'
      ],
      frontEnd: [
        'Javascript (AngularJS, Gulp)',
        'HTML (Pug)',
        'CSS (Bootstrap, Sass, Stylus)'
      ],
      infra: [
        'SQL (MySQL, SQL Server)',
        'Linux',
        'Git'
      ],
      design: [
        'Photoshop',
        'Illustrator',
        'Lightroom',
        'InDesign'
      ],
    }
  }
}
</script>