<<<<<<< HEAD
import { getMasterBrandList, getMaskList } from "@/servicer/index"
const state = {
    detailList: []
}
const mutations = {
    setDetailList(state, actions) {

    }
}
const actions = {
    async getDetailList({ commit }, actions) {
        let res = await getMaskList(actions)
        commit("setDetailList", res.data.data)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
=======
import {carList} from '../../servicer/index'
const state={
    allList:[]
}
const mutations={
    getList(state,payload){
        state.allList=payload
    }
}
const actions={
   async carList({commit},actions){
       let res=await carList(actions)
       commit('getList',res.data.data)
       console.log(res)
   }
}
export default{
    state,
    mutations,
    actions,
    namespaced:true
>>>>>>> 18650989afa814caa1fec2c3e2d0325c68bccbaf
}