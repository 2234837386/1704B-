<template>
  <div class="picture_page">
    <div class="p_top">
      <li @click="carcolor">
        {{color?color:'颜色'}}
        <i class="iconfont icon-angle-down"></i>
      </li>
      <li @click="carstyle">
        {{cars?cars:'车款'}}
        <i class="iconfont icon-angle-down"></i>
      </li>
    </div>
    <div class="boxList">
      <div class="item" v-for="(item,index) in list" :key="index">
        <div
          class="main"
          v-for="(k,i) in item.List"
          :key="i"
          v-show="i===0"
          :data-id="i"
          v-lazy:background-image="k.Url"
        >
         <div class="mask">
            <p>{{item.Name}}</p>
          <p>{{item.Count}}张></p>
         </div>
        </div>
        <div
          class="main"
          v-for="(k,i) in item.List"
          :key="i"
          v-show="i!==0"
          v-lazy:background-image="k.Url"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      id: "",
      color: "颜色",
      cars: "车款",
      list: [],
      imgs: []
    };
  },
  computed: {},
  created() {
    this.color = this.$route.query.colorName;
    this.cars = this.$route.query.carName;
    console.log(this.$route.query.colorName);
    this.id = this.$route.query.SerialID;
    this.$http
      .get(
        `http://baojia.chelun.com/v2-car-getImageList.html?SerialID=${this.$route.query.SerialID}`
      )
      .then(res => {
        this.list = res.data.data;
        this.imgs = this.list.List;
        console.log(this.list);
      });
  },
  methods: {
    carcolor() {
      this.$router.push({
        path: "/clors",
        query: {
          SerialID: this.id
        }
      });
    },
    carstyle() {
      this.$router.push({
        path: "/carstyle",
        query: {
          SerialID: this.id
        }
      });
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
        .mask{
          width: 100%;
          height: 7.6rem;
          display: flex;
          flex-direction: column;
          background: rgba(0,0,0,.5);
          padding: 25px;
          p {
          width: 100%;         
          color:#fff;
          display: flex;
          justify-content: center;
          align-items: center;
          font-style: normal;
          // font-weight: 1px;
        }
        p:first-child{
          margin-bottom: 10px;
        }
        }
        
      }
    }
  }
}
</style>