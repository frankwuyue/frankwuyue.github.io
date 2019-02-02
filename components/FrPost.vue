<template>
  <div class="col-lg-8 col-md-10 mx-auto">
    <div v-html="html"></div>
  </div>
</template>


<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
const markdown = require('~/content/posts/about.md');
@Component
export default class FrPost extends Vue {
  name: "fr-post";
  get html () {
    return markdown;
  }
}
</script>

<style lang="sass" scoped>

</style>
