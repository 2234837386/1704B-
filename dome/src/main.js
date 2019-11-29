import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelazyload from "vue-lazyload"
// import Mask from "@/components/Mask.vue"
// import Floor from "@/components/Floor.vue"

Vue.config.productionTip = false;
Vue.component("aMask", () => import("@/components/Mask.vue"));
Vue.component("Floor", () => import("@/components/Floor.vue"));

Vue.use(Vuelazyload, {
  preload: 1.3,
  error: "/1.jpg",
  loading: "/favicon.ico",
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
