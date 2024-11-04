import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/1',
      name: '',
      component: () => import('@/views/1 CreateProject/index.vue'),
      // beforeEnter() {
      //   window.scrollTo(0, 0)
      // },
    },
    {
      path: '/2/:id?',
      name: '',
      component: () => import('@/views/2 CoreAPI/index.vue'),
    },
    {
      path: '/3/:id?',
      name: '',
      component: () => import('@/views/3 AdvancedAPI/index.vue'),
    },
    {
      path: '/4',
      name: '',
      component: () => import('@/views/4 LifeCycle/index.vue'),
    },
    {
      path: '/5/:id?',
      name: '',
      component: () => import('@/views/5 DependencyInjection/index.vue'),
    },
    {
      path: '/6/:id?',
      name: '',
      component: () => import('@/views/6 Pinia/index.vue'),
    },
  ]
})

export default router
