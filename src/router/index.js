import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'
import RecipesIndex from '../views/RecipesIndex.vue'
import RecipesNew from '../views/RecipesNew.vue'
import RecipesShow from '../views/RecipesShow.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recipes',
    name: 'recipes-index',
    component: RecipesIndex
  },
  {
    path: '/recipes/39',
    name: 'recipes-show',
    component: RecipesShow
  },
  {
    path: '/recipes/new',
    name: 'recipes-new',
    component: RecipesNew
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogoutView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
