import Vue from 'vue'
import Vuex from 'vuex'

import createLogger from "vuex/dist/logger"
// 首先引入子模块
import cart from './modules/cart'
import city from './modules/city'

Vue.use(Vuex)

export default new Vuex.Store({
   modules: {
      cart,
      city
   },
   plugins: [createLogger()]

})
