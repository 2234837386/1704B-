import {getMasterBrandList} from '@/servicer/index'
    // 存放数据
    const state ={
        cartList:[],
        
    }
    const mutations={
    }
    const actions={
        async getMasterBrandList({commit}){
            let res=await getMasterBrandList()
            commit('getList',res)
        }
      
    }

    export default{
        namespaced: true,
        state,
        mutations,
        actions
    }