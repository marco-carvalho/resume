<template lang="pug">
div
  .bg-black.uppercase.text-center.text-white.rounded.mb-2.text-2xl
    .font-bold.p-1 Habilidades
  .text-center.mb-1(v-for="skill in skills")
    .inline-block(v-for="tecnology in skill.tecnologies")
      .inline-block
        .bg-gray-800.rounded.text-white.mb-1.p-1.mr-1 {{tecnology.name}}
      .inline-block(v-for="subtecnology in tecnology.subtecnologies")
        .bg-gray-600.rounded.text-white.mb-1.p-1.mr-1 {{subtecnology}}
</template>

<script>
export default {
  props: {
    skills: Array
  }
}
</script>