<template lang="pug">
div
  .bg-dark.text-uppercase.text-center.text-white.rounded
    h2.font-weight-bold.px-1 Educação
  div(v-for="education in educations")
    .font-weight-bold {{education.degree}} - {{education.university}}
    .font-weight-bold {{education.course}}
    .d-block {{education.from}} - {{education.to}}
</template>

<script>
export default {
  props: {
    educations: Array
  }
}
</script>