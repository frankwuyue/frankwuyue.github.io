<template>
<div>
  <fr-header v-bind:head="head" v-bind:subHead="subHead" v-bind:backGroundImg="backGroundImg">
  </fr-header>
  <div class="container">
    <div class="row">
      <fr-side-bar></fr-side-bar>
      <div class="col-lg-8 col-md-10 mx-auto">
        <div v-html="html"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import FrHeader from '../../components/FrHeader.vue';
import FrSideBar from '../../components/FrSideBar.vue';
import Router from 'vue-router';
Vue.use(Router);

@Component({
  components: { FrHeader, FrSideBar }
})
export default class Post extends Vue {
  data () {
    return {
      name: 'post',
      head: 'Frank Blog',
      subHead: 'A Blog About Tech',
      backGroundImg: 'home-bg'
    };
  }
  get html () {
    return require(`static/markdown/posts/${this.$route.params.slug}`);
  }
}
</script>

<style lang="sass" scoped>

</style>
