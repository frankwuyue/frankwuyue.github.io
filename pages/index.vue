<template>
  <div>
    <fr-header
      v-bind:head="head"
      v-bind:subHead="subHead"
      v-bind:backGroundImg="backGroundImg">
    </fr-header>
    <div class="container">
      <div class="row">
        <fr-side-bar></fr-side-bar>
        <fr-content></fr-content>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import FrHeader from "../components/FrHeader.vue";
import FrSideBar from "../components/FrSideBar.vue";
import FrContent from "../components/FrContent.vue";
import { Component, Prop, Vue } from "nuxt-property-decorator";
@Component({
  components: { FrHeader, FrContent, FrSideBar }
})
export default class Home extends Vue {
  data() {
    return {
      name: "home",
      head: "Frank Blog",
      subHead: "A Blog About Tech",
      backGroundImg: "home-bg"
    };
  }
}
</script>

<style>
</style>