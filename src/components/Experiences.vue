<template lang="pug">
div
  .bg-black.uppercase.text-center.text-white.rounded.mb-3.text-2xl
    .font-bold.px-1 Histórico Profissional
  .mb-1(v-for='experience in experiences')
    .text-xl.font-bold {{experience.position}}
    .text-lg {{experience.company}}
    .text-gray-800.mb-1
      .inline.mr-1 {{experience.from.format("MMMM/YYYY").toLowerCase()}}
      .inline.mr-1 -
      .inline.mr-1 {{experience.to ? experience.to.format("MMMM/YYYY").toLowerCase() : 'atualmente'}}
      .inline.mr-1 •
      .inline.mr-1 {{dateDiff(experience.from, experience.to)}} mes(es)
    .mb-1 {{experience.description}}
    .inline-block(v-for='tecnology in experience.tecnologies')
      .inline-block
        .bg-gray-800.rounded.text-white.mb-1.px-1.mr-1 {{tecnology.name}}
      .inline-block(v-for='subtecnology in tecnology.subtecnologies')
        .bg-gray-600.rounded.text-white.mb-1.px-1.mr-1 {{subtecnology}}
</template>

<script>
  export default {
    props: {
      experiences: Array
    },
    methods: {
      dateDiff(date1, date2) {
        const from = this.$moment(date1);
        const to = this.$moment(date2 || new Date());
        const diff = to.diff(from);
        const duration = this.$moment.duration(diff);
        const durationAsMonths = duration.asMonths();
        return Math.ceil(durationAsMonths);
      }
    }
  }
</script>
