<template lang="pug">
div
  .text-center
    .bg-black.uppercase.text-center.text-white.rounded.mb-3.text-2xl
      .font-bold.px-1 Educação
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