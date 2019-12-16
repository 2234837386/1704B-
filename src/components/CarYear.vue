<template>
  <div :class="{CarYear:true,active:isYear}"></div>
</template>
<script>
export default {
  props: {
    isYear: {
      type: Boolean
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.CarYear {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
  transform: translateY(100%);
  background: #fff;
  z-index: 100;
  &.active {
    transform: translateY(0%);
  }
}
</style>