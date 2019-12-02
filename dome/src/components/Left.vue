<template>
     <div id="mask" :class="{active:isShow}">
         
     </div>
</template>

<script>
export default {
  props:{isShow:{
         type:Boolean
     }},
     
    
   
}
</script>

<style lang="scss" scoped>
#mask {
  width: 80%;
  height: 100%;
  background: #ffffff;
  position: absolute;
  right: 0;
  bottom: 0;
  overflow: hidden;
  transform: translateX(100%);
  transition: all 1s ease;
  &.active {
    transform: translateX(0%);
  }
}
</style>