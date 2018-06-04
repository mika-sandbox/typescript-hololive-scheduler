<template lang="pug">
  .rounded
    img(:src="src")
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class extends Vue {
  @Prop() public src;
}
</script>


<style lang="scss" scoped>
.rounded {
  border-radius: 100% !important;
  border: solid #cccccc 1px;
  box-shadow: 1.5px 1.5px 3px #aaaaaa;
  margin: 0 auto;
  height: 194px;
  width: 194px;
  img {
    border-radius: 100%;
    border: solid white 2.5px;
    height: 192px;
    width: 192px;
  }
}
</style>
