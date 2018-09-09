<template>
  <div class="post-preview">
    <a href="post.html">
      <h2 class="post-title">
      {{entry.name}}
      </h2>
    </a>
    <p class="post-meta"
      v-if="entry.server_modified">Posted on {{timeModified}}
    </p>
  </div>
</template>


<script lang="ts">
import * as moment from 'moment';
import { Component, Prop, Vue } from "nuxt-property-decorator";
@Component
export default class FrContent extends Vue {
  @Prop() entry
  name: 'fr-content'

  get timeModified() {
    return moment(this.entry.server_modified).format('YYYY-MM-DD HH:mm');
  }
}
</script>

<style lang="sass" scoped>

</style>
