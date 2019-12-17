<template>
    <div :class="{imgBox:true,active:imgShow}" @click="setImageFlag(false)">
      <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </van-swipe-item>
</van-swipe>
    </div>
</template>
<script>
// import antd from 'antd'
// 
import { mapMutations,mapState } from "vuex";
export default {
    props:{
        isImg:{
            type:Boolean
        }
    },
    components:{

    },
    data(){
        return {
            show: false,
            index: 0,
            images: [
                     'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
            ]
        }
    },
    computed:{
...mapState({
      imgShow:state=>state.carimage.imgFlag
    })
    },
    methods:{
        onChange(index) {
      this.index = index;
    },
    ...mapMutations({
        setImageFlag:"carimage/setImageFlag"
    }),

        

    },
    created(){
       console.log(this.show,this.images)

    },
    mounted(){


    }
}
</script>
<style lang="scss" scoped>


.imgBox{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #333;
    display: none;
    &.active{
        display: block;
    }
}
</style>