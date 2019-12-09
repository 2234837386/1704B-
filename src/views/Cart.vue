<template>
  <div class="warp">
    <div class="hot">
      <div class="header">
        <p>可向多个商家咨询最低价，商家及时回复</p>
      </div>
      <div class="had">
        <div class="img">
          <!-- <img :src="Picture" alt /> -->
        </div>
        <div class="content">
          <!-- <h4>{{AliasName}}</h4>
          <p>{{carName}}</p>-->
        </div>
        <div class="spn">
          <span class="iconfont icon-angle-right hh"></span>
        </div>
      </div>
      <div class="from">
        <div class="biao">
          <p>个人信息</p>
        </div>
        <div class="message">
          <li>
            <span>姓名</span>
            <input type="text" placeholder="输入你的真实中文姓名" />
          </li>
          <li>
            <span>手机</span>
            <input type="text" placeholder="输入你的真实手机号码" />
          </li>
          <li @click="tan" class="spnl">
            <span>城市</span>
            <span class="span">{{name}}</span>
          </li>
          <button class="btn">询问最低价</button>
        </div>
      </div>
      <div class="dealer-info">
        <p class="tip">选择报价经销商</p>
        <ul>
          <li
            data-hover="hover"
            data-id="8766"
            :class="{active:index<3}"
            v-for="(item,index) in formList.list"
            :key="index"
          >
            <p>
              <span>{{item.dealerShortName}}</span>
              <span>万</span>
            </p>
            <p>
              <span>{{item.address}}</span>
              <span>售{{item.saleRange}}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <Up :ismask="ismask" />
  </div>
</template>

<script>
import Up from "../components/Up";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    Up
  },
  data() {
    return {
      ismask: false,
      name: this.$route.query.CityName
    };
  },
  computed: {
    ...mapState({ formList: state => state.form.formList })
  },
  methods: {
    tan() {
      this.ismask = !this.ismask;
    },
    ...mapActions({
      getformList: "form/getformList"
    })
  },
  created() {
    this.getformList();
  }
};
</script>

<style lang="scss" scoped>
.warp {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.header {
  width: 100%;
  height: 35px;
  background: #79cd92;
  line-height: 35px;
  text-align: center;
}
.hot {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  position: relative;
}
.had {
  background: #fff;
  padding: 0 10px;
  width: 100%;
  height: 100px;
  display: flex;
}
.had .img {
  margin-top: 13px;
  width: 120px;
  height: 80px;
  border: 1px dotted #cccccc;
}
.had .img img {
  widows: 100%;
  height: 100%;
}
.had .content {
  margin-left: 10px;
  margin-top: 3px;
  line-height: 30px;
}
.spnl {
  position: relative;
}
.span {
  position: absolute;
  right: 25px;
}
.hh {
  text-align: center;
  margin-top: 35px;
  font-size: 30px;
  color: #d3c7c7;
  font-weight: normal;
}
.from {
  width: 100%;
  height: 210px;
  background: #ffffff;
  padding: 0 10px;
}
.from .biao {
  width: 100%;
  height: 20px;
  background: #eeeeee;
}
.from .biao p {
  font-size: 12px;
  color: #666;

  line-height: 20px;
}
.message {
  width: 100%;
}

.message li {
  width: 100%;
  color: #666;
  border-bottom: 1px solid #eeeeee;
  height: 47px;
  display: flex;
  line-height: 45px;
  position: relative;
}
.message li span {
  width: 32px;
  display: inline-block;
  color: black;
}
.message li input {
  outline: none;
  height: 45px;
  flex: 1;
  border: none;
  text-align: end;
}
.iconfont {
  position: absolute;
  right: 10px;
}
.city {
  width: 100%;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  line-height: 45px;
}
.city p {
  text-indent: 14rem;
  font-size: 16px;
  line-height: 45px;
}
.btn {
  width: 80%;
  border: none;
  height: 35px;
  margin-left: 35px;
  margin-top: 5px;
  border-radius: 5px;
  border-bottom: 1px solid #eeeeee;
  background: skyblue;
  color: #fff;
  font-size: 15px;
}

.dian {
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
}
.dian p {
  font-size: 12px;
  color: #666;
  background: #eeeeee;
  width: 100%;
  height: 20px;
  line-height: 20px;
}
.dian main {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.tip {
  padding: 0 5px;
  height: 28px;
  line-height: 28px;
  font-size: 12px;
  color: #666;
  background: #eee;
}
.dealer-info ul {
  background: #fff;
  padding: 0 0.18rem;
}
.dealer-info li {
  position: relative;
  padding: 10px 0 10px 25px;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  height: 91px;
}
.dealer-info li p:first-child {
  font-size: 18px;
}
.dealer-info li p:first-child {
  font-size: 18px;
}
.dealer-info li p:first-child span:last-child {
  font-size: 16px;
  float: right;
  color: red;
}
.dealer-info li p:nth-child(2) {
  margin-top: 5px;
  font-size: 14px;
  color: #a2a2a2;
  span:first-child {
    display: inline-block;
    max-width: 254px;
  }
  span:nth-child(2) {
    float: right;
  }
}
.dealer-info li:before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #ccc;
  box-sizing: border-box;
  position: absolute;
  left: 5px;
  top: 50%;
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
}
.dealer-info li.active:before {
  background: #3aacff;
  border: none;
}
.dealer-info li.active:after {
  content: "";
  display: inline-block;
  padding-top: 10px;
  padding-right: 5px;
  border: 2px solid #fff;
  -webkit-transform: rotate(40deg) translate3d(0, -50%, 0);
  transform: rotate(40deg) translate3d(0, -50%, 0);
  position: absolute;
  left: 6px;
  border-left: none;
  border-top: none;
  top: 47%;
}

// .item {
//   width: 100%;
//   padding: 0.5rem 0;
//   box-sizing: border-box;
//   display: flex;
//   justify-content: center;

//   // dt {
//   //   display: flex;
//   //   align-items: center;
//   //   padding: 0 0.5rem;
//   //   box-sizing: border-box;
//   &:before {
//     content: "";
//     display: inline-block;
//     width: 0.32rem;
//     height: 0.32rem;
//     border-radius: 50%;
//     border: 2px solid #ccc;
//     box-sizing: border-box;
//     position: absolute;
//     left: 0.05rem;
//     top: 50%;
//     -webkit-transform: translate3d(0, -50%, 0);
//     transform: translate3d(0, -50%, 0);
//   }
//   // }
//   dd {
//     display: flex;
//     flex: 1;
//     flex-direction: column;
//     h4 {
//       font-weight: normal;
//       justify-content: flex-start;
//       font-size: 1rem;
//     }
//     .bottom {
//       width: 100%;
//       display: flex;
//       justify-content: space-between;
//       span {
//         display: flex;
//         align-items: flex-end;
//         &:nth-child(1) {
//           width: 80%;
//         }
//         color: #afafaf;
//       }
//     }
//   }
// }
</style>