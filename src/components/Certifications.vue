<template lang="pug">
div
  .bg-dark.text-uppercase.text-center.text-white.rounded
    h2.font-weight-bold.px-1 Certificados
  .mb-3(v-for="certification in certifications")
    h4.font-weight-bold.m-0 {{certification.title}}
    h5.m-0 {{certification.company}}
    .list-inline
      .list-inline-item
        .text-secondary {{certification.date.format("MMMM/YYYY")}}
      .list-inline-item
        a(:href="certification.url") [{{certification.url}}]
</template>

<script>
export default {
  props: {
    certifications: Array
  }
}
</script>