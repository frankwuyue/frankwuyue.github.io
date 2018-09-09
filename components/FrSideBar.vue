<template>
  <b-nav vertical class="col-md-4 blog-sidebar col-lg-4">
    <b-nav-item class="p-3">
      <h4 class="font-italic">About</h4>
      <nuxt-link to="/about">
        <span class="mb-0">Frank Wu</span>
      </nuxt-link>
    </b-nav-item>

    <b-nav-item class="p-3">
      <h4 class="font-italic">Archives</h4>
      <ol class="list-unstyled mb-0">
        <li><a href="#">March 2014</a></li>
        <li><a href="#">February 2014</a></li>
        <li><a href="#">January 2014</a></li>
        <li><a href="#">December 2013</a></li>
      </ol>
    </b-nav-item>

    <b-nav-item class="p-3">
      <h4 class="font-italic">Elsewhere</h4>
      <ol class="list-unstyled">
        <li><a href="#">GitHub</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Facebook</a></li>
      </ol>
    </b-nav-item>
  </b-nav>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
@Component
export default class FrSideBar extends Vue {
  name: 'fr-side-bar'
}
</script>

<style lang="sass" scoped>

</style>
