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
    path: '/xiang',
    name: 'xiang',
    component: () => import('../views/xiang')
  },
  {
    path:'/mask',
    component:()=>import('../views/pictures/ban.vue')
  },
  {
    path:'/picture',
    component:()=>import('../views/pictures')
  },
  {
    path:'/',
    redirect:'/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
