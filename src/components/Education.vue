<template lang="pug">
  div
    h2 Educação
    hr
    div(v-for="education in educations")
      p.mb-0
        strong {{education.university}} - {{education.degree}}
      p.mb-0
        strong {{education.course}}
      p.mb-3
        span {{education.from}}
        span.mx-1 -
        span {{education.to}}
</template>

<script>
  import moment from 'moment';

export default {
  data() {
    return {
      educations: [
        {
          university: "CEFET/RJ",
          degree: "Bacharelado",
          course: "Ciência da Computação",
          from: new Date(2012, 5),
          to: new Date(2018, 11)
        }
      ]
    };
  }
};
</script>