<template>
  <div class="Detail">
    <section>
      <div class="img">
        <img v-lazy="detailList.CoverPhoto" data-hover="hover" />
        <span data-hover="hover">{{detailList.pic_group_count}}张照片</span>
      </div>
      <div class="info">
        <div class="text">
          <p>
            <span>{{detailList.market_attribute&&detailList.market_attribute.dealer_price}}</span>
          </p>
          <p>指导价 {{detailList.market_attribute&&detailList.market_attribute.official_refer_price}}</p>
        </div>
        <button data-hover="hover" @click="jumpCart()">询问底价</button>
      </div>
      <div class="detailList">
        <div class="detailTab">
          <span
            :class="{active:ind===index}"
            v-for="(item,index) in detailTab"
            :key="index"
            @click="tab(index)"
          >{{item.year}}</span>
        </div>
        <div class="detailMain">
          <div class="detailItem" v-for="(item,index) in detailItem" :key="index">
            <p class="detailTitle">{{item.key}}</p>
            <ul>
              <li v-for="(v,i) in item.list" :key="i">
                <p>{{v.market_attribute.year}}款{{v.car_name}}</p>
                <p>{{v.horse_power}}马力{{v.gear_num}}档{{v.trans_type}}</p>
                <p>
                  <span>指导价 {{v.market_attribute.official_refer_price}}</span>
                  <span>{{v.market_attribute.dealer_price_min?`${v.market_attribute.dealer_price_min}起`:"暂无"}}</span>
                </p>
                <button data-id="138592" data-hover="hover" @click="jumpCart(v.car_id)">询问底价</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <footer @click="jumpCart()">
      <p>询问底价</p>
      <p>本地经销商为你报价</p>
    </footer>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      ind: 0
    };
  },
  computed: {
    ...mapState({
      detailList: state => state.detail.detailList,
      positionsCity: state => state.cart.positionsCity
    }),
    detailTab() {
      let listdata = JSON.stringify(this.detailList.list);
      let arr = [
        {
          year: "全部"
        }
      ];
      listdata &&
        JSON.parse(listdata).map((item, index) => {
          if (arr.find(a => a.year === item.market_attribute.year)) return;
          arr.push({
            year: item.market_attribute.year
          });
        });
      arr.map(item => {
        if (item.year === "全部") {
          item.children =
            listdata &&
            JSON.parse(listdata).filter(i => i.market_attribute.year);
        } else {
          item.children =
            listdata &&
            JSON.parse(listdata).filter(
              i => i.market_attribute.year === item.year
            );
        }
      });
      return arr;
    },
    detailItem() {
      return this.$push(this.$Sort(this.detailTab[this.ind].children));
    }
  },
  methods: {
    ...mapActions({
      getIp: "cart/getIp",
      getDetailList: "detail/getDetailList"
    }),
    tab(ind) {
      this.ind = ind;
    },
    jumpCart(carID) {
      let CarID = carID ? carID : this.detailItem[0].list[0].car_id;
      this.$router.push({
        name: "cart",
        params: {
          CarID,
          CityID: this.positionsCity.CityID
        }
      });
    }
  },
  created() {
    this.getIp();
    this.getDetailList(this.$route.params.SerialID);
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.Detail {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  section {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    position: relative;
    .img {
      width: 100%;
      height: 34%;
      position: relative;
      flex-shrink: 0;
      img {
        width: 100%;
        transform: translateY(-17%);
      }
      span {
        position: absolute;
        bottom: 3.5rem;
        right: 0.9rem;
        color: #fff;
        padding: 1px 0.1rem;
        border-radius: 0.2rem;
        background: rgba(0, 0, 0, 0.6);
        font-size: 0.24rem;
      }
    }
    .info {
      width: 100%;
      padding: 0.92rem 0.6rem 0.9rem;
      background: #fff;
      display: flex;
      align-items: center;
      transform: translateY(-60%);
      flex-shrink: 0;
      .text {
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 0.1rem;
        box-sizing: border-box;
        margin-right: 0.8rem;
        flex-shrink: 0;
        p {
          font-size: 1.1rem;
          color: #f00;
          &:last-child {
            font-size: 0.8rem;
            color: silver;
          }
        }
      }
      button {
        flex: 1;
        height: 80%;
        border: 0;
        background: #00afff;
        border-radius: 0.3rem;
        outline: none;
        font-size: 1rem;
        color: #fff;
      }
    }
    .detailList {
      width: 100%;
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      position: absolute;
      left: 0;
      top: 15rem;
      .detailTab {
        border-top: 0.45rem solid #f4f4f4;
        padding: 0 0.9rem;
        font-size: 0.96rem;
        height: 3rem;
        line-height: 3rem;
        background: #fff;
        flex-shrink: 0;
        span {
          padding-right: 1.38rem;
          &.active {
            color: #00afff;
          }
        }
      }
      .detailMain {
        width: 100%;
        display: flex;
        flex-direction: column;
        .detailItem {
          width: 100%;
          display: flex;
          flex-direction: column;
          & > p {
            padding: 0 0.6rem;
            height: 1.5rem;
            line-height: 1.5rem;
            font-size: 0.72rem;
            color: #999;
            background: #f4f4f4;
          }
          ul {
            background: #fff;
            display: flex;
            flex-direction: column;
            li {
              display: flex;
              flex-direction: column;
              padding: 0 0.2rem;
              border-bottom: 0.5rem solid #f4f4f4;
              overflow: hidden;
              p {
                padding: 0.78rem 0 0 0.5rem;
                font-size: 0.9rem;
                line-height: 0.9rem;
                color: #3d3d3d;
                &:nth-child(2) {
                  color: #bdbdbd;
                  font-size: 0.72rem;
                }
                &:nth-child(3) {
                  text-align: right;
                  padding-bottom: 0.3rem;
                  font-size: 0.9rem;
                  color: #818181;
                  span:last-child {
                    color: #f00;
                    margin: 0 0.5rem;
                  }
                }
              }
              button {
                border: none;
                border-top: 1px solid #eee;
                width: 100%;
                height: 2.5rem;
                font-size: 1rem;
                color: #00afff;
                background: #fff;
                font-weight: 500;
                outline: none;
              }
            }
          }
        }
      }
    }
  }
  footer {
    width: 100%;
    height: 8%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #3aacff;
    z-index: 100;
    & > p {
      font-size: 1rem;
      margin-top: 0.12rem;
      font-weight: 500;
      color: #fff;
      &:last-child {
        font-size: 0.24rem;
      }
    }
  }
}
</style>