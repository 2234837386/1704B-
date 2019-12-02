import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './fonts/iconfont.css'
import Vuelazyload from "vue-lazyload"

Vue.config.productionTip = false;
Vue.component("aMask", () => import("@/components/Mask.vue"));
Vue.component("Floor", () => import("@/components/Floor.vue"));

Vue.use(Vuelazyload, {
  preload: 1.3,
  error: "/1.jpg",
  loading: "/favicon.ico",
  attempt: 1
})

Vue.config.productionTip = false
Vue.prototype.$http = axios


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
