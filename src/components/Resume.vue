<template lang="pug">
  .mb-3
    hr.m-0.mb-2
    h2.font-weight-bold.text-uppercase.text-center.m-0 {{name}}
    hr.mt-0
    p {{resume}}
</template>

<script>
export default {
  data () {
    return {
      name: "Resumo",
      resume: 'Um cientista da computação em formação, apaixonado por desenvolvimento web e sobre os bons usos de novas tecnologias, e focado em melhorar e aplicar os meus conhecimentos e habilidades - tanto os conquistados academicamente quanto os de forma independente - em experiências que me façam crescer profissionalmente.'
    }
  }
}
</script>