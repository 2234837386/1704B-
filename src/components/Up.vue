<template>
  <div id="up" :class="{active:ismask}">
      <div class="header">自动定位</div>
      <div class="bei">北京</div>
      <div class="heade">省份</div>

      <div  @click="show" v-for="(item,index) in cityList" :key="index" class="con" :data-id="item.CityID">{{item.CityName}}
         <span class="iconfont icon-angle-right"></span>
      </div>
   <Left :isShow="isShow"/>
  </div>
</template>

<script>
import Left from './Left'
export default {
  components: {
    Left
  },

     props:{ismask:{
         type:Boolean
     }},
     created () {
        this.$http.get('https://baojia.chelun.com/v1-city-alllist.html').then(res=>{
        
            console.log(res.data.data);
            this.cityList=res.data.data
        })
     },
      methods: {

        show(){
           this.isShow=!this.isShow
        }
    },
     data(){
       return {
           cityList:[],
           isShow:false,
       }
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
  transform: translateY(100%);
  transition: all 1s ease;
  &.active {
    transform: translateY(0%);
  }
}
#up .header{
   width: 100%;
   height: 20px;
   background: #eeeeee;
   color: #666;
   font-size: 12px;
}
.bei{
   width: 100%;
   height: 45px;
   line-height: 45px;
   padding: 0 20px
}
.heade{
width: 100%;
   height: 20px;
   background: #eeeeee;
   font-size: 14px;
}
.con{
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #eeeeee;
  line-height: 45px;
  display: flex;
  position: relative;
}
.con .icon-angle-right{
  position: absolute;
  right: 5px;
}
</style>