<template lang="pug">
.text-center
  .text-4xl.font-bold.uppercase.leading-tight.mb-1 {{name}}
  .inline-block.mx-3
    .fa.fa-envelope.mr-1
    a.inline.text-blue-700.underline(:href="'mailto:' + mail") {{mail}}
  .inline-block.mx-3
    .fa.fa-phone.mr-1
    .inline +{{phone.CCC}} {{phone.cityCode}} {{phone.number}}
  .inline-block.mx-3
    .fab.fa-github.mr-1
    a.inline.text-blue-700.underline(:href="'https://github.com/' + github") {{github}}
  .inline-block.mx-3
    .fab.fa-linkedin.mr-1
    a.inline.text-blue-700.underline(:href="'https://linkedin.com/in/' + linkedin") {{linkedin}}
</template>

<script>
export default {
  props: {
    name: String,
    mail: String,
    phone: Object,
    github: String,
    linkedin: String,
  }
}
</script>