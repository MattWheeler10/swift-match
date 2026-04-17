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
      <span class="hero__orb hero__orb--gold" />
      <div class="hero__grid-lines" />
      <div class="hero__noise" />
    </div>

    <div class="container hero__grid" :class="{ 'hero__grid--full': !$slots.visual }">
      <div v-reveal.stagger="{ y: 24, stagger: 0.08, start: 'top 99%', delay: 0.1 }" class="hero__content">
        <div v-if="eyebrow" class="hero__badge">
          <span class="hero__badge-dot" aria-hidden="true" />
          <span class="hero__badge-label">{{ eyebrow }}</span>
        </div>
        <h1 class="hero__headline display">{{ headline }}</h1>
        <p v-if="subheadline" class="hero__subheadline">{{ subheadline }}</p>
        <p v-if="supportingLine" class="hero__supporting">{{ supportingLine }}</p>
        <p v-if="keyLine" class="hero__key">{{ keyLine }}</p>
        <p v-if="tensionLine" class="hero__tension">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 1.5L9.8 6h4.7l-3.8 2.8L12.2 13 8 10.3 3.8 13l1.5-4.2L1.5 6h4.7L8 1.5z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
          </svg>
          <span>{{ tensionLine }}</span>
        </p>
        <CtaButtons v-if="ctas && ctas.length" :ctas="ctas" class="hero__ctas" />
      </div>

      <div v-if="$slots.visual" v-reveal="{ y: 40, start: 'top 99%', delay: 0.3 }" class="hero__visual">
        <div class="hero__visual-frame">
          <div class="hero__visual-glow" aria-hidden="true" />
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
  padding-block: 10rem;
  background: $gradient-hero;
  isolation: isolate;

  @media (max-width: 768px) { padding-block: $space-16 $space-16; }

  &__bg {
    position: absolute; inset: 0;
    pointer-events: none;
    z-index: -1;
  }

  &__grid-lines {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(to right, rgba($color-navy, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba($color-navy, 0.05) 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
    opacity: 0.55;
  }

  &__noise {
    position: absolute; inset: 0;
    opacity: 0.035;
    mix-blend-mode: multiply;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
  }

  &__orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
    will-change: transform, opacity;

    &--teal {
      width: 600px; height: 600px;
      background: radial-gradient(circle, $color-teal 0%, transparent 65%);
      top: -200px; left: -160px;
      opacity: 0.6;
      animation: orbDriftA 16s ease-in-out infinite;
    }
    &--coral {
      width: 480px; height: 480px;
      background: radial-gradient(circle, $color-coral 0%, transparent 65%);
      bottom: -180px; right: -80px;
      opacity: 0.5;
      animation: orbDriftB 20s ease-in-out infinite;
    }
    &--gold {
      width: 360px; height: 360px;
      background: radial-gradient(circle, $color-gold 0%, transparent 65%);
      top: 30%; left: 35%;
      opacity: 0.22;
      animation: orbDriftC 26s ease-in-out infinite;
    }
  }

  @keyframes orbDriftA {
    0%, 100% { transform: translate(0, 0) scale(1);    opacity: 0.6; }
    30%       { transform: translate(80px, 55px) scale(1.15); opacity: 0.75; }
    65%       { transform: translate(20px, 90px) scale(0.92); opacity: 0.42; }
  }
  @keyframes orbDriftB {
    0%, 100% { transform: translate(0, 0) scale(1);      opacity: 0.5; }
    35%       { transform: translate(-65px, -55px) scale(1.12); opacity: 0.68; }
    70%       { transform: translate(-15px, 30px) scale(0.88);  opacity: 0.38; }
  }
  @keyframes orbDriftC {
    0%, 100% { transform: translate(0, 0) scale(1);      opacity: 0.22; }
    40%       { transform: translate(50px, -60px) scale(1.2);   opacity: 0.32; }
    75%       { transform: translate(-40px, 40px) scale(0.85);  opacity: 0.14; }
  }

  &__grid {
    position: relative;
    display: grid;
    grid-template-columns: 1.45fr 0.8fr;
    gap: $space-20;
    align-items: center;

    @media (max-width: 900px) { grid-template-columns: 1fr; gap: $space-12; }

    &--full {
      grid-template-columns: 1fr;

      .hero__content { max-width: 820px; }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: $space-6;
    max-width: 620px;
  }

  // ─── Badge ────────────────────────────────────────────────────
  &__badge {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: $space-2;
    padding: 6px 14px 6px 10px;
    background: rgba($color-white, 0.75);
    border: 1px solid rgba($color-navy, 0.08);
    border-radius: $radius-full;
    backdrop-filter: blur(8px);
    box-shadow: $shadow-xs;
    font-size: $font-size-xs;
    font-weight: $font-weight-semibold;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: $color-navy;
  }

  &__badge-dot {
    position: relative;
    width: 8px; height: 8px;
    border-radius: 50%;
    background: $color-teal;
    box-shadow: 0 0 0 0 rgba($color-teal, 0.5);
    animation: badgePulse 2.2s ease-out infinite;

    &::after {
      content: '';
      position: absolute;
      inset: -3px;
      border-radius: 50%;
      background: $color-teal;
      opacity: 0.3;
      animation: badgePulseHalo 2.2s ease-out infinite;
    }
  }

  @keyframes badgePulse {
    0% { box-shadow: 0 0 0 0 rgba($color-teal, 0.55); }
    70% { box-shadow: 0 0 0 10px rgba($color-teal, 0); }
    100% { box-shadow: 0 0 0 0 rgba($color-teal, 0); }
  }
  @keyframes badgePulseHalo {
    0% { opacity: 0.35; transform: scale(0.9); }
    70% { opacity: 0; transform: scale(1.7); }
    100% { opacity: 0; transform: scale(1.7); }
  }

  // ─── Headline — deep navy into teal so the final phrase pops ──
  &__headline {
    font-size: clamp(2.6rem, 5.5vw + 0.4rem, 4.5rem);
    color: $color-navy-900;
    margin: 0;
    letter-spacing: -0.03em;
    line-height: 1.02;
    font-weight: $font-weight-bold;
    background: linear-gradient(
      120deg,
      $color-navy-900  0%,
      $color-navy-900  28%,
      $color-navy      50%,
      $color-teal-deep 72%,
      $color-teal      100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__subheadline {
    font-size: $font-size-md;
    color: #112449;
    max-width: 560px;
    line-height: 1.55;
  }

  &__supporting {
    font-size: $font-size-base;
    color: #112449;
    max-width: 560px;
    line-height: 1.6;
  }

  &__tension {
    display: inline-flex;
    align-items: center;
    gap: $space-2;
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: $color-coral;
    max-width: 560px;

    svg { flex-shrink: 0; }
  }

  &__key {
    position: relative;
    font-size: $font-size-base;
    font-weight: $font-weight-medium;
    color: $color-navy;
    padding: $space-4 $space-5 $space-4 $space-6;
    background: rgba($color-white, 0.75);
    backdrop-filter: blur(10px);
    border-radius: $radius-md;
    border: 1px solid rgba($color-navy, 0.08);
    box-shadow: $shadow-xs;
    max-width: 560px;
    margin: 0;
    line-height: 1.5;

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

  // ─── Visual frame ─────────────────────────────────────────────
  &__visual {
    position: relative;
    align-self: stretch;
    display: flex;
    align-items: center;
  }

  &__visual-frame {
    width: 100%;
    padding: $space-4 0;
  }

  &__visual-glow {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    &__orb, &__badge-dot, &__badge-dot::after, &__visual-frame { animation: none; transition: none; }
  }
}
</style>
