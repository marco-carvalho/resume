<template lang="pug">
  .text-center
    h1.text-uppercase.m-0 {{name}}
    p.m-0
      a(href="mailto:{{mail}}") {{mail}}
      span.mx-1 |
      span +{{phone.CCC}} {{phone.cityCode}} {{phone.number}}
    p
      i.fa.fa-github.mr-1
      a(href="https://github.com/{{github}}") {{github}}
      span.mx-1 |
      i.fa.fa-linkedin-square.mr-1
      a(href="https://linkedin.com/in/{{linkedin}}") {{linkedin}}
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