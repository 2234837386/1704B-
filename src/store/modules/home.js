import {getMasterList} from '@/services/index'
    // 存放数据
    const state ={
        cartList:[],       
    }
    const mutations={
        getList(state,payload){
            state.cartList=payload
        }
    }
    const actions={
        async getMasterList({commit}){
            let res=await getMasterList()
            commit('getList',res)
            console.log(res);
        }      
    }
    export default{
        namespaced: true,
        state,
        mutations,
        actions
    }