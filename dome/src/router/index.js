import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
      path:'/cart',
      component:()=>import('../views/Cart.vue')
    },
    {
      path:'*',
      redirect: '/cart'
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
