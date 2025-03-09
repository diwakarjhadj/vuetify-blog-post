import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreatePost from '../views/CreatePost.vue'
import EditPost from '../views/EditPost.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/create',
      component: CreatePost
    },
    {
      path: '/edit/:id',
      component: EditPost
    }
  ]
})