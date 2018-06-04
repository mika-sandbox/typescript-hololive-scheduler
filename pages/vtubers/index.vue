<template lang="pug">
  b-container
    h2 Virtual YouTuber 一覧
    .vtubers
      div(v-for="vtuber in vtubers" :key="vtuber.id")
        router-link(:to="`/vtubers/${vtuber.twitter}`")
          vtuber-profile(:vtuber="vtuber")
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";
import { Getter } from "vuex-class";

import { IVtuber } from "models/Vtuber";
import VTuberProfile from "../../components/VTuberProfile.vue";

@Component({
  components: {
    "vtuber-profile": VTuberProfile
  },
  head() {
    return {
      title: "Virtual YouTuber 一覧 - ホロジュール"
    };
  }
})
export default class extends Vue {
  @Getter("getVtubers") public vtubers: IVtuber[];
}
</script>

<style lang="scss" scoped>
.vtubers {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  div {
    padding: 5px 15px;
    flex: 1;
  }
}
</style>
