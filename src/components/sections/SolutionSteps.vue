<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SectionBlock from './SectionBlock.vue'

interface Step { title: string; description: string }
interface LinkItem { label: string; to: string }

defineProps<{
  headline: string
  steps: Step[]
  supportingLine?: string
  twoColumns?: Step[]
  closingLines?: string[]
  links?: LinkItem[]
}>()
</script>

<template>
  <SectionBlock :headline="headline" alt>
    <p v-if="supportingLine" class="solution-supporting">{{ supportingLine }}</p>

    <ol v-reveal.stagger="{ stagger: 0.12, y: 24 }" class="solution-steps">
      <li v-for="(s, i) in steps" :key="s.title" class="solution-steps__item">
        <span class="solution-steps__num">{{ i + 1 }}</span>
        <div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.description }}</p>
        </div>
      </li>
    </ol>

    <div v-if="twoColumns?.length" v-reveal.stagger="{ stagger: 0.14, y: 28 }" class="two-col solution-two-col">
      <div v-for="col in twoColumns" :key="col.title" class="card">
        <h3>{{ col.title }}</h3>
        <p>{{ col.description }}</p>
      </div>
    </div>

    <div v-if="closingLines?.length" class="solution-closing">
      <p v-for="line in closingLines" :key="line">{{ line }}</p>
    </div>

    <div v-if="links?.length" class="solution-links">
      <RouterLink v-for="l in links" :key="l.to" :to="l.to" class="btn btn--ghost">
        {{ l.label }} <svg class="btn__caret" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
      </RouterLink>
    </div>
  </SectionBlock>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.solution-supporting {
  color: $color-text-muted;
  max-width: 820px;
}

// ─── Numbered Steps ──────────────────────────────────────────────────────────
.solution-steps {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;

  &__item {
    display: flex;
    gap: $space-5;
    position: relative;
    padding-bottom: $space-8;

    // Connector line between steps
    &:not(:last-child)::after {
      content: '';
      position: absolute;
      left: 19px; // centre of the 40px badge
      top: 42px;
      bottom: 0;
      width: 1px;
      background: rgba($color-navy, 0.12);
    }

    &:last-child { padding-bottom: 0; }

    h3 {
      color: $color-navy;
      margin: 0 0 $space-1;
      font-size: $font-size-md;
      font-weight: $font-weight-semibold;
    }
    p { margin: 0; color: $color-text; line-height: 1.6; }
  }

  &__num {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: $radius-full;
    background: $color-navy;
    color: $color-white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: $font-weight-bold;
    position: relative;
    z-index: 1;
  }
}

// ─── Two-column info panels (non-interactive) ─────────────────────────────────
.solution-two-col {
  .card {
    border: none;
    border-left: 3px solid $color-teal-deep;
    border-radius: 0;
    background: transparent;
    padding: $space-1 $space-5;
    box-shadow: none;
    cursor: default;

    &:hover {
      transform: none;
      box-shadow: none;
      border-color: $color-teal-deep;
    }

    h3 {
      color: $color-navy;
      margin: 0 0 $space-1;
      font-size: $font-size-base;
      font-weight: $font-weight-semibold;
    }
    p { margin: 0; color: $color-text; font-size: $font-size-sm; line-height: 1.55; }
  }
}

// ─── Closing lines ────────────────────────────────────────────────────────────
.solution-closing {
  display: flex;
  flex-direction: column;
  gap: $space-3;
  padding: $space-6;
  background: $color-white;
  border-radius: $radius-md;

  p { margin: 0; font-weight: $font-weight-medium; color: $color-navy; }
}

.solution-links {
  display: flex;
  flex-wrap: wrap;
  gap: $space-3;
}
</style>
