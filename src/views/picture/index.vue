<template>
  <div class="picture_page">
    <div class="p_top">
      <!-- @click="carcolor"  {{color?color:'颜色'}} -->
      <li>
          颜色
        <i class="iconfont icon-angle-down"></i>
      </li>
      <!--  @click="carstyle"  {{cars?cars:'车款'}}-->
      <li>
          车款
        <i class="iconfont icon-angle-down"></i>
      </li>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  props: {},
  components: {},
  data() {
    return {
      showColor:false
    };
  },
  computed: {
    ...mapState({
       imagesDate:state=>state.carimage. imagesDate,
       EnlargentImageflag:state=>state.carimage.EnlargentImageflag,
       colorId:state=>state.carimage.colorId,
       carId:state=>state.carimage.carId
    })
  },
  methods: {
    ...mapActions({
      carImage:'carimage/carImage'
    }),
    setColor(){
      this.showColor=true;
    },
    setType(){
      this.$router.push("/type?serialId"+this.serialId)
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.picture_page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #eee;
  .p_top {
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    flex-shrink: 0;
    li {
      flex: 1;
      text-align: center;
      background: #fff;
    }
    li:nth-child(1) {
      border-right: 1px solid #ccc;
    }
  }
  .boxList {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    background: #fff;
    .item {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 0.2rem;
      box-sizing: border-box;
      .main {
        width: calc(100% / 3);
        height: 7.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.08rem;
        box-sizing: border-box;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        flex-direction: column;
        .mask {
          width: 100%;
          height: 7.6rem;
          display: flex;
          flex-direction: column;
          background: rgba(0, 0, 0, 0.5);
          padding: 25px;
          p {
            width: 100%;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            font-style: normal;
            // font-weight: 1px;
          }
          p:first-child {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>