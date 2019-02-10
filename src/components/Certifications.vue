<template lang="pug">
.mb-3
  .bg-dark.text-uppercase.text-center.text-white.rounded
    h2.font-weight-bold.px-1 {{name}}
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
  data () {
    return {
      name: "Certificados",
      certifications: [
        {
          title: "DevOps Essentials Professional",
          company: "CertiProf",
          date: this.$moment("20190101"),
          url: "bit.ly/2HnzVtH"
        },
        {
          title: "Scrum Foundation Professional",
          company: "CertiProf",
          date: this.$moment("20190101"),
          url: "bit.ly/2T2kF6Y"
        },
      ]
    }
  }
}
</script>