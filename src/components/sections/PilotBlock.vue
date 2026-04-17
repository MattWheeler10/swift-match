<script setup lang="ts">
import SectionBlock from './SectionBlock.vue'
import CtaButtons from './CtaButtons.vue'
import type { CTA } from '@/content/types'

defineProps<{
  headline: string
  points: string[]
  supportingLine?: string
  closingLine?: string
  cta?: CTA
  alt?: boolean
}>()
</script>

<template>
  <SectionBlock :headline="headline" :alt="alt">
    <div v-reveal.stagger="{ stagger: 0.07, y: 16 }" class="pilot-grid">
      <div v-for="p in points" :key="p" class="pilot-item">
        <span class="pilot-item__icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </span>
        <span class="pilot-item__text">{{ p }}</span>
      </div>
    </div>

    <p v-if="supportingLine" class="pilot-supporting">{{ supportingLine }}</p>
    <p v-if="closingLine" class="pilot-closing">{{ closingLine }}</p>

    <div v-if="cta" class="pilot-cta">
      <CtaButtons :ctas="[cta]" />
    </div>
  </SectionBlock>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

// ─── Points grid ──────────────────────────────────────────────────────────────
.pilot-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: $space-3;

  @media (max-width: 640px) { grid-template-columns: 1fr; }
}

.pilot-item {
  display: flex;
  align-items: flex-start;
  gap: $space-3;
  padding: $space-4 $space-5;
  background: $color-white;
  border: 1px solid $color-border;
  border-left: 3px solid $color-teal-deep;
  border-radius: 0 $radius-md $radius-md 0;

  &__icon {
    flex-shrink: 0;
    margin-top: 1px;
    width: 20px;
    height: 20px;
    border-radius: $radius-full;
    background: $color-teal-soft;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-teal-deep;

    svg { width: 11px; height: 11px; }
  }

  &__text {
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: $color-navy;
    line-height: 1.45;
  }
}

// ─── Supporting line ──────────────────────────────────────────────────────────
.pilot-supporting {
  color: $color-text;
  max-width: 760px;
}

.pilot-closing {
  font-weight: $font-weight-medium;
  color: $color-navy;
}

// ─── Self-sizing CTA ──────────────────────────────────────────────────────────
.pilot-cta {
  display: flex;
}
</style>
