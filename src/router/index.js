import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import("@/views/Home")
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import("@/views/detail")
  },
  {
    path: '/picture',
    name: "picture",
    component: () => import("@/views/picture")
  },
  {
    path: '/cart',
    name: "cart",
    component: () => import("@/views/Cart")
  },
  {
    path: "/",
    redirect: "/home"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
