<template>
  <div :class="{CarYear:true,active:isYear}" >
      <div class="items" v-for="(ite,i) in item" :key="i" @click="dian(ite)">
         <div class="title">{{ite.exhaust_str}}/{{ite.max_power_str}}{{ite.inhale_type}}</div>
            <div class="text">
              <li>
                <span>{{ite.market_attribute.year}}款 {{ite.car_name}}</span>
                <b>{{ite.market_attribute.dealer_price_min}}</b>
              </li>
              <li>
                <span>{{ite.max_power}}马力/{{ite.trans_type}}</span>
                <span>指导价：{{ite.market_attribute.dealer_price_max}}</span>
              </li>
            </div>
      </div>
   
  </div>
</template>
<script>
import { mapMutations} from 'vuex'
export default {
  props: {
    isYear: {
      type: Boolean
    },
    item:{
      type:Object|Array
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapMutations({
       editYear: "cart/editYear"
    }),
    dian(ite){
      this.editYear({type:false})
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.CarYear {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease;
  transform: translateY(100%);
  background: #fff;
  z-index: 100;
  overflow-y: scroll;
  &.active {
    transform: translateY(0%);
  }
}
.items {
  width: 100%;
  display: flex;
  flex-direction: column;
  // background: violet;
  // height: 130px;
  flex-shrink: 0;
  .title {
    width: 100%;
    height: 30px;
    line-height: 30px;
    background: #eee;
    font-size: 14px;
    color: #333;
    padding: 0 10px;
  }
  .text {
    background: #fff;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
  color: #333;
    li {
      display: flex;
      justify-content: space-between;
      line-height: 30px;
      padding: 0 10px;
    }
    li:first-child {
      font-size: 15px;
      b {
        // font-size: 1px;
        color: #f00;
        // font-weight: 0;
        font-style: normal;
      }
    }
    li:last-child {
      font-size: 14px;
      color: #aaa;
    }
  }
}
</style>