<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SectionBlock from './SectionBlock.vue'
import type { PathwayStage } from '@/content/types'

defineProps<{
  headline: string
  intro?: string
  stages: Array<string | PathwayStage>
  supportingLine?: string
  closingLine?: string
  links?: Array<{ label: string; to: string }>
  alt?: boolean
}>()

const isString = (s: unknown): s is string => typeof s === 'string'
</script>

<template>
  <SectionBlock :headline="headline" :alt="alt">
    <p v-if="intro" class="pathway-intro">{{ intro }}</p>

    <!-- String stages: bold numbered grid -->
    <template v-if="stages.length && isString(stages[0])">
      <div v-reveal.stagger="{ stagger: 0.07, y: 20 }" class="pathway-flow">
        <div
          v-for="(s, i) in stages as string[]"
          :key="s"
          class="pathway-stage"
          :class="{ 'pathway-stage--outcome': i === stages.length - 1 }"
        >
          <span class="pathway-stage__num">{{ String(i + 1).padStart(2, '0') }}</span>
          <span class="pathway-stage__label">{{ s }}</span>
        </div>
      </div>
    </template>

    <!-- PathwayStage objects: titled list -->
    <ol v-else v-reveal.stagger="{ stagger: 0.1, y: 20 }" class="pathway-stages">
      <li v-for="(s, i) in stages as PathwayStage[]" :key="s.title">
        <span class="pathway-stages__num">{{ i + 1 }}</span>
        <div>
          <h3>{{ s.title }}</h3>
          <p v-if="s.description">{{ s.description }}</p>
        </div>
      </li>
    </ol>

    <p v-if="supportingLine" class="pathway-supporting">{{ supportingLine }}</p>

    <p v-if="closingLine" class="pathway-closing">{{ closingLine }}</p>

    <div v-if="links?.length" class="pathway-links">
      <RouterLink
        v-for="(l, i) in links"
        :key="l.to"
        :to="l.to"
        :class="['btn', i === 0 ? 'btn--primary' : 'btn--outline']"
      >
        {{ l.label }}
        <svg class="btn__caret" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
      </RouterLink>
    </div>
  </SectionBlock>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.pathway-intro { color: $color-text-muted; max-width: 820px; }

// ─── Bold numbered grid ───────────────────────────────────────────────────────
.pathway-flow {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: $color-border;
  border-radius: $radius-lg;
  overflow: hidden;
  border: 1px solid $color-border;

  @media (max-width: 768px) { grid-template-columns: repeat(2, 1fr); }
}

.pathway-stage {
  background: $color-white;
  padding: $space-8 $space-6;
  display: flex;
  flex-direction: column;
  gap: $space-2;

  &__num {
    font-family: $font-family-display;
    font-weight: $font-weight-bold;
    font-size: clamp(2rem, 3vw + 0.5rem, 2.75rem);
    line-height: 1;
    letter-spacing: -0.04em;
    background: linear-gradient(180deg, $color-navy 0%, $color-navy-light 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__label {
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: $color-navy;
    line-height: 1.3;
  }

  &--outcome {
    background: $color-teal-soft;

    .pathway-stage__num {
      background: $color-teal-deep;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .pathway-stage__label {
      color: $color-teal-deep;
      font-weight: $font-weight-bold;
    }
  }
}

// ─── Titled stage list (PathwayStage variant) ─────────────────────────────────
.pathway-stages {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: $space-5;

  li {
    display: flex;
    gap: $space-4;

    h3 { margin: 0 0 $space-1; color: $color-navy; font-size: $font-size-md; }
    p { margin: 0; color: $color-text; }
  }

  &__num {
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    border-radius: $radius-full;
    background: $color-navy;
    color: $color-white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: $font-weight-bold;
    font-size: $font-size-sm;
  }
}

// ─── Supporting & closing ─────────────────────────────────────────────────────
.pathway-supporting { color: $color-text-muted; max-width: 820px; }

.pathway-closing {
  padding: $space-4 $space-5;
  background: $color-teal-soft;
  border-left: 3px solid $color-teal-deep;
  border-radius: 0 $radius-sm $radius-sm 0;
  font-weight: $font-weight-medium;
  color: $color-navy;
  font-size: $font-size-sm;
  margin: 0;
}

// ─── Links ────────────────────────────────────────────────────────────────────
.pathway-links { display: flex; flex-wrap: wrap; gap: $space-3; }
</style>
