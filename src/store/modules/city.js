import {getCityList} from '@/servicer/index'
    // 存放数据
    const state ={  
        cityList:[]    
    }
    const mutations={
        provinceid(state,payload){
            state.provinceidData=payload
        },
    }
    const actions={
        async getCityList({commit},payload){
            let res=await getCityList(payload)
            commit('provinceid',res)
            console.log(res);
        }      
    }
    export default{
        namespaced: true,
        state,
        mutations,
        actions
    }