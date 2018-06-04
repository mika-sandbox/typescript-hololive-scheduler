<template lang='pug'>
  .root
    global-header
    nuxt
    global-footer
</template>

<script>
import GlobalHeader from "../components/GlobalHeader.vue";
import GlobalFooter from "../components/GlobalFooter.vue";
export default {
  name: "default",
  components: {
    "global-header": GlobalHeader,
    "global-footer": GlobalFooter
  }
};
</script>

<style>
.root {
  padding-top: 65px;
  position: relative;
  margin-bottom: 25px;
  min-height: calc(100vh - 25px);
}
section {
  padding: 10px 0 20px 0;
}
</style>