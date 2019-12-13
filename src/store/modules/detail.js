import { getDetailList } from "@/servicer/index";
const state = {
    detailList: []
}
const mutations = {
    setDetailList(state, actions) {
        state.detailList = actions
    }
}
const actions = {
    async getDetailList({ commit }, actions) {
        let res = await getDetailList(actions);
        commit("setDetailList", res)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}