<template>
  <div class="cc_page">
    <div class="title">{{item.exhaust_str}}/{{item.max_power_str}}{{item.inhale_type}}</div>
    <div class="text" @click="tiao()">
      <li>
        <span>{{item.market_attribute.year}}款 {{item.car_name}}</span>
        <b>{{item.market_attribute.dealer_price_min}}</b>
      </li>
      <li v-if="item.market_attribute">
        <span>{{item.max_power}}马力/{{item.trans_type}}</span>
        <span>指导价：{{item.market_attribute.dealer_price_max}}</span>
      </li>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    tiao(item) {
      this.$router.push({
        path: "/picture",
        query: {
          carId: this.item.car_id,
          SerialID: this.$route.query.SerialID
        }
      });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.cc_page {
  width: 100%;
  // height: 130px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}
.items {
  flex: 1;
  display: flex;
  flex-direction: column;
  // background: violet;
  .title {
    width: 100%;
    height: 30px;
    line-height: 30px;
    background: #eee;
    font-size: 14px;
    color: #aaa;
    padding: 0 10px;
  }
  .text {
    background: #fff;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;

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