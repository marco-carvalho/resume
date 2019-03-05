<template lang="pug">
#app.container
  Header.text-center.mb-3
  .row
    .col-md-6
      Experiences
    .col-md-6
      Resume
      .row
        .col-md-6
          Education.text-center.mb-3
        .col-md-6
          Languages.text-center.mb-3
      Skills.mb-3
      Certifications
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
import Certifications from "@/components/Certifications";

export default {
  components: {
    Education,
    Experiences,
    Footer,
    Header,
    Languages,
    Resume,
    Skills,
    Certifications,
  }
};
</script>