<template>
    <div class="picture_page">
        <div class="p_top">
            <li @click="carcolor">颜色<i class="iconfont icon-angle-down" ></i></li>
            <li @click="carstyle">车款<i class="iconfont icon-angle-down" ></i></li>
        </div>

        <!-- <router-view></router-view> -->
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            id:''
        }
    },
    computed:{
        
    },
    created(){
        this.id=this.$route.query.SerialID;
        // console.log(this.id)
    
    },
     methods:{
        
        carcolor(){
            this.$router.push({
                path:'/clors',
                query:{
                    SerialID:this.id
                }
            })
        },
        carstyle(){
            this.$router.push({
                path:'/carstyle',
                query:{
                    SerialID:this.id
                }
            })
        }
    },
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
 .picture_page{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background: #eee;
        .p_top{
            width: 100%;
            height: 50px;
            line-height: 50px;
            display: flex;
            li{
                flex: 1;
                text-align: center;
                background: #fff;
            }
            li:nth-child(1){
                border-right: 1px solid #ccc;
            }
        }
        }
</style>