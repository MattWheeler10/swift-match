<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { CTA } from '@/content/types'

defineProps<{ ctas: CTA[] }>()
</script>

<template>
  <div class="cta-buttons">
    <template v-for="(cta, i) in ctas" :key="i">
      <RouterLink
        v-if="cta.to"
        :to="cta.to"
        :class="['btn', `btn--${cta.variant ?? 'primary'}`]"
      >
        {{ cta.label }}
      </RouterLink>
      <a
        v-else-if="cta.href"
        :href="cta.href"
        :class="['btn', `btn--${cta.variant ?? 'primary'}`]"
      >
        {{ cta.label }}
      </a>
    </template>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: $space-4;

  @media (max-width: 640px) {
    flex-direction: column;

    .btn {
      width: 100%;
    }
  }
}
</style>
