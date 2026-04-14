<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { ScrollTrigger } from '@/directives/reveal'
import DefaultLayout from '@/components/layout/DefaultLayout.vue'

const router = useRouter()

onMounted(() => {
  window.scrollTo(0, 0)
  requestAnimationFrame(() => ScrollTrigger.refresh())
})

router.afterEach(async () => {
  await nextTick()
  window.scrollTo(0, 0)
  requestAnimationFrame(() => ScrollTrigger.refresh())
})
</script>

<template>
  <DefaultLayout>
    <RouterView />
  </DefaultLayout>
</template>
