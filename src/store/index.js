import Vue from 'vue'
import Vuex from 'vuex'

import createLogger from "vuex/dist/logger"
// 首先引入子模块
import home from './modules/home'
import city from './modules/city'

Vue.use(Vuex)

export default new Vuex.Store({
     modules:{
        home,
        city
     },
     plugins:[createLogger()]
  
})
