import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Xiang from '../views/xiang'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',

    component: Home
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/detail')
  },
 
  {
    path: '/',
    redirect: "/home"

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
