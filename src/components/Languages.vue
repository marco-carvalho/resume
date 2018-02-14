<template lang="pug">
  div.text-center
    h2 {{name}}
    hr
    div(v-for='language in languages')
      p.mb-0
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