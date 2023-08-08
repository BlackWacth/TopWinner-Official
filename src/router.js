// router.js

import { createRouter, createWebHistory } from 'vue-router'
import Main from './components/Main.vue'
import AboutUs from './components/AboutUs.vue'
import PrivacyPolicy from './components/PrivacyPolicy.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/about',
    name: 'About',
    component: AboutUs
  },
  {
    path: '/privacyPolicy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router