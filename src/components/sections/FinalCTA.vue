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
  <section class="final-cta section">
    <div class="container">
      <div v-reveal.stagger="{ stagger: 0.1, y: 28 }" class="final-cta__card">
        <div class="final-cta__bg" aria-hidden="true">
          <span class="final-cta__orb final-cta__orb--teal" />
          <span class="final-cta__orb final-cta__orb--coral" />
        </div>
        <p class="final-cta__eyebrow">Next step</p>
        <h2 class="final-cta__headline display">{{ headline }}</h2>
        <p v-if="subtext" class="final-cta__sub">{{ subtext }}</p>
        <CtaButtons :ctas="ctas" class="final-cta__buttons" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.final-cta {
  // Section itself is transparent — card provides the dark treatment
}

// ─── Contained dark card ──────────────────────────────────────────────────────
.final-cta__card {
  position: relative;
  overflow: hidden;
  background: $gradient-dark;
  border-radius: 20px;
  border: 1px solid rgba($color-teal, 0.18);
  box-shadow:
    0 0 0 1px rgba($color-teal, 0.06),
    0 24px 64px rgba($color-navy-900, 0.28);
  padding: $space-16 $space-12;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: $space-5;

  @media (max-width: 768px) {
    padding: $space-12 $space-6;
    border-radius: 16px;
  }
}

// ─── Background orbs ─────────────────────────────────────────────────────────
.final-cta__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.final-cta__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.4;

  &--teal {
    width: 500px; height: 500px;
    background: radial-gradient(circle, $color-teal 0%, transparent 60%);
    top: -160px; left: -140px;
  }
  &--coral {
    width: 420px; height: 420px;
    background: radial-gradient(circle, $color-coral 0%, transparent 60%);
    bottom: -150px; right: -120px;
  }
}

// ─── Content ──────────────────────────────────────────────────────────────────
.final-cta__eyebrow {
  position: relative;
  font-size: $font-size-xs;
  font-weight: $font-weight-semibold;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: $color-teal;
  margin: 0;
}

.final-cta__headline {
  position: relative;
  font-size: clamp(2rem, 3.5vw + 0.5rem, 3.25rem);
  max-width: 820px;
  color: $color-white;
  margin: 0;
}

.final-cta__sub {
  position: relative;
  color: rgba($color-white, 0.72);
  max-width: 600px;
  font-size: $font-size-md;
  line-height: 1.65;
  margin: 0;
}

.final-cta__buttons {
  position: relative;
  margin-top: $space-4;

  // Button overrides for dark card context
  :deep(.btn--primary) {
    background: $color-white;
    color: $color-navy-900;
    &:hover {
      background: rgba($color-white, 0.92);
      box-shadow: $shadow-md;
    }
  }

  :deep(.btn--outline) {
    border-color: rgba($color-white, 0.32);
    color: $color-white;
    &:hover {
      border-color: rgba($color-white, 0.7);
      background: rgba($color-white, 0.07);
    }
  }
}
</style>
