import { getCityList } from '@/servicer/index'
// 存放数据
const state = {
    cityList: [],

}
const mutations = {
    setCityList(state, actions) {
        state.cityList = actions
    }
}
const actions = {
    async getCityList({ commit }) {
        let res = await getCityList()
        commit('setCityList', res)
    }

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}