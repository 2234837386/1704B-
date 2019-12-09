import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueLazyload from "vue-lazyload"
import './fonts/iconfont.css'
Vue.component("Floor", () => import("@/components/Floor"))
Vue.component("aMask", () => import("@/components/Mask"))
Vue.config.productionTip = false
Vue.use(vueLazyload, {
  preload: 1.3,
  error: "/1.jpg",
  loading: "/favicon.ico",
  attempt: 1
})
Vue.prototype.$getUrl = function (url) {
  let newurl = url
  let str = newurl.slice(7);
  return "https://images.weserv.nl?url=" + str;
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
