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

import { getCartList, getCityList, getCityListTwo, getIp } from "@/servicer/index"
const state = {
    cartList: {},
    cityList: [],
    cityListTwo: [],
    isShow: false,
    isBlock: false,
    isYear: false,
    positionsCity: {}
}
const mutations = {
    setCartList(state, actions) {
        state.cartList = actions;
    },
    setCityList(state, actions) {
        state.cityList = actions;
    },
    setCityListTwo(state, actions) {
        state.cityListTwo = actions;
    },
    editShow(state, actions) {
        state.isShow = actions.type;
    },
    editBlock(state, actions) {
        state.isBlock = actions.type;
    },
    editYear(state, actions) {
        state.isYear = actions.type;
    },
    setIp(state, actions) {
        state.positionsCity = actions;
    },
    editCity(state, actions) {
        let { CityID, CityName } = actions;
        state.positionsCity = { CityID, CityName };
    }
}
const actions = {
    async getCityList({ commit }) {
        let res = await getCityList();
        commit("setCityList", res)
    },
    async getCityListTwo({ commit }, actions) {
        let res = await getCityListTwo(actions);
        commit("setCityListTwo", res)
    },
    async getIp({ commit }) {
        let res = await getIp();
        commit("setIp", res)
    },
    async getCartList({ commit }, actions) {
        let res = await getCartList(
            actions.CarID ? actions.CarID : 131315,
            actions.CityID ? actions.CityID : 201
        );
        commit("setCartList", res)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}