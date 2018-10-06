<template lang="pug">
  .text-center.mb-3
    .bg-dark.text-uppercase.text-center.text-white.rounded
      h2.font-weight-bold.p-1 {{name}}
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
        { name: 'Português', level: 'fluente' },
        { name: 'Inglês', level: 'fluente' },
      ]
    }
  }
}
</script>