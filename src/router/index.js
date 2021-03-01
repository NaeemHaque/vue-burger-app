import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'
import Products from '../components/products'
import Recipe from '../components/recipe'
import About from '../components/about'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/recipe',
    name: 'Recipe',
    component: Recipe
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
