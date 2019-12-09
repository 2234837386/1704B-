import {  getCityList } from '@/servicer/index'
// 存放数据
const state = {
    cityList: []
}
const mutations = {
    provin(state, payload) {
        state.cityList = payload
    },
}
const actions = {
    async getCityList({ commit }, payload) {
        let res = await getCityList(payload)
        commit('provin', res)
        
        console.log(res);
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}