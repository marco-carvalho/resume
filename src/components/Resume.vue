<template lang="pug">
  .mb-3
    .bg-dark.text-uppercase.text-center.text-white.rounded
      h2.font-weight-bold.p-1 {{name}}
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