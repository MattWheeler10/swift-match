<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import FinalCTA from '@/components/sections/FinalCTA.vue'
import { workforceModel as wm } from '@/content/workforce-model'
</script>

<template>
  <!-- Hero -->
  <HeroSection
    :eyebrow="wm.hero.eyebrow"
    :headline="wm.hero.headline"
    :subheadline="wm.hero.subheadline"
    :supporting-line="wm.hero.supportingLine"
  />

  <!-- Traditional Limitation -->
  <section class="wm-traditional section">
    <div class="container">
      <div class="wm-traditional__inner">
        <div v-reveal="{ y: 24 }">
          <h2 class="display">{{ wm.traditional.headline }}</h2>
          <p class="wm-intro">{{ wm.traditional.intro }}</p>
          <div class="wm-flow">
            <template v-for="(step, i) in wm.traditional.flow" :key="step">
              <span class="wm-flow__step">{{ step }}</span>
              <span v-if="i < wm.traditional.flow.length - 1" class="wm-flow__arrow" aria-hidden="true">→</span>
            </template>
          </div>
          <p class="wm-body">{{ wm.traditional.body }}</p>
        </div>

        <div v-reveal="{ y: 28, delay: 0.15 }" class="wm-split">
          <div class="wm-split__col">
            <p class="wm-split__label">{{ wm.traditional.limitations.intro }}</p>
            <ul class="dot-list">
              <li v-for="a in wm.traditional.limitations.assumptions" :key="a">{{ a }}</li>
            </ul>
          </div>
          <div class="wm-split__col wm-split__col--outcome">
            <p class="wm-split__label">This leads to:</p>
            <ul class="dot-list">
              <li v-for="o in wm.traditional.limitations.outcomes" :key="o">{{ o }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- The New Model -->
  <section class="wm-new section section--alt">
    <div class="container">
      <div class="wm-new__inner">
        <div v-reveal="{ y: 24 }">
          <h2 class="display">{{ wm.newModel.headline }}</h2>
          <p class="wm-body">{{ wm.newModel.body }}</p>
          <ul class="dot-list">
            <li v-for="pt in wm.newModel.points" :key="pt">{{ pt }}</li>
          </ul>
          <div class="wm-transition">
            <span class="wm-transition__from">{{ wm.newModel.transition.from }}</span>
            <span class="wm-transition__arrow" aria-hidden="true">→</span>
            <span class="wm-transition__to">{{ wm.newModel.transition.to }}</span>
          </div>
          <p class="wm-governance">{{ wm.newModel.governance }}</p>
          <p class="wm-governance-label">Hiring decisions must be:</p>
          <ul class="dot-list">
            <li v-for="pt in wm.newModel.governancePoints" :key="pt">{{ pt }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Model in Practice -->
  <section class="wm-practice section">
    <div class="container">
      <h2 v-reveal="{ y: 20 }" class="display wm-practice__headline">{{ wm.inPractice.headline }}</h2>

      <div v-reveal="{ y: 16, delay: 0.1 }" class="wm-practice__pipeline">
        <template v-for="(step, i) in wm.inPractice.pipeline" :key="step">
          <span class="wm-practice__pipeline-step" :class="{ 'wm-practice__pipeline-step--final': i === wm.inPractice.pipeline.length - 1 }">{{ step }}</span>
          <span v-if="i < wm.inPractice.pipeline.length - 1" class="wm-practice__pipeline-arrow" aria-hidden="true">→</span>
        </template>
      </div>

      <div v-reveal.stagger="{ stagger: 0.1, y: 24 }" class="wm-practice__steps">
        <div v-for="step in wm.inPractice.steps" :key="step.title" class="wm-practice__step">
          <div class="wm-practice__step-num">{{ step.number }}</div>
          <div class="wm-practice__step-body">
            <h3 class="wm-practice__step-title">{{ step.title }}</h3>
            <p v-for="pt in step.points" :key="pt" class="wm-practice__step-point">{{ pt }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Final CTA -->
  <FinalCTA
    :headline="wm.finalCta.headline"
    :subtext="wm.finalCta.subtext"
    :ctas="wm.finalCta.ctas"
  />
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

// ─── Shared ───────────────────────────────────────────────────────────────────
.wm-intro {
  font-size: $font-size-md;
  font-weight: $font-weight-semibold;
  color: $color-navy;
  margin: 0 0 $space-4;
}

.wm-body {
  font-size: $font-size-sm;
  color: $color-text;
  line-height: 1.65;
  margin: $space-4 0;
}

.dot-list {
  list-style: none;
  padding: 0;
  margin: 0 0 $space-5;
  display: flex;
  flex-direction: column;
  gap: $space-3;

  li {
    display: flex;
    align-items: flex-start;
    gap: $space-3;
    font-size: $font-size-sm;
    color: $color-text;
    line-height: 1.55;

    &::before {
      content: '';
      flex-shrink: 0;
      margin-top: 0.45em;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: $color-teal-deep;
    }
  }
}

// ─── Traditional ─────────────────────────────────────────────────────────────
.wm-traditional {
  &__inner {
    max-width: 720px;
    display: flex;
    flex-direction: column;
    gap: $space-10;
  }

  h2 { margin-bottom: $space-5; }
}

.wm-flow {
  display: flex;
  align-items: center;
  gap: $space-2;
  flex-wrap: wrap;
  margin-bottom: $space-5;

  &__step {
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: $color-navy;
    padding: $space-2 $space-3;
    background: rgba($color-navy, 0.06);
    border-radius: $radius-sm;
  }

  &__arrow {
    color: $color-text-subtle;
    font-size: $font-size-sm;
  }
}

.wm-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $space-6;

  @media (max-width: 640px) { grid-template-columns: 1fr; }

  &__col {
    padding: $space-6;
    border-radius: $radius-lg;
    background: $color-white;
    border: 1px solid $color-border;

    &--outcome {
      background: rgba($color-teal-deep, 0.04);
      border-color: rgba($color-teal-deep, 0.2);
    }
  }

  &__label {
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: $color-navy;
    margin: 0 0 $space-4;
  }
}

// ─── New Model ────────────────────────────────────────────────────────────────
.wm-new {
  &__inner { max-width: 720px; }

  h2 { margin-bottom: $space-5; }
}

.wm-transition {
  display: inline-flex;
  align-items: center;
  gap: $space-4;
  padding: $space-4 $space-8;
  background: $color-navy;
  border-radius: $radius-full;
  margin: $space-4 0;

  &__from {
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: rgba($color-white, 0.5);
    text-decoration: line-through;
  }

  &__arrow {
    color: $color-teal;
    font-weight: $font-weight-bold;
  }

  &__to {
    font-size: $font-size-sm;
    font-weight: $font-weight-bold;
    color: $color-teal;
  }
}

.wm-governance {
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  color: $color-navy;
  line-height: 1.6;
  margin: $space-5 0 $space-3;
}

.wm-governance-label {
  font-size: $font-size-sm;
  color: $color-text-muted;
  margin: 0 0 $space-3;
}

// ─── Practice ────────────────────────────────────────────────────────────────
.wm-practice {
  &__headline {
    margin-bottom: $space-6;
    max-width: 860px;
  }

  &__pipeline {
    display: flex;
    align-items: center;
    gap: $space-2;
    flex-wrap: wrap;
    padding: $space-5 $space-6;
    background: $color-navy;
    border-radius: $radius-lg;
    margin-bottom: $space-10;

    &-step {
      font-size: $font-size-sm;
      font-weight: $font-weight-semibold;
      color: rgba($color-white, 0.7);

      &--final { color: $color-teal; font-weight: $font-weight-bold; }
    }

    &-arrow { color: rgba($color-white, 0.3); font-size: $font-size-sm; }
  }

  &__steps {
    display: flex;
    flex-direction: column;
    gap: $space-6;
    max-width: 860px;
  }

  &__step {
    display: flex;
    gap: $space-6;
    align-items: flex-start;
    padding: $space-6;
    background: $color-white;
    border: 1px solid $color-border;
    border-radius: $radius-lg;
  }

  &__step-num {
    flex-shrink: 0;
    width: 44px;
    height: 44px;
    border-radius: $radius-full;
    background: $color-navy;
    color: $color-white;
    font-family: $font-family-display;
    font-weight: $font-weight-bold;
    font-size: $font-size-base;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__step-body { display: flex; flex-direction: column; gap: $space-2; }

  &__step-title {
    font-family: $font-family-display;
    font-weight: $font-weight-bold;
    font-size: $font-size-md;
    color: $color-navy;
    margin: 0;
  }

  &__step-point {
    font-size: $font-size-sm;
    color: $color-text-muted;
    line-height: 1.55;
    margin: 0;
  }
}
</style>
