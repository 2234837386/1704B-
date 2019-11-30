<template>
  <div id="mask" :class="{active:isMask}"></div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {
    isMask: {
      type: Boolean
    },
    ind: {
      type: Number
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["nav"])
  },
  methods: {
    ...mapActions(["loadNav"])
  },
  created() {
    // this.loadNav(this.ind);
    console.log(this.ind);
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
#mask {
  width: 80%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  background: #fff;
  flex-shrink: 0;
  z-index: 2;
  transform: translatex(100%);
  transition: all 0.5s ease;
  &.active {
    transform: translatex(0%);
  }
}
</style>