<template lang="pug">
div
  .bg-black.uppercase.text-center.text-white.rounded.mb-2.text-2xl
    .font-bold.p-1 Certificados
  .mb-2(v-for="certification in certifications")
    .font-bold {{certification.title}}
    .font-normal {{certification.company}}
    .inline-block.text-gray-600.mr-1 {{certification.date.format("MMMM/YYYY").toLowerCase()}}
</template>

<script>
export default {
  props: {
    certifications: Array
  }
}
</script>