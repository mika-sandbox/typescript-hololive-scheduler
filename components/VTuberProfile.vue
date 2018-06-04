<template lang="pug">
  .text-center
    circle-image(:src="vtuber.icon")
    .profile-texts
      h4 {{vtuber.name}}
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";
import { Prop } from "vue-property-decorator";

import { IVtuber } from "models/Vtuber";
import CircleImage from "./CircleImage.vue";

@Component({
  components: {
    "circle-image": CircleImage
  }
})
export default class extends Vue {
  @Prop() public vtuber: IVtuber;
}
</script>

<style lang="scss" scoped>
.profile-texts {
  margin-top: 10px;
}
</style>
