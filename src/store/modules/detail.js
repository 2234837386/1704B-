import { carList } from '../../servicer/index'
const state = {
    allList: [],
    carList: [],
    carId: ""
}
const mutations = {
    getList(state, payload) {
        let arr = JSON.parse(JSON.stringify(payload));
        arr.CoverPhoto = arr.CoverPhoto.includes("{0}") ? arr.CoverPhoto.replace("{0}", "3") : arr.CoverPhoto;
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
// carId: this.Alllist.list.car_id,
// AliasName: this.Alllist.AliasName,
// Picture: this.Alllist.Picture,
// carName: this.Alllist.list.car_name