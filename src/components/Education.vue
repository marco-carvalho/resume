<template lang="pug">
  div.text-center
    h2.font-weight-bold.text-uppercase.m-0 {{name}}
    hr.mt-0
    div(v-for="education in educations")
      div
        strong {{education.degree}}
        strong.mx-1 -
        strong {{education.university}}
      div
        strong {{education.course}}
      div
        span {{education.from}}
        span.mx-1 -
        span {{education.to}}
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