<template>
  <div class="color_page">
    <div class="cbox">全部颜色</div>
    <div class="c_main">
      <!-- <li v-for="(item,index,a) of allColor " :key="a">
                <div class="year">{{index}}</div>
                {{index}} 
      </li>-->
      <div class="year">
        <span
          v-for="(item,index,k) of allColor"
          :key="k"
          @click="hanc(item,k,index)"
          :class="{active: cIndex==k}"
        >{{index}}</span>
      </div>
      <div class="colors">
        <li class="box" v-for="(ite,int) in  mapList" :key="int" @click="tpic(ite)">
          <i class="cbox" :style="{'background':ite.Value}"></i>
          <span>{{ite.Name}}</span>
        </li>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      colorData: [],
      // list:
      cIndex: 0,
      arr: []
    };
  },
  computed: {
    ...mapState({
      allColor: state => state.carcolor.colorList
    }),
    mapList() {
      let arr = this.colorData.length
        ? this.colorData
        : this.allColor[Object.keys(this.allColor)[0]];

      return arr;
    }
    // this.colorData=
  },
  methods: {
    ...mapActions({
      colorList: "carcolor/getcolorList"
    }),
    hanc(item, k, year) {
      this.cIndex = k;
      this.colorData = item;
    },
    tpic(ite){
      this.$router.push({
        
          path:'/picture',
          query:{
            SerialID: this.$route.query.SerialID,
            colorId:ite.ColorId

        }
      })
    }
  },
  created() {},
  mounted() {
    this.colorList(this.$route.query.SerialID);
  }
};
</script>
<style lang="scss" scoped>
.color_page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #eee;
  .cbox {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #09f;
    background: #fff;
  }
  .c_main {
    flex: 1;
    display: flex;
    flex-direction: column;
    // background: #faa;
    .year {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 5px 0;
      background: #fff;
      flex-shrink: 0;
    }
    .colors {
      display: flex;
      flex-wrap: wrap;
      .box {
        width: 171px;
        height: 50px;
        border: 1px solid #09f;
        margin: 8px;
        display: flex;
        align-items: center;
        .cbox {
          width: 25px;
          height: 25px;
          margin: 0 10px;
        }
      }
    }
  }
}
.active {
  color: #09f;
}
</style>