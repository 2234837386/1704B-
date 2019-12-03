<template>
  <div class="carcont_page">
    <div class="con_top">
      <li>
        {{color}}
        <i class="iconfont icon-angle-down"></i>
      </li>
      <li>
        {{cars}}
        <i class="iconfont icon-angle-down"></i>
      </li>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      color: "全部颜色",
      cars: "全部车型",
      caryear: ""
    };
  },
  computed: {},
  methods: {},
  created() {
    // this.cars=this.$route.query.carYear;this.$route.query.carName
    // this.caryear=this.$route.query.carYear
    //   this.cars=this.$route.query.carName
    //   this.color=this.$route.query.colorName
    //   localStorage.setItem("color",this.color)
    //   localStorage.setItem("carname",this.cars)
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.carcont_page {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #eee;
  overflow: hidden;
  box-sizing: border-box;
  overflow-y: scroll;
  .con_top {
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    background: #fff;
    justify-content: space-around;
    li {
      // flex: 1;
      text-align: center;
      font-size: 14px;
    }
  }
}
</style>