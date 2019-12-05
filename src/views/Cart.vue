<template>
  <div class="warp">
    <div class="header">
      <p>可向多个商家咨询最低价，商家及时回复</p>
    </div>
    <div class="had">
      <div class="img">
        <!-- <img :src="Picture" alt /> -->
      </div>
      <div class="content">
        <!-- <h4>{{AliasName}}</h4>
        <p>{{carName}}</p> -->
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
        <li @click="tan">
          <span>城市</span>
          <i class="iconfont icon-angle-right"></i>
        </li>
        <button class="btn">询问最低价</button>
      </div>
    </div>

    <div class="dian">
      <p>经销报价商家</p>
    </div>
    <Up :ismask="ismask" />
    <!-- <Money :isZhan="isZhan" /> --> 
  </div>
</template>

<script>
// import Money from "../components/Money";
import Up from "../components/Up";
export default {
  components:{
      Up
  },
   data(){
       return {
          ismask:false
       }
   },
  methods: {
    tan() {
      this.ismask = !this.ismask;
    },
    // showI() {
    //   this.isZhan = !this.isZhan;
    // }
  }
};
</script>

<style lang="scss" scoped>
.warp {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.header {
  width: 100%;
  height: 35px;
  background: #79cd92;
  line-height: 35px;
  text-align: center;
}
.had {
  background: #fff;
  padding: 0 10px;
  width: 100%;
  height: 100px;
  display: flex;
}
.had .img {
  margin-top: 3px;
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
.hh {
  text-align: center;
  margin-top: 40px;
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
  background: #eeeeee;
  padding: 0 10px;
}
.dian p {
  font-size: 12px;
  color: #666;
  width: 100%;
  height: 20px;
  line-height: 20px;
}
</style>