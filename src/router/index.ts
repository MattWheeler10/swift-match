import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/GlobalHome.vue'),
    },
    {
      path: '/hospitals',
      name: 'hospitals',
      component: () => import('@/views/HospitalsHome.vue'),
    },
    {
      path: '/care-homes',
      name: 'care-homes',
      component: () => import('@/views/CareHomesHome.vue'),
    },
    {
      path: '/domiciliary',
      name: 'domiciliary',
      component: () => import('@/views/DomiciliaryHome.vue'),
    },
  ],
})

export default router
