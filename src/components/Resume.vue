<template lang="pug">
.mb-3
  .bg-dark.text-uppercase.text-center.text-white.rounded
    h2.font-weight-bold.px-1 {{name}}
  p {{resume}}
</template>

<script>
export default {
  data () {
    return {
      name: "Resumo",
      resume: 'Um cientista da computação apaixonado por desenvolvimento web, interessado por Big Data/Machine Learning/DevOps, motivado pelos bons usos de novas tecnologias, e focado em melhorar e aplicar os meus conhecimentos e competências - tanto os conquistados academicamente quanto os de forma independente - em experiências que me façam crescer profissionalmente.'
    }
  }
}
</script>