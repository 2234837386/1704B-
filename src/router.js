import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import("@/views/Home")
    },
    {
      path: '/detail/:SerialID',
      name: 'detail',
      component: () => import("@/views/Detail")
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import("@/views/Cart")
    },
    {
      path: "/",
      redirect: "/home"
    }
  ]
})
export default router;