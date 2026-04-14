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
    <ul v-reveal.stagger="{ stagger: 0.06, y: 12 }" class="pilot-points">
      <li v-for="p in points" :key="p">{{ p }}</li>
    </ul>
    <p v-if="supportingLine" class="pilot-supporting">{{ supportingLine }}</p>
    <p v-if="closingLine" class="pilot-closing">{{ closingLine }}</p>
    <CtaButtons v-if="cta" :ctas="[cta]" />
  </SectionBlock>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.pilot-points {
  list-style: disc inside;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: $space-3;

  @media (max-width: 768px) { grid-template-columns: 1fr; }

  li { color: $color-text; }
}

.pilot-supporting { color: $color-text-muted; }
.pilot-closing { color: $color-navy; font-weight: $font-weight-medium; }
</style>
