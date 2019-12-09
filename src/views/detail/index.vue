<template>
  <div class="detail_page">
    <!-- {{Alllist}} -->
    <!-- 点击img跳转到pictures页面 -->
    <img class="banimg" :src="Alllist.CoverPhoto" @click="tiaoimg(Alllist)" />
    <div class="carmsg">
      <p>
        <b v-if="Alllist.market_attribute">{{Alllist.market_attribute.dealer_price}}</b>
        <span v-if="Alllist.market_attribute">指导价：{{Alllist.market_attribute.official_refer_price}}</span>
      </p>

      <button v-if="Alllist">{{Alllist.BottomEntranceTitle}}</button>
    </div>
    <div class="timemsg">
      <span
        :class="{active:ind===index}"
        v-for="(item,index) in getYear"
        :key="index"
        @click="()=>ind=index"
      >{{item}}</span>
    </div>
    <div class="inhale_type" v-for="(item,index) in listEach" :key="index">
      <div class="title">{{item.exhaust_str}}/{{item.max_power_str}}{{item.inhale_type}}</div>
      <div class="text">
        <span>{{item.market_attribute.year}}款 {{item.car_name}}</span>
        <span>{{item.max_power}}马力/{{item.trans_type}}</span>
        <li v-if="item.market_attribute">
          指导价：
          <span>{{item.market_attribute.dealer_price_max}}</span>
          <b>{{item.market_attribute.dealer_price_min}}</b>
        </li>
        <i
          class="ibtn"
          v-if="Alllist.BottomEntranceTitle"
          @click="xiao(item.car_id,item.car_name)"
        >{{Alllist.BottomEntranceTitle}}</i>
      </div>
    </div>
    <div class="btn" v-if="Alllist.BottomEntranceTitle" @click="()=>{$router.push('/cart')}">
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
      ind: 0
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
    xiao() {
      this.$router.push("/cart");
      console.log(2131, "===============");
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
.title {
  margin: 5px 10px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  flex-shrink: 0;
}
.text {
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  background: #fff;
  flex-shrink: 0;
  // align-items: center;
  i {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-top: 1px solid #ccc;
    color: #09f;
    font-size: 20px;
  }
  span,
  li {
    margin: 5px 10px;
  }
  span:first-child {
    margin-top: 10px;
    font-size: 15px;
  }
  span:nth-child(2) {
    color: #aaa;
  }
  li {
    text-align: right;
    margin-right: 3px;
    color: #aaa;
    span {
      margin: 0 5px;
    }
    b {
      font-size: 20px;
      color: #ff0000;
      font-weight: normal;
      margin: 0 5px;
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