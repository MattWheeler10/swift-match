<script setup lang="ts">
defineProps<{
  steps: string[]
  label: string
}>()
</script>

<template>
  <div class="hero-wf">
    <p class="hero-wf__caption">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
      {{ label }}
    </p>
    <div v-reveal.stagger="{ stagger: 0.04, y: 10 }" class="hero-wf__grid">
      <div
        v-for="(step, i) in steps"
        :key="step"
        class="hero-wf__step"
        :class="{ 'hero-wf__step--outcome': i === steps.length - 1 }"
      >
        <span class="hero-wf__num">{{ String(i + 1).padStart(2, '0') }}</span>
        <span class="hero-wf__name">{{ step }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.hero-wf {
  display: flex;
  flex-direction: column;
  gap: $space-4;
  width: 100%;

  // ─── Caption / label ───────────────────────────────────────────────────────
  &__caption {
    display: inline-flex;
    align-items: center;
    gap: $space-2;
    font-size: $font-size-xs;
    font-weight: $font-weight-bold;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: $color-teal-deep;
    margin: 0;

    svg { flex-shrink: 0; color: $color-teal-deep; }
  }

  // ─── Step grid ─────────────────────────────────────────────────────────────
  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1px;
    background: rgba($color-navy, 0.1);
    border-radius: $radius-lg;
    overflow: hidden;
    border: 1px solid rgba($color-navy, 0.1);
  }

  &__step {
    display: flex;
    align-items: center;
    gap: $space-3;
    padding: $space-3 $space-4;
    background: rgba(255, 255, 255, 0.76);
    backdrop-filter: blur(8px);
  }

  &__num {
    font-family: $font-family-display;
    font-weight: $font-weight-bold;
    font-size: clamp(1.1rem, 1.4vw + 0.2rem, 1.4rem);
    line-height: 1;
    letter-spacing: -0.03em;
    flex-shrink: 0;
    background: linear-gradient(180deg, $color-navy 0%, $color-navy-light 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__name {
    font-size: $font-size-xs;
    font-weight: $font-weight-semibold;
    color: $color-navy;
    line-height: 1.3;
  }

  // ─── Outcome (last) step ───────────────────────────────────────────────────
  &__step--outcome {
    background: rgba($color-teal-deep, 0.12);
    backdrop-filter: blur(8px);

    .hero-wf__num {
      background: $color-teal-deep;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero-wf__name {
      color: $color-teal-deep;
      font-weight: $font-weight-bold;
    }
  }
}
</style>
