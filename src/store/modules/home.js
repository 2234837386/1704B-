import { getMasterBrandList, getMaskList } from "@/servicer/index"
const state = {
    homeList: [],
    maskList: [],
    isMask: false
}
const mutations = {
    setHomeList(state, actions) {
        actions.map(item => {
            let lets = item.Spelling[0]
            let newArr = actions.filter(
                item => item.Spelling[0] == lets
            );
            if (state.homeList.findIndex(item => item.lets == lets) == -1) {
                state.homeList.push({ lets, children: newArr });
            }
        })
    },
    setMaskList(state, actions) {
        state.maskList = actions
    },
    editInd(state, actions) {
        state.isMask = actions
    }
}
const actions = {
    async getMasterBrandList({ commit }) {
        let res = await getMasterBrandList()
        commit("setHomeList", res.data.data)
    },
    async getMaskList({ commit }, actions) {
        let res = await getMaskList(actions)
        commit("setMaskList", res.data.data)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}