<template>
  <div id="up" :class="{active:ismask}"></div>
</template>

<script>
export default {
     props:{ismask:{
         type:Boolean
     }}
};
</script>

<style lang="scss" scoped>
#up {
  width: 100%;
  height: 100%;
  background: #ffffff;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translateY(100%);
  transition: all 1s ease;
  &.active {
    transform: translateY(0%);
  }
}
</style>