import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' // Import renamed component

const routes = [
  {
    path: '/',
    name: 'HomeView', // Rename route name to match the component
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
