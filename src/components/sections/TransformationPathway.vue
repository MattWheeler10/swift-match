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

    <template v-if="stages.length && isString(stages[0])">
      <div v-reveal="{ selector: '.flow__step, .flow__arrow', stagger: 0.08, y: 16 }" class="flow">
        <template v-for="(s, i) in stages as string[]" :key="s">
          <span class="flow__step">{{ s }}</span>
          <span v-if="i < stages.length - 1" class="flow__arrow">→</span>
        </template>
      </div>
    </template>

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
      <RouterLink v-for="l in links" :key="l.to" :to="l.to" class="btn btn--ghost">
        {{ l.label }} →
      </RouterLink>
    </div>
  </SectionBlock>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.pathway-intro { color: $color-text-muted; max-width: 820px; }

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

.pathway-supporting { color: $color-text-muted; }

.pathway-closing {
  font-weight: $font-weight-medium;
  color: $color-navy;
}

.pathway-links { display: flex; flex-wrap: wrap; gap: $space-3; }
</style>
