import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from "vuex/dist/logger"
import home from "./modules/home"
import detail from './modules/detail'
import carimage from './modules/carimage'
import carcolor from './modules/carcolor'
import cart from './modules/cart'
import city from './modules/city'
import form from './modules/form'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    home,
    detail,
    carimage,
    carcolor,
    city,
    cart,
    form

  },
  plugins: [
    createLogger()
  ]
})
