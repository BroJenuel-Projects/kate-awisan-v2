import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from '../views/Portfolio/Portfolio.vue'

const routes = [
  {
    path: '/',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutMe/AboutMe.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('./../views/Contact/ContactMe.vue')
  },
  {
    path: '/view/:id',
    name: 'View',
    component: () => import('./../views/Portfolio/view/View.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
