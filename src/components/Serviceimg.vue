<template>
  <div class="image_ilist">
    <div class="img_ps">
      <p class="img_name">{{item.Name}}</p>
      <p>{{item.Count}}张</p>
    </div>
    <li v-for="(itemimg,key) in item.List" :key="key">
      <span v-lazy:background-image="itemimg.Url"></span>
    </li>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: ["item"],
  methods: {
    ...mapMutations({
      //   imgFlag:
    })
  }
};
</script>
<style lang="scss" scoped>
.image_ilist {
  width: 100%;
//   height: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
 
  li {
    width: 33%;
    height: 122px;
    padding: 2px;
    span {
      width: 100%;
      height: 100%;
      display: block;
      background-size: cover;
      background-position: center;
    }
   
  }
}

.img_ps{
    position: absolute;
    width: 123px;
    height: 122px;

    top: 0;
    left: 0;
    color: #ffffff;
    background: rgba(56,90,130,.5);
    font-size: 13px;
     text-align: center;
    .img_name{
        margin-top: 45px;
        font-size: 14px;
        margin-bottom: 3px;
    }
}
</style>
