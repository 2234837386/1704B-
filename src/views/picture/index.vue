<template>
  <div class="picture_page">
    <div class="p_top">
      <!-- @click="carcolor"  {{color?color:'颜色'}} -->
      <li @click="colorBtn">
          颜色
        <i class="iconfont icon-angle-down"></i>
      </li>
      <!--  @click="carstyle"  {{cars?cars:'车款'}}-->
      <li>
          车款
        <i class="iconfont icon-angle-down"></i>
      </li>
    </div>
    <div class="boxList">
          <Serviceimg v-for="(item,index) in imagesDate" :key="index" :item='item'/>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex' 
import Serviceimg from '../../components/Serviceimg'
export default {
  props: {},
  components: {
    Serviceimg
  },
  data() {
    return {
      showColor:false
    };
  },
  created() {
    this.carImage(this.$route.query.SerialID)
  },
  computed: {
    ...mapState({
       imagesDate:state=>state.carimage. imagesData,
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
    },
    colorBtn(){
      this.$router.push({
        path:'/color',
        query:{
          SerialID:this.$route.query.SerialID
        }
      })
    }
  },

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
  overflow-y: scroll;
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
   flex: 1;

  }
}
</style>