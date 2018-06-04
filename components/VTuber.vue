<template lang="pug">
  .text-center
    p {{vtuber}}
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";
import { Prop } from "vue-property-decorator";

import CircleImage from "./CircleImage.vue";

@Component({
  components: {
    "circle-image": CircleImage
  },
  head() {
    return {
      title: "VTuber 一覧 - ホロジュール"
    };
  }
})
export default class extends Vue {
  @Prop() public vtuver;
}
</script>