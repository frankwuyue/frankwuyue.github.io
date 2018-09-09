<template>
<div>
  <fr-header v-bind:head="head" v-bind:subHead="subHead" v-bind:backGroundImg="backGroundImg">
  </fr-header>
  <div class="container">
    <div class="row">
      <fr-side-bar></fr-side-bar>
      <div class="col-lg-8 col-md-10 mx-auto">
        <fr-content
          v-for="entry in structure"
          v-bind:key="entry.id"
          v-bind:entry="entry">
        </fr-content>
        <!-- Pager -->
        <div class="clearfix">
          <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import FrHeader from "../components/FrHeader.vue";
import FrSideBar from "../components/FrSideBar.vue";
import FrContent from "../components/FrContent.vue";
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator";
import { State } from "vuex-class"
@Component({
  components: {
    FrHeader,
    FrContent,
    FrSideBar
  }
})
export default class Home extends Vue {
  @State structure
  data() {
    return {
      name: "home",
      head: "Frank Blog",
      subHead: "A Blog About Tech",
      backGroundImg: "home-bg",
    };
  }

}
</script>

<style>

</style>
