<template>
    <div class="picture_page">
        <div class="p_top">
            <li>颜色</li>
            <li>车款</li>
        </div>
        <router-view></router-view>
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

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

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