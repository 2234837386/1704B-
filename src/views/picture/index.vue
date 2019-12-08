<template>
  <div class="picture_page">
    <div class="p_top">
      <li>
        {{color}}
        <i class="iconfont icon-angle-down"></i>
      </li>
      <li>
        {{cars}}
        <i class="iconfont icon-angle-down"></i>
      </li>
    </div>
    <div class="p_main">
      <div class="p_dome" v-for="(item,index) in imageList" :key="index">
        <div
          class="p_item"
          v-lazy:background-image="$getUrl(v.Url.replace('{0}','3'))"
          v-for="(v,i) in item.List"
          :key="i"
        >
          <div
            class="p_mask"
            v-if="!i"
            @click="()=>{$router.push({
              path:'/list',
              query:{
                id:index,
                count:item.Count
                }
              })}"
          >
            <p>{{item.Name}}</p>
            <p>{{item.Count}}张&gt;</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      color: "颜色",
      cars: "车款"
    };
  },
  computed: {
    ...mapState({
      imageList: state => state.img.imageList
    })
  },
  methods: {
    ...mapActions({
      getImageList: "img/getImageList"
    })
  },
  created() {
    this.getImageList(this.$route.query.SerialID);
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
}
.p_main {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: auto;
  .p_dome {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .p_item {
      width: calc(100% / 3);
      height: 7.5rem;
      padding: 0.1rem;
      background-size: cover;
      box-sizing: border-box;
      .p_mask {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        font-size: 0.8rem;
        color: #fff;
        background: rgba(0, 0, 0, 0.5);
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>