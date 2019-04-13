<template lang="pug">
div
  .bg-dark.text-uppercase.text-center.text-white.rounded
    h2.font-weight-bold.px-1 Habilidades
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
  props: {
    skills: Array
  }
}
</script>