<template>
     <div id='msk' :class="{active:isZhan}">
         
         <div class="head">2017</div>
         <div>3.0L/324W涡轮增压</div>
         
     </div>
</template>

<script>
export default {
     props:{isZhan:{
         type:Boolean
     }},
     data () {
         return {
             CarList:[]
         }
     }
}
</script>

<style lang="scss" scoped>
#msk{
  width: 100%;
  height: 100%;
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