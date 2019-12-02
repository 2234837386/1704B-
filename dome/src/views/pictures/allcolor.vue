<template>
    <div class="allcolor_page">
        <div class="a_top" @click="fan">全部颜色</div>
        <div class="titlebar">
            <span
             v-for="(item,index) in gettitle"
              :key="index"
              :class="{active:ind===index}"
              @click="tablist(item,index)">{{item}}</span>
        </div>
        <div class="main">
            <div class="box" v-for="(ite,k) in list[type]" 
            :key="k"
            >
            <i class="cbox" :style="{'background':ite.Value}"></i>
            <span>{{ite.Name}}</span>
            
            </div>
           
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            id:'',
            // titlebar:[],
            ind:0,
            arr:[],
            list:[],
            type:0
        }
    },
    computed:{
        gettitle(){
            
            return Object.keys(this.list);
        }
       },  
    methods:{
        tablist(item,index){
            this.ind=index
            this.type=item
        },
        fan(){
            this.$router.push({
                path:'/picture',
                query:{
                    // CarId:this.list.car_id,
                    SerialID:this.id,
                    ColorID:this.list[this.type].ColorId

                }
            })
        }
    },
    created(){
        this.id=this.$route.query.SerialID;
            axios.get(`https://baojia.chelun.com/v2-car-getModelImageYearColor.html?SerialID=${this.id}`).then(res=>{
          this.list=res.data.data;
        //   console.log(this.list)
        //   let ddd=JSON.parse(JSON.stringify(this.list))
        //   console.log(ddd)
        //   let trr=Object.values(ddd)
        //   this.list=trr
        })
    },
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
.allcolor_page{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #eee;
    overflow: hidden;
    box-sizing: border-box;
    .a_top{
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #09f;
        font-size: 18px;
        background: #fff;

    }
    .titlebar{
        width: 100%;
        height: 50px;
        line-height: 50px;
        display: flex;
        justify-content: space-around;
        span{
            color: #333;
            &.active{
                color: #09f;
            }
        }
    }

}
.main{
    // flex: 1;
    display: flex;
    flex-wrap: wrap;
    .box{
        width: 171px;
        height: 40px;
        // line-height: 40px;
        border:1px solid #09f;
        margin: 8px;
        display: flex;
        align-items: center;
        .cbox{
            width: 25px;
            height: 25px;
            margin: 0 10px;
        }
    }
    
}
</style>