<template lang="pug">
div
  .text-center
    .bg-black.uppercase.text-center.text-white.rounded.mb-2.text-2xl
      .font-bold.p-1 Idiomas
    div(v-for='language in languages')
      .inline.font-bold.mr-1 {{language.name}}:
      .inline {{language.level}}
</template>

<script>
export default {
  props: {
    languages: Array
  }
}
</script>