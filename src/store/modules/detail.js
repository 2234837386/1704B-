import {carList} from '../../servicer/index'
const state={
    allList:[],
    carList:[]
}
const mutations={
    getList(state,payload){
        state.allList=payload
       
    }
}
const actions={
   async carList({commit},actions){
       let res=await carList(actions)
       commit('getList',res)
    //    console.log(res)
   }
}
export default{
    state,
    mutations,
    actions,
    namespaced:true
}