<template>
  <div :class="{up:true,active:isBlock}">
    <div class="province">
      <div class="location">
        <p>自动定位</p>
        <p>北京</p>
      </div>
      <div class="list">
        <p>省市</p>
        <ul>
          <li
            :data-id="item.CityID"
            v-for="(item,index) in cityList"
            :key="index"
            @click="editfn(item.CityID)"
          >{{item.CityName}}</li>
        </ul>
      </div>
    </div>
    <Left :isShow="isShow" />
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Left from "@/components/Left";
export default {
  props: {
    isBlock: {
      type: Boolean
    }
  },
  components: {
    Left
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      cityList: state => state.cart.cityList,
      isShow: state => state.cart.isShow
    })
  },
  methods: {
    ...mapActions({
      getCityListTwo: "cart/getCityListTwo",
      getCityList: "cart/getCityList"
    }),
    ...mapMutations({
      editShow: "cart/editShow"
    }),
    editfn(id) {
      this.editShow({ type: true });
      this.getCityListTwo(id);
    }
  },
  created() {
    this.getCityList();
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.up {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 100%;
  background: #fff;
  z-index: 100;
  transition: all 0.5s ease;
  transform: translateY(100%);
  .province {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    .location {
      width: 100%;
      p {
        height: 1.2rem;
        line-height: 1.2rem;
        font-size: 0.72rem;
        padding-left: 0.6rem;
        background: #f4f4f4;
        &:last-child {
          padding-left: 1.2rem;
          font-size: 1rem;
          height: 2.4rem;
          line-height: 2.4rem;
          background: #fff;
        }
      }
    }
    .list {
      width: 100%;
      p {
        height: 1.2rem;
        line-height: 1.2rem;
        font-size: 0.72rem;
        padding-left: 0.6rem;
        background: #f4f4f4;
      }
      ul {
        width: 100%;
        li {
          padding-left: 0.6rem;
          font-size: 1rem;
          height: 2.4rem;
          line-height: 2.4rem;
          border-bottom: 1px solid #eee;
          box-sizing: border-box;
          margin-left: 0.6rem;
          position: relative;
          &:after {
            content: "";
            display: inline-block;
            padding-top: 0.48rem;
            padding-right: 0.48rem;
            border-top: 1px solid #999;
            border-right: 1px solid #999;
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
            position: absolute;
            right: 1.05rem;
            top: 0.9rem;
          }
        }
      }
    }
  }
  &.active {
    transform: translateY(0%);
  }
}
</style>