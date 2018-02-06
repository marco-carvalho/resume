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
  import Education from "./components/Education"
  import Experiences from "./components/Experiences"
  import Footer from "./components/Footer"
  import Header from "./components/Header"
  import Languages from "./components/Languages"
  import Resume from "./components/Resume"
  import Skills from "./components/Skills"

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
