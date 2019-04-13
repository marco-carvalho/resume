<template lang="pug">
div
  .bg-dark.text-uppercase.text-center.text-white.rounded
    h2.font-weight-bold.px-1 Idiomas
  div(v-for='language in languages')
    strong.mr-1 {{language.name}}:
    span {{language.level}}
</template>

<script>
export default {
  props: {
    languages: Array
  }
}
</script>