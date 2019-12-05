<template>
  <div class="home">
    <div class="list">
      <div class="dome" v-for="(item,index) in homeList" :key="index" :id="item.lets">
        <h3>{{item.lets}}</h3>
        <div class="main">
          <dl
            class="item"
            v-for="(a,i) in item.children"
            :key="i"
            :data-id="a.MasterID"
            @click.prevent="touchfn(a.MasterID)"
          >
            <dt>
              <img v-lazy="$getUrl(a.CoverPhoto)" alt />
            </dt>
            <dd>
              <b>{{a.Name}}</b>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <Floor />
    <aMask />
  </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      homeList: state => state.home.homeList,
      isMask: state => state.home.isMask
    })
  },
  methods: {
    ...mapMutations({
      editInd: "home/editInd"
    }),
    ...mapActions({
      getMasterBrandList: "home/getMasterBrandList",
      getMaskList: "home/getMaskList"
    }),
    touchfn(id) {
      this.editInd(true);
      this.getMaskList(id);
    }
  },
  created() {
    this.getMasterBrandList();
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  .list {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
}
.dome {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  h3 {
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    background: #f5f5f5;
    padding: 0 1rem;
    font-weight: normal;
    font-size: 1rem;
    box-sizing: border-box;
    flex-shrink: 0;
  }
  .main {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    box-sizing: border-box;
    .item {
      width: 100%;
      height: 3.5rem;
      display: flex;
      border-bottom: 0.08rem solid #ddd;
      padding: 0.5rem;
      box-sizing: border-box;
      flex-shrink: 0;
      &:last-child {
        border-bottom: 0;
      }
      dt {
        width: 15%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 3rem;
          height: 80%;
          display: block;
        }
      }
      dd {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        text-indent: 0.5rem;
        b {
          font-size: 1rem;
          font-weight: normal;
        }
      }
    }
  }
}
</style>