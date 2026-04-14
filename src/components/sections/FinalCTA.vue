<script setup lang="ts">
import CtaButtons from './CtaButtons.vue'
import type { CTA } from '@/content/types'

defineProps<{
  headline: string
  subtext?: string
  ctas: CTA[]
}>()
</script>

<template>
  <section class="final-cta section section--dark">
    <div class="final-cta__bg" aria-hidden="true">
      <span class="final-cta__orb final-cta__orb--teal" />
      <span class="final-cta__orb final-cta__orb--coral" />
    </div>
    <div v-reveal.stagger="{ stagger: 0.1, y: 28 }" class="container final-cta__inner">
      <p class="eyebrow">Next step</p>
      <h2 class="final-cta__headline display">{{ headline }}</h2>
      <p v-if="subtext" class="final-cta__sub">{{ subtext }}</p>
      <CtaButtons :ctas="ctas" class="final-cta__buttons" />
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.final-cta {
  position: relative;
  overflow: hidden;

  &__bg {
    position: absolute; inset: 0;
    pointer-events: none;
  }

  &__orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.45;

    &--teal {
      width: 600px; height: 600px;
      background: radial-gradient(circle, $color-teal 0%, transparent 60%);
      top: -200px; left: -180px;
    }
    &--coral {
      width: 500px; height: 500px;
      background: radial-gradient(circle, $color-coral 0%, transparent 60%);
      bottom: -180px; right: -140px;
    }
  }

  &__inner {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: $space-5;
  }

  &__headline {
    font-size: clamp(2rem, 3.5vw + 0.5rem, 3.25rem);
    max-width: 820px;
    color: $color-white;
  }

  &__sub {
    color: rgba($color-white, 0.75);
    max-width: 680px;
    font-size: $font-size-md;
  }

  &__buttons { margin-top: $space-4; }
}
</style>
