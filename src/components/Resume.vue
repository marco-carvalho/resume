<template lang="pug">
div
  .bg-black.uppercase.text-center.text-white.rounded.mb-2.text-2xl
    .font-bold.p-1 Resumo
  .font-normal {{resume}}
</template>

<script>
export default {
  props: {
    resume: String
  }
}
</script>