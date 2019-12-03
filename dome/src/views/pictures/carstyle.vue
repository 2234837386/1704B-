<template>
    <div class="carstyle_page">
        <div class="c_top">全部车型</div>
        <div class="items"
        v-for="(item,index) in carlist"
        :key="index">
            <div class="title">{{item.exhaust_str}}/{{item.max_power_str}}{{item.inhale_type}}</div>
            <div class="text" @click="tiao(item)">
                    <li>
                        <span>{{item.market_attribute.year}}款 {{item.car_name}}</span>
                        <b>{{item.market_attribute.dealer_price_min}}</b>
                    </li>
                    <li v-if="item.market_attribute">
                        <span>{{item.max_power}}马力/{{item.trans_type}}</span> 
                        <span>指导价：{{item.market_attribute.dealer_price_max}}</span>
                        
                    </li>   
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
           list:[],
           carlist:[]
        }
    },
    computed:{

    },
    methods:{
        tiao(item){
            this.$router.push({
                path:'/carconte',
                query:{
                    carId:item.car_id,
                    carName:item.car_name,
                    carYear:item.market_attribute.year
                    
                }
            })
        }
    },
    created(){
        this.id=this.$route.query.SerialID
        axios.get(`https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=${this.id}`).then(res=>{
            this.list=res.data.data;
            // console.log(this.list)
            this.carlist=this.list.list;
            // console.log(this.carlist)
        })
    },
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
.carstyle_page{width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #eee;
    overflow: hidden;
    box-sizing: border-box;
      overflow-y: scroll;
    .c_top{
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #09f;
        font-size: 18px;
        background: #fff;
    }
    .items{
        flex: 1;
        display: flex;
        flex-direction: column;
      
        .title{
            width: 100%;
            height: 30px;
            line-height: 30px;
            background: #eee;
            font-size: 14px;
            color: #aaa;
            padding: 0 10px;
        }
        .text{
            background: #fff;
            width: 100%;
            height: 60px;
            display: flex;
            flex-direction: column;
            
            li{
                display: flex;
                justify-content: space-between;
                line-height: 30px;
                padding: 0 10px;
                
            }
            li:first-child{
                font-size: 15px;
                b{
                    // font-size: 1px;
                    color: #f00;
                    // font-weight: 0;
                    font-style: normal;
                }
            }
            li:last-child{
                font-size: 14px;
                color: #aaa;
            }
        }
    }
}
</style>