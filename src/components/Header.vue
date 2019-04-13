<template lang="pug">
div
  h1.font-weight-bold.text-uppercase.m-0 {{name}}
  .list-inline
    .list-inline-item
      i.fa.fa-envelope.mr-1
      a(:href="'mailto:' + mail") {{mail}}
    .list-inline-item
      i.fa.fa-phone.mr-1
      span +{{phone.CCC}} {{phone.cityCode}} {{phone.number}}
    .list-inline-item
      i.fab.fa-github.mr-1
      a(:href="'https://github.com/' + github") {{github}}
    .list-inline-item
      i.fab.fa-linkedin.mr-1
      a(:href="'https://linkedin.com/in/' + linkedin") {{linkedin}}
</template>

<script>
export default {
  props: {
    name: String,
    mail: String,
    phone: Object,
    github: String,
    linkedin: String,
  }
}
</script>