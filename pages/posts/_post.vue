<template>
  <div class="col-lg-8 col-md-10 mx-auto">
    <div v-html="html"></div>
  </div>
</template>


<script lang='ts'>
import { Component, Prop, Vue } from "nuxt-property-decorator";
const markdown = require("static/markdown/posts/test.md");
@Component
export default class Post extends Vue {
  get html() {
    return markdown;
  }
}
</script>

<style lang="sass" scoped>

</style>
