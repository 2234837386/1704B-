<template>
  <div id="up" :class="{active:ismask}">
        <div class="auto">
            <div class="header">自动定位</div>
            <div class="bei">北京</div>
            <div class="heade">省份</div>
            <div class="con" v-for="(item,index) in cityData" :key="index">{{item.CityName}}</div>
            <!-- <Left :isShow="isShow" /> -->
        </div>
        
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {
    ismask: {
      type: Boolean
    }
  },
  computed: {
      ...mapState({
          cityData:state=>state.home.cartList
      })
  },
  methods:{
       ...mapActions({
           getMasterList:'home/getMasterList'
       })
  },
  mounted () {
      this.getMasterList()
  }
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
  overflow: hidden;
  overflow-y: auto;
  transform: translateY(100%);
  transition: all 1s ease;
  .auto {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
  &.active {
    transform: translateY(0%);
  }
}
#up .header {
  width: 100%;
  height: 20px;
  background: #eeeeee;
  color: #666;
  font-size: 12px;
}
.bei {
  width: 100%;
  height: 45px;
  line-height: 45px;
  padding: 0 20px;
}
.heade {
  width: 100%;
  height: 20px;
  background: #eeeeee;
  font-size: 14px;
}
.con {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #eeeeee;
  line-height: 45px;
  display: flex;
  position: relative;
  flex-shrink: 0;
}
.con .icon-angle-right {
  position: absolute;
  right: 5px;
}
</style>