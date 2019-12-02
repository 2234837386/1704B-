<template>
  <div class="warp">
    <div class="header">
      <p>可向多个商家咨询最低价，商家及时回复</p>
    </div>
    <div class="had" @click="showI">
      <div class="img">
        <img src="http://img2.bitautoimg.com/autoalbum/files/20180131/094/0319300949_3.jpg" alt />
      </div>
      <div class="content">
        <h4>阿斯顿·马丁DB11</h4>
        <p>2019款 4.0T v8 Volante特别版</p>
      </div>
      <div class="spn">
        <span>></span>
      </div>
    </div>
    <div class="from">
      <div class="biao">
        <p>个人信息</p>
      </div>

      <form action class="ipy">
        <label for>姓名</label>
        <input type="text" placeholder="输入你的真实中文姓名" />
        <label for>电话</label>
        <input type="text" placeholder="输入你的真实手机号码" />

        <div class="city">
          <label for>城市</label>
          <p @click="tan">北京></p>
        </div>
        <button class="btn">询问最低价</button>
      </form>
    </div>

    <div class="dian">
        <p>经销报价商家</p>
        <div></div>
    </div>
        <Up :ismask="ismask"/>
        <Money :isZhan='isZhan'/>
  </div>
</template>

<script>
import Money from '../components/Money'
import Up from '../components/Up'
export default {
    components: {
        Up,
        Money
    },
     data() {
    return {
      ismask: false,
      isZhan:false
    };
  },

    methods: {
        tan(){
           this.ismask=!this.ismask
        },
        showI(){
          this.isZhan=!this.isZhan
        },
      
    },
    created () {
       this.$http.get('https://baojia.chelun.com/v2-dealer-alllist.html').then(res=>{
               console.log(res.data);
           })
    }
};
</script>

<style lang="postcss" scoped>
.warp {
  widows: 100%;
  height: 100%;
  background: #eeeeee;
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
.had .spn span {
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
  margin-top: 150%;
}
.from {
  width: 100%;
  height: 200px;
  background: #ffffff;
  padding: 0 10px;
}
.from .biao{
 width: 100%;
  height: 20px;
    background: #eeeeee;
}
.from .biao p {
  font-size: 12px;
  color: #666;
  
  line-height: 20px;
}
.ipy {
  border: none;
  width: 100%;
  height: 130px;
  background: #fff;
  padding: 0 10px;
}
.ipy label {
  width: 20%;
  height: 45px;
}
.ipy input {
  border: none;
  width: 90%;
  height: 45px;
  border-bottom: 1px solid #eeeeee;
  text-indent: 8.5rem;
  font-size: 16px;
  outline: none;
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

.dian{
    width: 100%;
    background: #eeeeee;
    padding: 0 10px
}
.dian p {
  font-size: 12px;
  color: #666;
  width: 100%;
  height: 20px;
  line-height: 20px;
}
</style>