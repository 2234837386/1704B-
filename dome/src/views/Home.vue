<template>
  <div class="home">
    <aMask :isMask="isMask" :ind="ind" />
    <Floor :getzm="getzm" />
    <div class="list">
      <div class="dome" v-for="(item,index) in getzm" :key="index">
        <h3>{{item}}</h3>
        <div class="main">
          <dl
            class="item"
            v-for="(a,i) in list.filter(z=>z.Spelling.slice(0,1)===item)"
            :key="i"
            :data-id="a.MasterID"
            @click="()=>{
              isMask=!isMask;
              ind=a.MasterID;
              }"
          >
            <dt>
              <img v-lazy="a.CoverPhoto" alt />
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
import { mapState } from "vuex";
export default {
  components: {},
  data() {
    return {
      isMask: false,
      ind: 0
    };
  },
  computed: {
    ...mapState(["list"]),
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
  methods: {},
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
    font-size: 0.8rem;
    overflow-y: auto;
    .dome {
      width: 100%;
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

            img {
              width: 2rem;
              height: 2rem;
              display: block;
            }
          }
          dd {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: center;
            text-indent: 0.5rem;
          }
        }
      }
    }
  }
}
</style>