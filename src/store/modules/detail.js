import { carList } from '@/servicer/index'
const state = {
    allList: []
}
const mutations = {
    getList(state, payload) {
        state.allList = payload
    }
}
const actions = {
    async carList({ commit }, actions) {
        let res = await carList(actions)
        commit('getList', res.data.data)
        console.log(res)
    }
}
export default {
    state,
    mutations,
    actions,
    namespaced: true
}