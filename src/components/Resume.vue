<template lang="pug">
div
  .bg-dark.text-uppercase.text-center.text-white.rounded
    h2.font-weight-bold.px-1 Resumo
  p {{resume}}
</template>

<script>
export default {
  props: {
    resume: String
  }
}
</script>