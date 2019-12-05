<template>
  <div class="home">
    <div class="list">
      <div :id="item.lets" class="dome" v-for="(item,index) in homeList" :key="index">
        <h3>{{item.lets}}</h3>
        <main>
          <dl
            class="item"
            v-for="(k,v) in item.children"
            :key="v"
            @click="touchfn(k.MasterID)"
            :data-id="k.MasterID"
          >
            <dt>
              <img v-lazy="$getUrl(k.CoverPhoto)" alt />
            </dt>
            <dd>{{k.Name}}</dd>
          </dl>
        </main>
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
}
.list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  .dome {
    width: 100%;
    display: flex;
    flex-direction: column;
    h3 {
      width: 100%;
      height: 1.5rem;
      display: flex;
      align-items: center;
      font-size: 1rem;
      font-weight: normal;
      background: #eee;
      padding: 0 0.5rem;
      box-sizing: border-box;
      flex-shrink: 0;
    }
  }
}
main {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  box-sizing: border-box;
  .item {
    flex-shrink: 0;
    width: 100%;
    height: 4rem;
    display: flex;
    border-bottom: 1px solid #ddd;
    padding: 0 1rem;
    box-sizing: border-box;
    dt {
      width: 4rem;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        height: 80%;
        display: block;
      }
    }
    dd {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 1rem;
      box-sizing: border-box;
    }
  }
}
</style>