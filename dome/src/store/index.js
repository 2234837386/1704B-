import Vue from 'vue'
import Vuex from 'vuex'


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
      this.$http.get("https://baojia.chelun.com/v1-city-alllist.html").then(res => {
        // console.log(res)
        store.commit({ type: "getCityList", cityList: res.data.data })

      })
    },
    loadNav(store, actions) {
      this.$http.get(`https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=${actions}`).then(res => {
        store.commit({ type: "getNav", nav: res.data.data })
      })
    },
    cityL(store, payload) {
      let id = this.state.id;
      console.log(id);
      this.$http.get(`https://baojia.chelun.com/v1-city-alllist.html`, { params: { provinceid: id } }).then(res => {
        console.log(res)
        store.commit({ type: 'getCityIndex', cityIndex: res.data.data })
      })
    }
  }
})
