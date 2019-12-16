import { carList } from '../../servicer/index'
const state = {
    allList: [],
    carList: [],
    carId: ""
}
const mutations = {
    getList(state, payload) {
        state.allList = payload
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
// carId: this.Alllist.list.car_id,
// AliasName: this.Alllist.AliasName,
// Picture: this.Alllist.Picture,
// carName: this.Alllist.list.car_name