<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionBlock from './SectionBlock.vue'
import type { Metric } from '@/content/types'

const props = defineProps<{
  headline: string
  metrics: Metric[]
  supportingLine?: string
  pressureLine?: string
  alt?: boolean
}>()

const gridStyle = computed(() => ({
  '--proof-cols': props.metrics.length,
}))

gsap.registerPlugin(ScrollTrigger)

const gridRef = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

onMounted(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced || !gridRef.value) return

  ctx = gsap.context(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.proof-metric')

    gsap.from(cards, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: gridRef.value,
        start: 'top 80%',
        once: true,
      },
    })

    gsap.from('.proof-metric__value', {
      scale: 0.85,
      duration: 0.9,
      ease: 'back.out(1.6)',
      stagger: 0.12,
      scrollTrigger: {
        trigger: gridRef.value,
        start: 'top 80%',
        once: true,
      },
    })
  }, gridRef.value)
})

onBeforeUnmount(() => {
  ctx?.revert()
})
</script>

<template>
  <SectionBlock :headline="headline" :alt="alt" eyebrow="Proof">
    <div ref="gridRef" class="proof-grid" :style="gridStyle">
      <div v-for="m in metrics" :key="m.value" class="proof-metric">
        <div class="proof-metric__value">{{ m.value }}</div>
        <div v-if="m.label" class="proof-metric__label">{{ m.label }}</div>
      </div>
    </div>
    <p v-if="supportingLine" class="proof-supporting">{{ supportingLine }}</p>
    <p v-if="pressureLine" class="proof-pressure">{{ pressureLine }}</p>
  </SectionBlock>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.proof-grid {
  display: grid;
  grid-template-columns: repeat(var(--proof-cols, 4), 1fr);
  gap: 1px;
  background: $color-border;
  border-radius: $radius-lg;
  overflow: hidden;
  border: 1px solid $color-border;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
}

.proof-metric {
  position: relative;
  background: $color-white;
  padding: $space-10 $space-8;
  display: flex;
  flex-direction: column;
  gap: $space-3;
  transition: background $transition-slow;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 3px;
    background: $gradient-accent;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform $transition-slow;
  }

  &:hover {
    background: #fdfffe;
    &::before {
      transform: scaleX(1);
    }
  }

  &__value {
    font-family: $font-family-display;
    font-weight: $font-weight-bold;
    font-size: clamp(2.5rem, 4vw + 0.5rem, 4rem);
    line-height: 1;
    letter-spacing: -0.04em;
    color: $color-navy-900;
    background: linear-gradient(180deg, $color-navy 0%, $color-navy-light 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__label {
    color: $color-text-muted;
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    line-height: 1.5;
  }
}

.proof-supporting {
  color: $color-text-muted;
  max-width: 720px;
}
.proof-pressure {
  font-weight: $font-weight-semibold;
  color: $color-navy;
  padding: $space-4 $space-5;
  background: $color-gold-soft;
  border-left: 3px solid $color-gold;
  border-radius: $radius-md;
  display: inline-block;
  max-width: max-content;
}
</style>
