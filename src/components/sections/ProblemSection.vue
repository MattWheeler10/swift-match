<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SectionBlock from './SectionBlock.vue'

defineProps<{
  headline: string
  points: string[]
  supportingLines?: string[]
  closingLine?: string
  link?: { label: string; to: string }
}>()
</script>

<template>
  <SectionBlock :headline="headline">
    <ul class="problem-list">
      <li v-for="p in points" :key="p">{{ p }}</li>
    </ul>
    <div v-if="supportingLines?.length" class="problem-supporting">
      <p v-for="line in supportingLines" :key="line">{{ line }}</p>
    </div>
    <p v-if="closingLine" class="problem-closing">{{ closingLine }}</p>
    <RouterLink v-if="link" :to="link.to" class="btn btn--ghost problem-link">
      {{ link.label }} →
    </RouterLink>
  </SectionBlock>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.problem-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: $space-3;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: flex-start;
    gap: $space-3;
    font-size: $font-size-md;
    line-height: 1.55;
    color: $color-text;

    &::before {
      content: '';
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: $color-teal-deep;
      flex-shrink: 0;
      margin-top: 0.44em;
    }
  }
}

.problem-supporting {
  display: flex;
  flex-direction: column;
  gap: $space-3;
  color: $color-text-muted;
}

.problem-closing {
  font-weight: $font-weight-bold;
  color: $color-navy;
  font-size: $font-size-md;
}

.problem-link { align-self: flex-start; }
</style>
