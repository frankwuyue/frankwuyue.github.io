<template>
  <div>
    <div v-html="html"></div>
  </div>
</template>

<script>
const markdown = require("../../static/markdown/test.md");

export default {
  computed: {
    html() {
      return markdown;
    }
  }
};
</script>