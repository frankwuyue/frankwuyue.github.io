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
        <fr-post></fr-post>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import FrHeader from "../../components/FrHeader.vue";
import FrSideBar from "../../components/FrSideBar.vue";
import FrPost from "../../components/FrPost.vue";
import { Component, Prop, Vue } from "nuxt-property-decorator";
@Component({
  components: { FrHeader, FrPost, FrSideBar }
})
export default class About extends Vue {
  data() {
    return {
      name: "about",
      head: "About Me",
      subHead: "Frontend Engineer",
      backGroundImg: "about-bg"
    };
  }
};
</script>