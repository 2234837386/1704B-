import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from "vuex/dist/logger";
import cart from "./modules/cart.js";
import detail from "./modules/detail.js";
import home from "./modules/home.js";
Vue.use(Vuex)
export default new Vuex.Store({
<<<<<<< HEAD
    modules: {
        cart,
        detail,
        home
    },
    plugins: [createLogger()]
=======
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
>>>>>>> 15113ae0e74ab1761ba5f2c4d0af5e1d12e531d1
})
