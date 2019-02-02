<template>
  <div class="post-preview">
    <h2 class="post-title">
      <nuxt-link :to="{ name: 'slug', params: { slug: entry.name }}">{{nameNoExtension}}</nuxt-link>
    </h2>
    <p class="post-meta"
      v-if="entry.server_modified">Posted on {{timeModified}}
    </p>
  </div>
</template>


<script lang="ts">
import * as moment from 'moment';
import _ from 'lodash';
import { Component, Prop, Vue } from 'nuxt-property-decorator';
@Component
export default class FrContent extends Vue {
  @Prop() entry;
  name: "fr-content";

  get nameNoExtension () {
    return _.split(this.entry.name, '.', 1).join('');
  }
  get timeModified () {
    return moment(this.entry.server_modified).format('YYYY-MM-DD HH:mm');
  }
}
</script>

<style lang="sass" scoped>

</style>
