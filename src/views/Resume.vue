<template lang="pug">
  div
    h2.text-center Resumo
    hr
    p {{resume}}
</template>

<script>
export default {
  data () {
    return {
      resume: 'Um cientista da computação em formação, apaixonado por desenvolvimento web e sobre os bons usos de novas tecnologias, e focado em melhorar e aplicar os meus conhecimentos e habilidades - tanto os conquistados academicamente quanto os de forma independente - em experiências que me façam crescer profissionalmente.'
    }
  }
}
</script>