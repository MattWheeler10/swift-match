import { createRouter, createWebHistory } from 'vue-router'

if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) return { el: to.hash, top: 0 }
    if (savedPosition) return savedPosition
    return { top: 0, left: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/GlobalHome.vue'),
    },
    {
      path: '/healthcare',
      name: 'healthcare',
      component: () => import('@/views/HealthcarePage.vue'),
    },
    {
      path: '/workforce-model',
      name: 'workforce-model',
      component: () => import('@/views/WorkforceModelPage.vue'),
    },
    {
      path: '/governance',
      name: 'governance',
      component: () => import('@/views/GovernancePage.vue'),
    },
    {
      path: '/impact',
      name: 'impact',
      component: () => import('@/views/ImpactPage.vue'),
    },
    {
      path: '/platform',
      name: 'platform',
      component: () => import('@/views/PlatformPage.vue'),
    },
    {
      path: '/pilot',
      name: 'pilot',
      component: () => import('@/views/PilotPage.vue'),
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('@/views/DemoPage.vue'),
    },
  ],
})

export default router
