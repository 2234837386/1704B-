<template>
  <div class="cart">
    <div class="oshow">
      <header>
        <p>可向多个商家咨询最低价，商家及时回复</p>
        <img src="http://h5.chelun.com/2017/official/img/icon-help.png" />
      </header>
      <section @scroll="scrollfn">
        <div class="userShow" @click="editYear({type:true})" >
          <img v-lazy="details&&details.serial.Picture" />
          <div class="dataShow">
            <p>{{details&&details.serial.AliasName}}</p>
            <p>
              {{details&&details.market_attribute.year}}
              款
              {{details&&details.car_name}}
            </p>
          </div>
        </div>
        <div class="form">
          <p class="title">个人信息</p>
          <ul>
            <li>
              <span>姓名</span>
              <input type="text" placeholder="输入你的真实中文姓名" maxlength="4" />
            </li>
            <li>
              <span>手机</span>
              <input type="tel" placeholder="输入你的真实手机号码" maxlength="11" />
            </li>
            <li>
              <span>城市</span>
              <span @click="editBlock({type:true})">{{positionsCity.CityName?positionsCity.CityName:"北京"}}</span>
            </li>
          </ul>
          <div class="request">
            <button data-hover="hover">询最低价</button>
          </div>
        </div>
        <div class="userList">
          <p class="title">选择报价经销商</p>
          <ul>
            <li
              data-hover="hover"
              data-id="50000004"
              :class="{active:isArr.includes(index)}"
              v-for="(item,index) in mainList"
              :key="index"
              @click="checkfn(index)"
            >
              <p>
                <span>{{item.dealerShortName}}</span>
                <span>{{item.promotePrice>0?item.promotePrice:""}}万</span>
              </p>
              <p>
                <span>{{item.address}}</span>
                <span>售{{item.saleRange}}</span>
              </p>
            </li>
          </ul>
        </div>
      </section>
      <footer :style="{display:isShow?'block':'none'}">
        <button data-hover="hover">询最低价</button>
      </footer>
    </div>
    <Up :isBlock="isBlock" />
    <CarYear :isYear="isYear" :item="AllList.list" />
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Up from "@/components/Up";
import CarYear from "@/components/CarYear";
export default {
  props: {},
  components: {
    Up,
    CarYear
  },
  data() {
    return {
      isShow: false,
      isArr: [0, 1, 2]
    };
  },
  computed: {
    ...mapState({
      isYear: state => state.cart.isYear,
      isBlock: state => state.cart.isBlock,
      cartList: state => state.cart.cartList,
      count: state => state.cart.count,
      positionsCity: state => state.cart.positionsCity,
      AllList: state => state.detail.allList
    }),
    mainList() {
      return this.cartList.list;
    },
    details() {
      return this.cartList.details;
    }
  },
  methods: {
    ...mapActions({
      getCartList: "cart/getCartList",
      carList: "detail/carList"
    }),
    ...mapMutations({
      editBlock: "cart/editBlock",
      editYear: "cart/editYear"
    }),
    scrollfn(e) {
      let top = [...e.target.children]
        .slice(0, -1)
        .reduce((a, b) => a + b.offsetHeight, 0);
      let bottom = [...e.target.children].slice(-1)[0].offsetHeight;
      e.target.scrollTop > top || e.target.scrollBottom > bottom
        ? (this.isShow = true)
        : (this.isShow = false);
    },
    checkfn(ind) {
      let arr = Object.assign(this.isArr);
      if (this.isArr.includes(ind)) {
        arr.splice(this.isArr.indexOf(ind), 1);
        this.isArr = arr;
      } else {
        this.isArr.push(ind);
      }
    }
  },
  created() {
    this.editBlock({ type: false });
    this.editYear({ type: false });
    let { CarID, CityID } = this.$route.params;
    this.getCartList(this.$route.params);
    this.carList(this.$route.params.SerialID);
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.cart {
  width: 100%;
  height: 100%;
  position: relative;
}
.oshow {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}
header {
  width: 100%;
  height: 1.8rem;
  line-height: 1.8rem;
  width: 100%;
  background: #79cd92;
  text-align: center;
  p {
    color: #fff;
    font-size: 0.9rem;
    display: inline-block;
  }
  img {
    width: 0.9rem;
    margin-left: 0.3rem;
    vertical-align: -10%;
  }
}
section {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  .userShow {
    background: #fff;
    padding: 0.96rem 0.54rem 0.72rem;
    position: relative;
    height: 6rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    img {
      width: 6.9rem;
      height: 4.23rem;
      border: 1px solid #eee;
      box-sizing: border-box;
      border-radius: 5px;
    }
    .dataShow {
      margin-left: 0.6rem;
      width: 12.9rem;
      p {
        display: flex;
        align-items: center;
        font-size: 1rem;
        padding: 0.1rem 0;
        box-sizing: border-box;
        &:first-child {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
      }
    }
    &:before {
      content: "";
      display: inline-block;
      padding-top: 0.48rem;
      padding-right: 0.48rem;
      border-top: 2px solid #ccc;
      border-right: 2px solid #ccc;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      right: 0.78rem;
      top: 2.7rem;
    }
  }
  .title {
    padding: 0 0.9rem;
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: 0.8rem;
    color: #666;
    background: #eee;
  }
  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    ul {
      background: #fff;
      padding: 0 0.6rem;
      li {
        display: flex;
        justify-content: space-between;
        font-size: 1rem;
        height: 3rem;
        align-items: center;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        color: #000;
        input {
          flex: 1;
          display: flex;
          text-align: end;
          border: none;
          outline: none;
        }
        &:last-child {
          border-bottom: none;
          span {
            &:last-child {
              display: flex;
              align-items: center;
              &:after {
                content: "";
                display: inline-block;
                padding-top: 0.42rem;
                padding-right: 0.42rem;
                border-top: 1px solid silver;
                border-right: 1px solid silver;
                -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
              }
            }
          }
        }
      }
    }
    .request {
      background: #fff;
      text-align: center;
      padding: 0.5rem 0;
      box-sizing: border-box;
      button {
        font-size: 0.96rem;
        color: #fff;
        width: 80%;
        background: #3aacff;
        height: 2.1rem;
        border-radius: 5px;
        border: none;
        outline: none;
      }
    }
  }
  .userList {
    width: 100%;
    display: flex;
    flex-direction: column;
    ul {
      background: #fff;
      padding: 0 0.18rem;
      li {
        position: relative;
        padding: 0.26rem 0 0.26rem 0.54rem;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p {
          width: 100%;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          flex-shrink: 0;
          &:first-child {
            span {
              &:last-child {
                color: #f00;
              }
            }
          }
          &:last-child {
            span:last-child {
              display: flex;
              width: 3.6rem;
              flex-shrink: 0;
              justify-content: flex-end;
            }
            font-size: 0.85rem;
            color: #afafaf;
          }
        }
        &.active {
          &:before {
            background: #3aacff;
            border: none;
          }
          &:after {
            content: "";
            display: inline-block;
            padding-top: 0.41rem;
            padding-right: 0.3rem;
            border: 2px solid #fff;
            -webkit-transform: rotate(40deg) translate3d(0, -150%, 0);
            transform: rotate(40deg) translate3d(0, -150%, 0);
            position: absolute;
            left: 0.25rem;
            border-left: none;
            border-top: none;
            top: 50%;
          }
        }
        &:before {
          position: absolute;
          left: 0.5rem;
          top: 1.5rem;
          content: "";
          display: inline-block;
          width: 0.96rem;
          height: 0.96rem;
          border-radius: 50%;
          border: 2px solid #ccc;
          box-sizing: border-box;
          flex-shrink: 0;
        }
      }
    }
  }
}
footer {
  width: 100%;
  height: 3rem;
  button {
    width: 100%;
    height: 100%;
    line-height: 1rem;
    background: #3aacff;
    text-align: center;
    font-size: 1.02rem;
    color: #fff;
    outline: none;
    border: none;
  }
}
</style>