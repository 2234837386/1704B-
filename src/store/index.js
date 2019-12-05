import Vue from 'vue'
import Vuex from 'vuex'

import createLogger from "vuex/dist/logger"
import home from "./modules/home"
import detail from './modules/detail'
import cart from './modules/cart'
import city from './modules/city'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    detail,
    city,
    cart
  },
  plugins: [
    createLogger()
  ]
})
