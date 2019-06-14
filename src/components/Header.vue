<template lang="pug">
div
  .text-center
    .text-5xl.font-bold.uppercase.leading-tight {{name}}
    .inline-block.mr-3
      .fa.fa-envelope.mr-1
      a.inline.text-blue-700.underline(:href="'mailto:' + mail") {{mail}}
    .inline-block.mr-3
      .fa.fa-phone.mr-1
      .inline +{{phone.CCC}} {{phone.cityCode}} {{phone.number}}
    .inline-block.mr-3
      .fab.fa-github.mr-1
      a.inline.text-blue-700.underline(:href="'https://github.com/' + github") {{github}}
    .inline-block.mr-3
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