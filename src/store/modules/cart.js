<<<<<<< HEAD
import { getCartList, getCityList, getCityListTwo, getIp } from "@/servicer/index"
=======
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
>>>>>>> 15113ae0e74ab1761ba5f2c4d0af5e1d12e531d1
const state = {
    cartList: {},
    cityList: [],
    cityListTwo: [],
    isShow: false,
    isBlock: false,
<<<<<<< HEAD
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
=======
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
>>>>>>> 15113ae0e74ab1761ba5f2c4d0af5e1d12e531d1
    async getCityList({ commit }) {
        let res = await getCityList();
        commit("setCityList", res)
    },
<<<<<<< HEAD
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
=======
    async getCityListTwo({ commit }, payload) {
        let res = await getCityListTwo(payload);
        commit("setCityListTwo", res)
>>>>>>> 15113ae0e74ab1761ba5f2c4d0af5e1d12e531d1
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}