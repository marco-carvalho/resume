<template lang="pug">
div
  .text-center
    .bg-black.uppercase.text-center.text-white.rounded.mb-3.text-2xl
      .font-bold.px-1 Idiomas
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