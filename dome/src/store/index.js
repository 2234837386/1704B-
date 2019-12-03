import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    nav: [],
    isMask: false,
    // 省市id
    id: '',
    // 渲染省市
    cityList: [],
    // 城市列表
    cityIndex: []

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
    },
    getId(state, actions) {
      state.id = actions;
    },
    //改变城市列表的唯一的方法
    getCityList(state, actions) {
      state.cityList = actions.cityList;
    },
    getCityIndex(state, actions) {
      state.cityIndex = actions.cityIndex;
      console.log(state.cityIndex)
    }
  },
  actions: {
    loadList(store) {
       this.$http.get("https://baojia.chelun.com/v2-car-getMasterBrandList.html").then(res => {
        store.commit({ type: "getList", list: res.data.data })
      })
    },
    // 渲染城市的列表
    gt(store) {
<<<<<<< HEAD
      this.$http.get("https://baojia.chelun.com/v1-city-alllist.html").then(res => {
        // console.log(res)
=======
      // this.$http
      axios.get("https://baojia.chelun.com/v1-city-alllist.html").then(res => {
>>>>>>> f8ca6833ae20077d25424d47bd21123874a3adab
        store.commit({ type: "getCityList", cityList: res.data.data })

      })
    },
    loadNav(store, actions) {
<<<<<<< HEAD
      this.$http.get(`https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=${actions}`).then(res => {
=======
      // this.$http
      axios.get(`https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=${actions}`).then(res => {
>>>>>>> f8ca6833ae20077d25424d47bd21123874a3adab
        store.commit({ type: "getNav", nav: res.data.data })
      })
    },
    cityL(store, payload) {
      let id = this.state.id;
      console.log(id);
<<<<<<< HEAD
      this.$http.get(`https://baojia.chelun.com/v1-city-alllist.html`, { params: { provinceid: id } }).then(res => {
=======
      // this.$http
      axios.get(`https://baojia.chelun.com/v1-city-alllist.html`, { params: { provinceid: id } }).then(res => {
>>>>>>> f8ca6833ae20077d25424d47bd21123874a3adab
        console.log(res)
        store.commit({ type: 'getCityIndex', cityIndex: res.data.data })
      })
    }
  }
})
