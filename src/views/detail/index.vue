<template>
  <div class="detail_page">
    <img class="banimg" v-lazy="Alllist.CoverPhoto" @click="tiaoimg(Alllist)" />
    <div class="carmsg">
      <p>
        <b v-if="Alllist.market_attribute">{{Alllist.market_attribute.dealer_price}}</b>
        <span v-if="Alllist.market_attribute">指导价：{{Alllist.market_attribute.official_refer_price}}</span>
      </p>
      <button v-if="Alllist" @click="btnClick">{{Alllist.BottomEntranceTitle}}</button>
    </div>
    <div class="timemsg">
      <span
        :class="{active:ind===index}"
        v-for="(item,index) in getYear"
        :key="index"
        @click="tab(index)"
      >{{item}}</span>
    </div>
    <div class="inhale_type" v-for="(item,index) in detailItem" :key="index">
      <p class="detailTitle">{{item.key}}</p>
      <div class="text" v-for="(v,i) in item.list" :key="i">
        <div class="text_item" v-for="(v,i) in item.list" :key="i">
          <p>{{v.market_attribute.year}}款{{v.car_name}}</p>
          <p>{{v.horse_power}}马力{{v.gear_num}}档{{v.trans_type}}</p>
          <p>
            <span>指导价 {{v.market_attribute.official_refer_price}}</span>
            <span>{{v.market_attribute.dealer_price_min?`${v.market_attribute.dealer_price_min}起`:"暂无"}}</span>
          </p>
          <button
            data-id="138592"
            data-hover="hover"
            @click="btnClick(v.car_id)"
          >{{Alllist.BottomEntranceTitle}}</button>
          
        </div>
      </div>
    </div>
    <div class="btn" v-if="Alllist.BottomEntranceTitle" @click="btnClick ">
      <b>{{Alllist.BottomEntranceTitle}}</b>
      <span>本地经销商为您报价</span>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      ind: 0,
      firstData: []
    };
  },
  computed: {
    ...mapState({
      Alllist: state => state.detail.allList
    }),
    getYear() {
      let arr = ["全部"];
      let data = JSON.stringify(this.Alllist.list);
      data &&
        JSON.parse(data).map(item => {
          if (arr.find(a => a === item.market_attribute.year)) return;
          arr.push(item.market_attribute.year);
        });
      return arr;
    },
    listEach() {
      let list = JSON.stringify(this.Alllist.list);
      return (
        list &&
        JSON.parse(list).filter(item => {
          if (this.getYear[this.ind] === "全部") return item;
          return this.getYear[this.ind] === item.market_attribute.year;
        })
      );
    },
    getLinkId() {
      let src = this.Alllist.BottomEntranceLink;
      let ind = src.indexOf("carid");
      let str = src.substr(ind, 12).split("=")[1];
      return str;
    },
    detailItem() {
      return this.$pushfn(this.$Sortfn(this.listEach));
    }
  },
  methods: {
    ...mapActions({
      carList: "detail/carList"
    }),
    tiaoimg(Alllist) {
      
      this.$router.push({
        path: "/picture",
        query: {
          SerialID: this.$route.params.id
        }
      });
    },
    xiao(a, b) {
      this.$router.push({
        name: "cart",
        params: {
          carId: this.Alllist.list.car_id,
          AliasName: this.Alllist.AliasName,
          Picture: this.Alllist.Picture,
          carName: this.Alllist.list.car_name
        }
      });
    },
    btnClick() {
      this.$router.push({
        name: "cart",
        params: {
          carId: this.getLinkId,
          cityId: 201
        }
      });
    },
    tab(ind) {
      this.ind = ind;
    }
  },
  created() {
    this.carList(this.$route.params.id);
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.detail_page {
  width: 100%;
  height: 100%;
  display: flex;

  flex-direction: column;
  background: #eee;
  box-sizing: border-box;
  .banimg {
    width: 100%;
    height: 180px;
    flex-shrink: 0;
  }
  .carmsg {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    flex-shrink: 0;
    p {
      display: flex;
      flex-direction: column;

      b {
        font-size: 1.2rem;
        color: #ff0000;

        font-weight: normal;
        margin-bottom: 3px;
      }
      span {
        color: #ccc;
        font-size: 0.7rem;
      }
    }
    button {
      width: 180px;
      height: 35px;
      background: #00afff;
      border: 0;
      border-radius: 5px;
      outline: none;
      color: #fff;
      font-size: 16px;
    }
  }
  .timemsg {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #fff;
    margin-top: 10px;
    flex-shrink: 0;
    span {
      margin: 0 10px;
      &.active {
        color: #09f;
      }
    }
    .inhale_type {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }
}
.inhale_type {
  background: #eee;
  flex-shrink: 0;
}
.detailTitle {
  margin: 5px 10px;
  width: 100%;
  height: 18px;
  line-height: 18px;
  flex-shrink: 0;
}
.text {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  flex-shrink: 0;
  .text_item {
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
.btn {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: #3aacff;
  color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  flex-shrink: 0;
  b {
    font-weight: normal;
    // font-size: 18px;
    // margin: 5px;
  }
}
.ibtn {
  font-style: normal;
}
</style>