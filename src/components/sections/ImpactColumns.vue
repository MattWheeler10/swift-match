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
    <div v-reveal.stagger="{ stagger: 0.12, y: 32 }" class="impact-grid">
      <div v-for="col in columns" :key="col.title" class="impact-col">
        <div class="impact-col__header">
          <span class="impact-col__tag">{{ col.title }}</span>
        </div>
        <ul class="impact-col__list">
          <li v-for="item in col.items" :key="item" class="impact-col__item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>

    <p v-if="closingLine" class="impact-closing">{{ closingLine }}</p>

    <div v-if="link" class="impact-cta">
      <RouterLink :to="link.to" class="btn btn--primary">
        {{ link.label }}
        <svg class="btn__caret" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
      </RouterLink>
    </div>
  </SectionBlock>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

// ─── Three-column grid ────────────────────────────────────────────────────────
.impact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $space-6;

  @media (max-width: 900px) { grid-template-columns: 1fr; }
}

// ─── Individual column panel ──────────────────────────────────────────────────
.impact-col {
  background: $color-white;
  border: 1px solid $color-border;
  border-top: 3px solid $color-teal-deep;
  border-radius: 0 0 $radius-lg $radius-lg;
  padding: $space-8 $space-6;
  display: flex;
  flex-direction: column;
  gap: $space-5;

  // No hover — explicitly static
  transform: none !important;
  box-shadow: none !important;

  &__header {
    display: flex;
    align-items: center;
    gap: $space-3;
  }

  &__tag {
    display: inline-block;
    font-size: $font-size-xs;
    font-weight: $font-weight-bold;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: $color-teal-deep;
    background: $color-teal-soft;
    border-radius: $radius-sm;
    padding: $space-1 $space-3;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: $space-3;
  }

  &__item {
    display: flex;
    align-items: flex-start;
    gap: $space-3;
    font-size: $font-size-sm;
    color: $color-text;
    line-height: 1.55;

    &::before {
      content: '';
      flex-shrink: 0;
      margin-top: 0.45em;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: $color-teal-deep;
    }
  }
}

// ─── Closing callout ──────────────────────────────────────────────────────────
.impact-closing {
  padding: $space-4 $space-5;
  background: $color-teal-soft;
  border-left: 3px solid $color-teal-deep;
  border-radius: 0 $radius-sm $radius-sm 0;
  font-weight: $font-weight-medium;
  color: $color-navy;
  font-size: $font-size-sm;
  margin: 0;
}

// ─── Self-sizing CTA ──────────────────────────────────────────────────────────
.impact-cta {
  display: flex;
}
</style>
