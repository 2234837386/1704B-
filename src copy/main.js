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
Vue.prototype.$editUrl = function (url) {
  let newurl = JSON.stringify(url);
  let str = JSON.parse(newurl).replace('{0}', '3');
  return str;
}
Vue.prototype.$secondUrl = function (ind, data, id) {
  let len = data[id] && data[id].List.length;
  let zero = data[id] && data[id].List[ind] && data[id].List[ind].Url;
  let one = data[id] && data[id].List[ind % data[id].List.length] && data[id].List[ind % data[id].List.length].Url;
  let url = ind >= len ? one : zero;
  let urlstr = url && url.replace("{0}", "3");
  return urlstr;
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
