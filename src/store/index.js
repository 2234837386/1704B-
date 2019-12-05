import Vue from 'vue'
import Vuex from 'vuex'

import createLogger from "vuex/dist/logger"
import home from "./modules/home"
import detail from './modules/detail'
import carimage from './modules/carimage'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    detail,
    carimage
  },
  plugins: [
    createLogger()
  ]
})
