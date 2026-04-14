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
      path: '/solution',
      name: 'solution',
      component: () => import('@/views/SolutionPage.vue'),
    },
    {
      path: '/how-it-works',
      name: 'how-it-works',
      component: () => import('@/views/HowItWorksPage.vue'),
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
