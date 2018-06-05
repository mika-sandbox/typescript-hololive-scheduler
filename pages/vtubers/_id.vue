<template lang="pug">
  b-container
    template(v-if="vtuber != null")
      b-row.eq-height
        b-col(md="6" sm="12")
          .vh-center
            div
              circle-image(:src="vtuber.icon")
              .center
                h3 {{vtuber.name}}
        b-col(md="6" sm="12")
          h3 {{vtuber.youtube.name}}
          p
            a(:href="vtuber.youtube.url" target="_blank") YouTube チャンネル
          b-embed(type="iframe" aspect="16by9" :src="`https://www.youtube.com/embed/${vtuber.youtube.latest}?rel=0`" allowfullscreen)

      hr

      b-card.section(title="基本情報" border-variant="light")
        b-row.eq-height
          b-col(lg="4" md="6" sm="12")
            div
              i.fab.fa-twitter.fa-lg
              a(:href="`https://twitter.com/${vtuber.twitter}`" target="_blank")
                | @{{vtuber.twitter}}
          b-col(lg="4" md="6" sm="12")
            div
              i.fa.fa-hashtag.fa-lg
              span.hashtag(v-for="(tag, idx) in vtuber.hashtags" key="idx")
                a(:href="`https://twitter.com/hashtag/${tag.name}`" target="_blank")
                  | {{`#${tag.name}`}}
          b-col(lg="4" md="6" sm="12")
            div
              i.fa.fa-paint-brush.fa-lg
              template(v-if="vtuber.illustrator != ''")
                a(:href="`https://twitter.com/${vtuber.illustrator}`" target="_blank")
                  | @{{vtuber.illustrator}}
              template(v-else)
                | Unknown
      b-card.section(title="配信スケジュール" border-variant="light")
    template(v-else)
      h2 Not Found
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";
import { Getter } from "vuex-class";

import { IVtuber } from "models/Vtuber";
import CircleImage from "../../components/CircleImage.vue";

@Component({
  components: {
    "circle-image": CircleImage
  }
})
export default class extends Vue {
  public vtuber: IVtuber | null = null;

  @Getter("getVtuber") public getVtuber: (id: string) => IVtuber;

  public mounted(this: any): void {
    this.vtuber = this.getVtuber(this.$route.params.id);
  }
}
</script>

<style lang="scss" scoped>
.eq-height {
  [class^="col"]:first-of-type {
    div {
      flex-grow: 1;
    }
    display: flex;
  }
}

.vh-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.center {
  padding-top: 20px;
  text-align: center;
}

i {
  margin-right: 5px;
}

.hashtag + .hashtag::before {
  content: ", ";
}

.section {
  margin: 10px 0;
}
</style>