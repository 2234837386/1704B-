import { carList } from '../../servicer/index'
const state = {
    allList: [],
    carList: [],
    carId: ""
}
const mutations = {
    getList(state, payload) {
        let arr = JSON.parse(JSON.stringify(payload));
        // arr.CoverPhoto = arr.CoverPhoto.indexOf("{0}") !== -1 ? arr.CoverPhoto.replace("{0}", "3") : arr.CoverPhoto;
        state.allList = arr;
    }
}
const actions = {
    async carList({ commit }, actions) {
        let res = await carList(actions)
        commit('getList', res)
    }
}
export default {
    state,
    mutations,
    actions,
    namespaced: true
}