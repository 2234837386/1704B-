<template>
  <div class="home">
    <aMask :isMask="isMask" />
    <Floor :getzm="getzm" />
    <div class="list">
      <div class="dome" v-for="(item,index) in getzm" :key="index" :id="item">
        <h3>{{item}}</h3>
        <div class="main">
          <dl
            class="item"
            v-for="(a,i) in list.filter(z=>z.Spelling.slice(0,1)===item)"
            :key="i"
            :data-id="a.MasterID"
            @click.prevent="indfn(a)"
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
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  components: {},
  data() {
    return {
      ind: 0
    };
  },
  computed: {
    ...mapState(["list", "isMask"]),
    getzm() {
      let arr = [];
      this.list.map(item => {
        if (!arr.find(a => item.Spelling.slice(0, 1) === a)) {
          arr.push(item.Spelling.slice(0, 1));
        }
      });
      return arr;
    }
  },
  methods: {
    ...mapActions(["loadNav"]),
    ...mapMutations(["edit"]),
    indfn(item) {
      this.edit(true);
      this.ind = item.MasterID;
      this.loadNav(this.ind);
    }
  },
  created() {},
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
  }
  .main {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    box-sizing: border-box;
    .item {
      width: 100%;
      height: 3rem;
      display: flex;
      border-bottom: 0.08rem solid #ddd;
      padding: 0.1rem;
      box-sizing: border-box;
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
          height: 90%;
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
