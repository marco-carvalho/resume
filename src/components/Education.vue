<template lang="pug">
div
  .text-center
    .bg-black.uppercase.text-center.text-white.rounded.mb-2.text-2xl
      .font-bold.p-1 Educação
    div(v-for="education in educations")
      .font-bold {{education.degree}} - {{education.university}}
      .font-bold {{education.course}}
      .d-block {{education.from}} - {{education.to}}
</template>

<script>
export default {
  props: {
    educations: Array
  }
}
</script>