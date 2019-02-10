<template lang="pug">
.text-center.mb-3
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
  data () {
    return {
      name: 'Marco Lúcio de Carvalho Júnior',
      mail: 'marcolucio27@gmail.com',
      phone: {
        CCC: 55,
        cityCode: 21,
        number: 995710606
      },
      github: 'marco-carvalho',
      linkedin: 'marco-carvalho'
    }
  }
}
</script>