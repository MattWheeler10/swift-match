<script setup lang="ts">
import type { CTA } from '@/content/types'
import CtaButtons from './CtaButtons.vue'

defineProps<{
  eyebrow?: string
  headline: string
  subheadline?: string
  supportingLine?: string
  keyLine?: string
  tensionLine?: string
  ctas?: CTA[]
}>()
</script>

<template>
  <section class="hero">
    <div class="hero__bg" aria-hidden="true">
      <span class="hero__orb hero__orb--teal" />
      <span class="hero__orb hero__orb--coral" />
      <div class="hero__grid-lines" />
    </div>

    <div class="container hero__grid">
      <div v-reveal.stagger="{ y: 24, stagger: 0.08, start: 'top 99%', delay: 0.1 }" class="hero__content">
        <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
        <h1 class="hero__headline display">{{ headline }}</h1>
        <p v-if="subheadline" class="hero__subheadline">{{ subheadline }}</p>
        <p v-if="supportingLine" class="hero__supporting">{{ supportingLine }}</p>
        <p v-if="keyLine" class="hero__key">{{ keyLine }}</p>
        <p v-if="tensionLine" class="hero__tension">{{ tensionLine }}</p>
        <CtaButtons v-if="ctas && ctas.length" :ctas="ctas" class="hero__ctas" />
      </div>

      <div v-if="$slots.visual" v-reveal="{ y: 40, start: 'top 99%', delay: 0.3 }" class="hero__visual">
        <div class="hero__visual-frame">
          <slot name="visual" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.hero {
  position: relative;
  overflow: hidden;
  padding-block: $space-32 $space-24;
  background: $gradient-hero;

  @media (max-width: 768px) { padding-block: $space-20 $space-16; }

  &__bg {
    position: absolute; inset: 0;
    pointer-events: none;
  }

  &__grid-lines {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(to right, rgba($color-navy, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba($color-navy, 0.05) 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: radial-gradient(ellipse at center, black 35%, transparent 75%);
    opacity: 0.6;
  }

  &__orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.6;

    &--teal {
      width: 520px; height: 520px;
      background: radial-gradient(circle, $color-teal 0%, transparent 65%);
      top: -160px; left: -120px;
    }
    &--coral {
      width: 440px; height: 440px;
      background: radial-gradient(circle, $color-coral 0%, transparent 65%);
      bottom: -160px; right: -80px;
    }
  }

  &__grid {
    position: relative;
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: $space-16;
    align-items: center;

    @media (max-width: 900px) { grid-template-columns: 1fr; gap: $space-12; }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: $space-6;
    max-width: 620px;
  }

  &__headline {
    font-size: clamp(2.5rem, 5vw + 0.5rem, 4.25rem);
    color: $color-navy-900;
    margin: 0;
  }

  &__subheadline {
    font-size: $font-size-md;
    color: $color-navy-ink;
    max-width: 560px;
    line-height: 1.55;
  }

  &__supporting,
  &__tension {
    font-size: $font-size-base;
    color: $color-text-muted;
    max-width: 560px;
  }

  &__tension { font-weight: $font-weight-medium; color: $color-navy; }

  &__key {
    position: relative;
    font-size: $font-size-base;
    font-weight: $font-weight-medium;
    color: $color-navy;
    padding: $space-4 $space-5 $space-4 $space-6;
    background: rgba($color-white, 0.7);
    backdrop-filter: blur(8px);
    border-radius: $radius-md;
    border: 1px solid rgba($color-navy, 0.08);
    max-width: 560px;
    margin: 0;

    &::before {
      content: '';
      position: absolute;
      left: 0; top: 10%; bottom: 10%;
      width: 3px;
      border-radius: $radius-full;
      background: $gradient-accent;
    }
  }

  &__ctas { margin-top: $space-2; }

  &__visual-frame {
    position: relative;
    padding: $space-6;
    background: rgba($color-white, 0.6);
    border: 1px solid rgba($color-navy, 0.08);
    border-radius: $radius-xl;
    backdrop-filter: blur(12px);
    box-shadow: $shadow-lg;

    &::before {
      content: '';
      position: absolute;
      inset: -1px;
      border-radius: $radius-xl;
      padding: 1px;
      background: $gradient-card-border;
      -webkit-mask:
        linear-gradient(#000 0 0) content-box,
        linear-gradient(#000 0 0);
      -webkit-mask-composite: xor;
              mask-composite: exclude;
      pointer-events: none;
    }
  }
}
</style>
