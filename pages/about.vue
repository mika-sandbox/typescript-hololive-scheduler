<template lang="pug">
  b-container
    section
      h2 このサイトについて
      p
        | このサイトは、ホロライブに所属しているバーチャルユーチューバー7人の生放送スケジュールを見ることが出来るサイトです。
        br
        | 1時間に1度、 Twitter のツイートやプロフィールなどから予定を取得しています。
        br
        | スケジュールページの放送がある部分をクリックすることで、放送詳細と放送先へ移動することが出来ます。
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";

@Component({
  head() {
    return {
      title: "このサイトについて - ホロジュール"
    };
  }
})
export default class extends Vue {}
</script>
