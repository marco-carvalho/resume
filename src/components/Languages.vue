<template lang="pug">
  div
    h2 Idiomas
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
      languages = [
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