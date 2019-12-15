// import { getMasterList } from '@/servicer/index'
// // 存放数据
// const state = {
//     cartList: [], //渲染存放城市全国城市的列表  
// }
// const mutations = {
//     getList(state, payload) {
//         state.cartList = payload
//     },
// }
// const actions = {
//     async getMasterList({ commit }) {
//         let res = await getMasterList()
//         commit('getList', res)
//         // console.log(res);
//     }
// }
// export default {
//     namespaced: true,
//     state,
//     mutations,
//     actions
// }

import { getCartList, getCityList, getCityListTwo } from "@/servicer/index"
const state = {
    cartList: {},
    cityList: [],
    cityListTwo: [],
    isShow: false,
    isBlock: false,
    positionsCity: {}
}
const mutations = {
    setCartList(state, payload) {
        state.cartList =payload;
    },
    setCityList(state, payload) {
        state.cityList = payload;
    },
    setCityListTwo(state, payload) {
        state.cityListTwo = payload;
    },
    editShow(state, payload) {
        state.isShow = payload.type;
    },
    editBlock(state, payload) {
        state.isBlock = payload.type;
    },
    editCity(state, payload) {
        state.positionsCity = payload;
    }
}
const actions = {
    async getCartList({ commit }) {
        let res = await getCartList();
        commit("setCartList", res)
    },
    async getCityList({ commit }) {
        let res = await getCityList();
        commit("setCityList", res)
    },
    async getCityListTwo({ commit }, payload) {
        let res = await getCityListTwo(payload);
        commit("setCityListTwo", res)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}