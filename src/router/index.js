import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'
import Products from '../components/products'
import Recipe from '../components/recipe'
import About from '../components/about'
import RecipeDetails from '../components/recipeDetails'
import Signin from '../components/user/signin'
import Signup from '../components/user/signup'

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
    path: '/recipe/:id',
    nmame: 'RecipeDetails',
    props: true,
    component: RecipeDetails
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
