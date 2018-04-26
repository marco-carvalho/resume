<template lang="pug">
  #app.mx-auto.col-11
    Header
    Resume
    Experiences
    .row
      .col-6
        Education
      .col-6
        Languages
    Skills
    hr
    Footer
</template>

<script>
import Education from "@/components/Education";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Languages from "@/components/Languages";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";

export default {
  components: {
    Education,
    Experiences,
    Footer,
    Header,
    Languages,
    Resume,
    Skills
  }
};
</script>