import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from "vuex/dist/logger";
import cart from "./modules/cart.js";
import detail from "./modules/detail.js";
import home from "./modules/home.js";
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        cart,
        detail,
        home
    },
    plugins: [createLogger()]
})
