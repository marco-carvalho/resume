<template lang="pug">
.text-center
  .text-4xl.font-bold.uppercase.leading-tight.mb-1 {{name}}
  .flex.flex-wrap
    .mb-2.w-full(class="md:w-1/3")
      .fa.fa-envelope.mr-1
      a.inline.text-blue-700.underline(:href="'mailto:' + mail") {{mail}}
    .mb-2.w-full(class="md:w-1/3")
      .fab.fa-github.mr-1
      a.inline.text-blue-700.underline(:href="'https://github.com/' + github") {{github}}
    .mb-2.w-full(class="md:w-1/3")
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