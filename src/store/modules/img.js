import { getImageList } from "@/servicer/index";
const state = {
    imageList: []
}
const mutations = {
    setImageList(state, actions) {
        state.imageList = actions
    }
}
const actions = {
    async getImageList({ commit }, actions) {
        let res = await getImageList(actions);
        commit("setImageList", res)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions 
}