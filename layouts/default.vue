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
  margin-top: 80px;
  margin-bottom: 25px;
  position: relative;
  min-height: calc(100vh - 105px);
  display: flex;
  flex-direction: column;
}
</style>