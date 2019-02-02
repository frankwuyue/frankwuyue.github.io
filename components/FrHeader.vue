<template>
<div>
  <b-nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <nuxt-link to="/" class="navbar-brand">Frank's Blog</nuxt-link>
      <b-button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fa fa-bars"></i>
      </b-button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/about">About</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </b-nav>

  <header class="masthead" :style="{ backgroundImage: 'url(' + backGroundImgPath + ')'}">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1>

              {{head}}</h1>
            <span class="subheading">{{subHead}}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
@Component
export default class FrHeader extends Vue {
  @Prop() head: string;

  @Prop() subHead: string;

  @Prop({
    default: 'post-bg'
  })
  backGroundImg: string;

  get backGroundImgPath () {
    return require('~/assets/img/' + this.backGroundImg + '.jpg');
  }
}
</script>

<style lang="sass" scoped>

</style>
