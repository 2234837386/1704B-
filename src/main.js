import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueLazyload from "vue-lazyload"

Vue.config.productionTip = false
Vue.use(vueLazyload, {
  preload: 1.3,
  error: "/1.jpg",
  loading: "/favicon.ico",
  attempt: 1
})
Vue.prototype.$Sort = function (data) {
  return data && data.sort((a, b) => {
    if (a["exhaust"] === b["exhaust"]) {
      if (a["max_power"] === b["max_power"]) {
        return a["inhale_type "] - b["max_power"]
      } else {
        return a["max_power"] - b["max_power"]
      }
    } else {
      return a["exhaust"] - b["exhaust"]
    }
  })
}
Vue.prototype.$url = function (url) {
  if (url && url.indexOf("{0}") === -1) return url;
  let str = url && url.replace("{0}", "3");
  return str;
}
Vue.prototype.$push = function (data) {
  data = data && data.map(item => {
    item.keys = `${item.exhaust_str}${item.max_power_str} ${item.inhale_type}`;
    return item;
  })
  let newList = [];
  data && data.forEach(item => {
    let index = newList.findIndex(value => value.key === item.keys);
    if (index !== -1) {
      newList[index].list.push(item);
    } else {
      newList.push({
        key: item.keys,
        list: [item]
      })
    }
  });
  return newList;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')