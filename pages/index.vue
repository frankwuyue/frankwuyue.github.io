<template>
  <div>
    <div v-html="html"></div>
  </div>
</template>

<script>
const markdown = require('../static/markdown/test.md');

export default class extends Vue {
  get html() {
    return markdown;
  }
}
</script>