<template>
  <div class="allcolor_page">
    <div class="a_top" @click="fan">全部颜色</div>
    <div class="titlebar">
      <span
        v-for="(item,index) in gettitle"
        :key="index"
        :class="{active:ind===index}"
        @click="tablist(item,index)"
      >{{item}}</span>
    </div>
    <div class="main">
      <div class="box" v-for="(ite,k) in list[gettitle[ind]]" :key="k" @click="tiaocolor(ite)">
        <i class="cbox" :style="{'background':ite.Value}"></i>
        <span>{{ite.Name}}</span>
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
      ind: 0,
      arr: [],
      list: [],
      type: 0
    };
  },
  computed: {
    gettitle() {
      return Object.keys(this.list);
    }
  },
  methods: {
    tablist(item, index) {
      this.ind = index;
    },
    fan() {
      this.$router.push({
        path: "/picture",
        query: {
          SerialID: this.id
        }
      });
    },
    tiaocolor(ite) {
      this.$router.push({
        path: "/carconte",
        query: {
          colorName: ite.Name
        }
      });
    }
  },
  created() {
    this.id = this.$route.query.SerialID;
    this.$http
      .get(
        `https://baojia.chelun.com/v2-car-getModelImageYearColor.html?SerialID=${this.id}`
      )
      .then(res => {
        this.list = res.data.data;
      });
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.allcolor_page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #eee;
  overflow: hidden;
  box-sizing: border-box;
  .a_top {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #09f;
    font-size: 18px;
    background: #fff;
  }
  .titlebar {
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-around;
    span {
      color: #333;
      &.active {
        color: #09f;
      }
    }
  }
}
.main {
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
</style>