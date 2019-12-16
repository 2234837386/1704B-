import { carColor } from "@/servicer/index"
const state={
    colorList:{}
    // colorDate:[]
}
const mutations={
    getcarColor(state,payload){
        state.colorList=payload
        // state.colorDate=payload
       
    }
}
const actions={
    // async carList({commit},actions){
    //     let res=await carList(actions)
    //     commit('getList',res)
    //  //    console.log(res)
    // }
    // const mutations={
    //     getList(state,payload){
    //         state.allList=payload
    //     }
    // }
    async getcolorList({commit},payload){
        let res=await  carColor(payload)
        commit('getcarColor',res)
        // console.log(res)
    }
}
export default{
    namespaced:true,
    state,
    mutations,
    actions
}