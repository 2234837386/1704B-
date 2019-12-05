import Vue from 'vue'
import Vuex from 'vuex'

import createLogger from "vuex/dist/logger"
import home from "./modules/home"
import detail from './modules/detail'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    detail
  },
  plugins: [
    createLogger()
  ]
})
