<template>
  <div id="mask" :class="{active:isMask}" @touchstart="startfn" @touchend="endfn">
    <div class="dome" v-for="(item,index) in maskList" :key="index">
      <h3 @click="editInd(false)">{{item.GroupName}}</h3>
      <div class="main">
        <dl
          class="item"
          v-for="(a,i) in item.GroupList"
          :key="i"
          :data-ind="a.SerialID"
          @click="()=>{$router.push(`/detail/${a.SerialID}`)}"
        >
          <dt>
            <img v-lazy="$getUrl(a.Picture)" alt />
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
  props: {},
  components: {},
  data() {
    return {
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0
    };
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
    }),
    startfn(e) {
      this.startX = e.changedTouches[0].pageX;
      this.startY = e.changedTouches[0].pageY;
    },
    endfn(e) {
      this.endX = e.changedTouches[0].pageX;
      this.endY = e.changedTouches[0].pageY;
      if (this.endX - this.startX > 80 && this.endY - this.startY < 50) {
        this.editInd(false);
      }
    }
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
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  h3 {
    width: 100%;
    height: 1.5rem;
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
    flex: 1;
    display: flex;
    flex-shrink: 0;
    flex: 1;
    flex-direction: column;
    .item {
      width: 100%;
      height: 5rem;
      display: flex;
      border-bottom: 0.08rem solid #ddd;
      padding: 0.1rem;
      box-sizing: border-box;
      flex-shrink: 0;
      &:last-child {
        border-bottom: 0;
      }
      dt {
        width: 30%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding-left: 1rem;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        padding-left: 1rem;
        box-sizing: border-box;
        flex-shrink: 0;
        img {
          width: 5.5rem;
          height: 80%;
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
        flex-direction: column;
        padding: 0 0.5rem;
        box-sizing: border-box;
        span,
        i {
          width: 100%;
          flex: 1;
          font-style: normal;
          font-size: 1rem;
        }
        i {
          color: #f00;
        }
      }
    }
  }
}
</style>