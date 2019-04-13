<template lang="pug">
div
  .bg-dark.text-uppercase.text-center.text-white.rounded
    h2.font-weight-bold.px-1 Histórico Profissional
  .mb-1(v-for='experience in experiences')
    h4.font-weight-bold.m-0 {{experience.position}}
    h5.m-0 {{experience.company}}
    .list-inline.text-secondary
      .list-inline-item {{experience.from.format("MMMM/YYYY").toLowerCase()}}
      .list-inline-item -
      .list-inline-item {{experience.to ? experience.to.format("MMMM/YYYY").toLowerCase() : 'atualmente'}}
      .list-inline-item •
      .list-inline-item {{dateDiff(experience.from, experience.to)}} mes(es)
    .mb-1 {{experience.description}}
    .list-inline-item.mb-1(v-for='tecnology in experience.tecnologies')
      .list-inline-item.bg-dark.px-1.rounded.text-white {{tecnology.name}}
      .list-inline-item.bg-secondary.px-1.rounded.text-white(v-for='subtecnology in tecnology.subtecnologies') {{subtecnology}}
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
