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
}