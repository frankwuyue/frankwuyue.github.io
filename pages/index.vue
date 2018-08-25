<template>
  <div>
    <fr-header></fr-header>
    <fr-content></fr-content>
  </div>
</template>

<script>
import FrHeader from "../components/FrHeader";
import FrContent from "../components/FrContent";
export default {
  name: "app",
  components: { FrHeader, FrContent }
};
</script>

<style>

</style>