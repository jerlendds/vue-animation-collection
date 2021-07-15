import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing'
  }
]

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 't-green',
  base: process.env.BASE_URL,
  routes
})

export default router
