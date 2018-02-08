<template lang="pug">
  #app.mx-auto.col-7
    resume-header
    resume-resume
    resume-experiences
    .row
      .col-6
        resume-education
      .col-6
        resume-languages
    resume-skills
    resume-footer
</template>

<script>
  import Education from "./views/Education"
  import Experiences from "./views/Experiences"
  import Footer from "./views/Footer"
  import Header from "./views/Header"
  import Languages from "./views/Languages"
  import Resume from "./views/Resume"
  import Skills from "./views/Skills"

  export default {
    components: {
      'resume-education': Education,
      'resume-experiences': Experiences,
      'resume-footer': Footer,
      'resume-header': Header,
      'resume-languages': Languages,
      'resume-resume': Resume,
      'resume-skills': Skills
    }
  }
</script>
