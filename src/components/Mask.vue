<template>
  <div id="mask" :class="{active:isMask}">
    <div :id="item.lets" class="dome" v-for="(item,index) in maskList" :key="index">
      <h3 @click="editInd(false)">{{item.GroupName}}</h3>
      <main>
        <dl
          class="item"
          v-for="(k,v) in item.GroupList"
          :key="v"
          @click="$router.push(`/details/${k.SerialID}`)"
        >
          <dt>
            <img v-lazy="$getUrl(k.Picture)" alt />
          </dt>
          <dd>{{k.AliasName}}</dd>
        </dl>
      </main>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      isMask: state => state.home.isMask,
      maskList: state => state.home.maskList
    })
  },
  methods: {
    ...mapMutations({
      editInd: "home/editInd"
    })
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
#mask {
  position: fixed;
  right: 0;
  top: 0;
  width: calc(100% - 5rem);
  height: 100%;
  transform: translateX(100%);
  transition: all 1s ease;
  background: #fff;
  overflow: hidden;
  overflow-y: scroll;
  &.active {
    transform: translateX(0%);
  }
}
.dome {
  width: 100%;
  display: flex;
  flex-direction: column;
  h3 {
    width: 100%;
    height: 2rem;
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
main {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  box-sizing: border-box;
  .item {
    width: 100%;
    height: 5.5rem;
    display: flex;
    border-bottom: 1px solid #ddd;
    padding: 0 1rem;
    box-sizing: border-box;
    dt {
      width: 5.5rem;
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