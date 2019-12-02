import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/details/:id',
    name: 'details',
    component: () => import('../views/details')
  },
  {
    path: '/mask',
    component: () => import('../views/pictures/ban.vue')
  },
  {
    path: '/picture',
    component: () => import('../views/pictures')
  },
  {
    path: '/cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router