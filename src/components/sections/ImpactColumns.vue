<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SectionBlock from './SectionBlock.vue'
import type { Column } from '@/content/types'

defineProps<{
  headline: string
  columns: Column[]
  closingLine?: string
  link?: { label: string; to: string }
}>()
</script>

<template>
  <SectionBlock :headline="headline">
    <div v-reveal.stagger="{ stagger: 0.12, y: 32 }" class="three-col">
      <div v-for="col in columns" :key="col.title" class="card impact-col">
        <h3>{{ col.title }}</h3>
        <ul>
          <li v-for="item in col.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
    <p v-if="closingLine" class="impact-closing">{{ closingLine }}</p>
    <RouterLink v-if="link" :to="link.to" class="btn btn--ghost">{{ link.label }} →</RouterLink>
  </SectionBlock>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.impact-col {
  h3 { color: $color-navy; margin: 0 0 $space-3; font-size: $font-size-md; }

  ul {
    list-style: disc inside;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: $space-2;

    li { color: $color-text; }
  }
}

.impact-closing {
  font-weight: $font-weight-medium;
  color: $color-navy;
}
</style>
