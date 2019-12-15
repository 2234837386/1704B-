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
    path: '/color',
    name: "color",
    component: () => import("../views/color")
  },
   {
    path: '/carlist',
    name: "carlist",
    component: () => import("../views/carlist")
  },
  {
    path: '/cart',
    name: "cart",
    component: () => import("../views/Cart.vue")
  },

  {
    path: "*",
    redirect: "/home"
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
