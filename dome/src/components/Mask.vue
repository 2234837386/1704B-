<template>
  <div id="mask" :class="{active:isMask}">
    <div class="dome" v-for="(item,index) in nav" :key="index">
      <h3 @click="edit(false)">{{item.GroupName}}</h3>
      <div class="main">
        <dl
          class="item"
          v-for="(a,i) in item.GroupList"
          :key="i"
          :data-ind="a.SerialID"
          @click="()=>{$router.push(`/car/${a.SerialID}`)}"
        >
          <dt>
            <img v-lazy="a.Picture" alt />
          </dt>
          <dd>
            <span>{{a.AliasName}}</span>
            <i>{{a.DealerPrice}}</i>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: {
    isMask: {
      type: Boolean | String
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["nav"])
  },
  methods: {
    ...mapMutations(["edit"])
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
#mask {
  width: 80%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  background: #fff;
  flex-shrink: 0;
  z-index: 2;
  transform: translatex(100%);
  transition: all 0.5s ease;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  &.active {
    transform: translatex(0%);
  }
}
.dome {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  h3 {
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    background: #ccc;
    padding: 0 1rem;
    box-sizing: border-box;
  }
  .main {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    box-sizing: border-box;
    .item {
      width: 100%;
      height: 4rem;
      display: flex;
      border-bottom: 1px solid #ccc;
      padding: 0.1rem;
      box-sizing: border-box;
      dt {
        width: 15%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        img {
          width: 3.5rem;
          height: 3rem;
          display: block;
          flex-shrink: 0;
        }
      }
      dd {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        text-indent: 0.5rem;
        display: flex;
        flex-direction: column;
        padding: 0 0.5rem;
        box-sizing: border-box;
        span,
        i {
          width: 100%;
          flex: 1;
          font-style: normal;
        }
        i {
          font-size: 0.8rem;
          color: #f00;
        }
      }
    }
  }
}
</style>