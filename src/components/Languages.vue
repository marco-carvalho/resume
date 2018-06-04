<template lang="pug">
  .text-center.mb-3
    hr.m-0.mb-2
    h2.font-weight-bold.text-uppercase.m-0 {{name}}
    hr.mt-0
    div(v-for='language in languages')
      strong.mr-1 {{language.name}}:
      span {{language.level}}
</template>

<script>
export default {
  data () {
    return {
      name: "Idiomas",
      languages: [
        {
          name: 'Português',
          level: 'fluente'
        },
        {
          name: 'Inglês',
          level: 'avançado'
        },
        {
          name: 'Espanhol',
          level: 'básico'
        },
      ]
    }
  }
}
</script>