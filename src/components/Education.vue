<template lang="pug">
  .text-center.mb-3
    hr.m-0.mb-2
    h2.font-weight-bold.text-uppercase.m-0 {{name}}
    hr.mt-0
    div(v-for="education in educations")
      .font-weight-bold {{education.degree}} - {{education.university}}
      .font-weight-bold {{education.course}}
      .d-block {{education.from}} - {{education.to}}
</template>

<script>
  import moment from 'moment';

  export default {
    data() {
      return {
        name: "Educação",
        educations: [
          {
            degree: "Bacharelado",
            university: "CEFET/RJ",
            course: "Ciência da Computação",
            from: moment(new Date(2012, 5)).format("MMMM/YYYY"),
            to: moment(new Date(2018, 11)).format("MMMM/YYYY")
          }
        ]
      };
    }
  };
</script>