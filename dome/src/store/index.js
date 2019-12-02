import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    nav: [],
    isMask: false
  },
  mutations: {
    getList(state, actions) {
      state.list = actions.list;
    },
    getNav(state, actions) {
      state.nav = actions.nav;
    },
    edit(state, actions) {
      state.isMask = actions;
    }
  },
  actions: {
    loadList(store) {
      axios.get("https://baojia.chelun.com/v2-car-getMasterBrandList.html").then(res => {
        store.commit({ type: "getList", list: res.data.data })
      })
    },
    loadNav(store, actions) {
      axios.get(`https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=${actions}`).then(res => {
        store.commit({ type: "getNav", nav: res.data.data })
      })
    }
  }
})
