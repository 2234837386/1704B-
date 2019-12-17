import { carColor } from "@/servicer/index"
const state={
    colorList:{}
}
const mutations={
    getcarColor(state,payload){
        state.colorList=payload      
    }
}
const actions={
    async getcolorList({commit},payload){
        let res=await  carColor(payload)
        commit('getcarColor',res)      
    }
}
export default{
    namespaced:true,
    state,
    mutations,
    actions
}