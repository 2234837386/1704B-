import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // path: '/home',
      name: 'home',
      component: () => import("@/views/Home")
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import("@/views/Detail")
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import("@/views/Cart")
    }
  ]
})
