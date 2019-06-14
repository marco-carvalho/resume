<template lang="pug">
div
  .bg-black.uppercase.text-center.text-white.rounded.mb-3.text-2xl
    .font-bold.px-1 Resumo
  .font-normal {{resume}}
</template>

<script>
export default {
  props: {
    resume: String
  }
}
</script>