<template>
  <div id="msk" :class="{active:isUp}">
    eaaaaaaaaaaaaaaaaaaaaaaa
  </div>
</template>

<script>
export default {
  props: {
    isUp: {
      type: Boolean
    }
  },
  data() {
    return {
      carlist: []
    };
  },
};
</script>

<style lang="scss" scoped>
#msk {
  width: 100%;
  height: 100%;
  inline-size: 9999;
  background: #ffffff;
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  transform: translateY(100%);
  transition: all 1s ease;
  &.active {
    transform: translateY(0%);
  }
}

</style>