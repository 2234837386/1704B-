<template>
  <div :class="{left:true,active:isShow}" @click="editShow({type:false})">
    <div class="cityList">
      <ul>
        <li v-for="(item,index) in cityListTwo" :key="index" @click="cityfn(item)">{{item.CityName}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  props: {
    isShow: {
      type: Boolean
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      cityListTwo: state => state.cart.cityListTwo,
      positionsCity: state => state.cart.positionsCity
    })
  },
  methods: {
    ...mapActions({ getCartList: "cart/getCartList" }),
    ...mapMutations({
      editShow: "cart/editShow",
      editBlock: "cart/editBlock",
      editCity: "cart/editCity"
    }),
    cityfn(item) {
      this.editCity(item);
      this.editShow({ type: false });
      this.editBlock({ type: false });
      this.getCartList({
        CarID: this.$route.params.CarID,
        CityID: this.positionsCity.CityID
      });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.left {
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease;
  transform: translateX(100%);
  padding-left: 30%;
  box-sizing: border-box;
  .cityList {
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    overflow-y: auto;
    ul {
      width: 100%;
      li {
        width: 100%;
        padding-left: 0.6rem;
        font-size: 1rem;
        height: 2.4rem;
        line-height: 2.4rem;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        margin-left: 0.3rem;
      }
    }
  }
  &.active {
    transform: translateX(0%);
  }
}
</style>