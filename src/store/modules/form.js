import { getformList } from "@/servicer/index";
const state = {
    formList: []
}
const mutations = {
    setformList(state, actions) {
        state.formList = actions
    }
}
const actions = {
    async getformList({ commit }) {
        let res = await getformList();
        console.log(res)
        commit("setformList", res)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}