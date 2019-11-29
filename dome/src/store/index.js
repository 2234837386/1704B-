import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    getList(state, actions) {
      state.list = actions.list;
    }
  },
  actions: {
    loadList(store) {
      axios.get("https://baojia.chelun.com/v2-car-getMasterBrandList.html").then(res => {
        store.commit({ type: "getList", list: res.data.data })
      })
    }
  },
  modules: {
  }
})
