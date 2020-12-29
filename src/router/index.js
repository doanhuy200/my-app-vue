import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home'
import Products from '../components/Products'
import About from '../components/About'
import Error from '../components/Error'

const routes = [
  { path: '/', component: Home },
  { path: '/Products', component: Products },
  { path: '/about', component: About },
  { path: '/:pathMatch(.*)*', component:Error },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router