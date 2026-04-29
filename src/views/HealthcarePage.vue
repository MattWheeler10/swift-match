<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import ProofMetrics from '@/components/sections/ProofMetrics.vue'
import FinalCTA from '@/components/sections/FinalCTA.vue'
import { healthcare as h } from '@/content/healthcare'
</script>

<template>
  <!-- 1. Hero -->
  <HeroSection
    :eyebrow="h.hero.eyebrow"
    :headline="h.hero.headline"
    :subheadline="h.hero.subheadline"
    :supporting-line="h.hero.supportingLine"
    :ctas="h.hero.ctas"
  />

  <!-- 2. Problem -->
  <section class="hc-problem section">
    <div class="container">
      <div class="hc-problem__inner">
        <div v-reveal="{ y: 24 }">
          <h2 class="hc-problem__headline display">{{ h.problem.headline }}</h2>
          <p class="hc-problem__intro">{{ h.problem.intro }}</p>
          <ul class="dot-list">
            <li v-for="pt in h.problem.points" :key="pt">{{ pt }}</li>
          </ul>
          <p class="callout">{{ h.problem.closingLine }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. Why Traditional Systems Fall Short -->
  <section class="hc-traditional section section--alt">
    <div class="container">
      <div class="hc-traditional__inner">
        <div v-reveal="{ y: 24 }" class="hc-traditional__content">
          <h2 class="display">{{ h.traditional.headline }}</h2>
          <p class="lead">{{ h.traditional.intro }}</p>
          <ul class="dot-list">
            <li v-for="pt in h.traditional.points" :key="pt"><strong>{{ pt }}</strong></li>
          </ul>
          <div class="closing-lines">
            <p v-for="line in h.traditional.closingLines" :key="line" class="closing-line">{{ line }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 4. Governed Model -->
  <section class="hc-model section">
    <div class="container">
      <div class="hc-model__inner">
        <div v-reveal="{ y: 24 }" class="hc-model__content">
          <h2 class="display">{{ h.model.headline }}</h2>
          <p class="lead">{{ h.model.body }}</p>
          <p class="text-muted">{{ h.model.principles }}</p>
          <div class="hc-model__steps">
            <span v-for="step in h.model.steps" :key="step" class="hc-model__step">{{ step }}</span>
          </div>
          <div class="hc-model__pipeline">
            <template v-for="(step, i) in h.model.pipeline" :key="step">
              <span class="hc-model__pipeline-step" :class="{ 'hc-model__pipeline-step--final': i === h.model.pipeline.length - 1 }">{{ step }}</span>
              <span v-if="i < h.model.pipeline.length - 1" class="hc-model__pipeline-arrow" aria-hidden="true">→</span>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 5. What This Enables -->
  <section class="hc-enables section section--alt">
    <div class="container">
      <h2 v-reveal="{ y: 20 }" class="hc-enables__headline display">{{ h.enables.headline }}</h2>
      <div v-reveal.stagger="{ stagger: 0.1, y: 24 }" class="hc-enables__grid">
        <div v-for="card in h.enables.cards" :key="card.title" class="hc-enables__card">
          <h3 class="hc-enables__card-title">{{ card.title }}</h3>
          <ul class="hc-enables__card-list">
            <li v-for="pt in card.points" :key="pt">{{ pt }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. Designed For -->
  <section class="hc-for section">
    <div class="container">
      <div class="hc-for__inner">
        <div v-reveal="{ y: 24 }" class="hc-for__content">
          <h2 class="display">{{ h.designedFor.headline }}</h2>
          <ul class="dot-list">
            <li v-for="p in h.designedFor.providers" :key="p">{{ p }}</li>
          </ul>
          <p class="callout">{{ h.designedFor.closingLine }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 7. Proof -->
  <ProofMetrics
    :headline="h.proof.headline"
    :metrics="h.proof.metrics"
    :supporting-line="h.proof.disclaimer"
  />

  <!-- 8. Final CTA -->
  <FinalCTA
    :headline="h.finalCta.headline"
    :subtext="h.finalCta.subtext"
    :ctas="h.finalCta.ctas"
  />
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

// ─── Shared ───────────────────────────────────────────────────────────────────
.lead {
  font-size: $font-size-md;
  color: $color-text;
  line-height: 1.65;
  margin: 0 0 $space-5;
}

.text-muted {
  color: $color-text-muted;
  font-size: $font-size-sm;
  margin: 0;
}

.dot-list {
  list-style: none;
  padding: 0;
  margin: 0 0 $space-6;
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

.callout {
  padding: $space-4 $space-5;
  background: $color-teal-soft;
  border-left: 3px solid $color-teal-deep;
  border-radius: 0 $radius-sm $radius-sm 0;
  font-weight: $font-weight-medium;
  color: $color-navy;
  font-size: $font-size-sm;
  margin: 0;
}

.closing-lines {
  display: flex;
  flex-direction: column;
  gap: $space-2;
  margin-top: $space-5;
}

.closing-line {
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  color: $color-navy;
  margin: 0;
}

// ─── Problem ─────────────────────────────────────────────────────────────────
.hc-problem {
  &__inner { max-width: 720px; }

  &__headline { margin-bottom: $space-5; }

  &__intro {
    font-size: $font-size-md;
    font-weight: $font-weight-semibold;
    color: $color-navy;
    white-space: pre-line;
    line-height: 1.5;
    margin: 0 0 $space-4;
  }
}

// ─── Traditional ─────────────────────────────────────────────────────────────
.hc-traditional {
  &__inner { max-width: 720px; }

  &__content { display: flex; flex-direction: column; gap: $space-5; }

  h2 { margin: 0; }
}

// ─── Governed Model ───────────────────────────────────────────────────────────
.hc-model {
  &__inner { max-width: 720px; }

  &__content {
    display: flex;
    flex-direction: column;
    gap: $space-5;

    h2 { margin: 0; }
  }

  &__steps {
    display: flex;
    gap: $space-3;
    flex-wrap: wrap;
  }

  &__step {
    display: inline-flex;
    align-items: center;
    padding: $space-2 $space-4;
    background: $color-teal-soft;
    border: 1px solid rgba($color-teal-deep, 0.25);
    border-radius: $radius-full;
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: $color-teal-deep;
  }

  &__pipeline {
    display: flex;
    align-items: center;
    gap: $space-2;
    flex-wrap: wrap;
    padding: $space-5 $space-6;
    background: $color-navy;
    border-radius: $radius-lg;
  }

  &__pipeline-step {
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: rgba($color-white, 0.75);

    &--final { color: $color-teal; font-weight: $font-weight-bold; }
  }

  &__pipeline-arrow {
    color: rgba($color-white, 0.3);
    font-size: $font-size-sm;
  }
}

// ─── Enables ─────────────────────────────────────────────────────────────────
.hc-enables {
  &__headline {
    margin-bottom: $space-10;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: $space-5;

    @media (max-width: 960px) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 480px) { grid-template-columns: 1fr; }
  }

  &__card {
    padding: $space-8 $space-6;
    background: $color-white;
    border: 1px solid $color-border;
    border-radius: $radius-lg;
    display: flex;
    flex-direction: column;
    gap: $space-4;
  }

  &__card-title {
    font-family: $font-family-display;
    font-weight: $font-weight-bold;
    font-size: $font-size-base;
    color: $color-navy;
    margin: 0;
  }

  &__card-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: $space-2;

    li {
      font-size: $font-size-sm;
      color: $color-text-muted;
      line-height: 1.5;

      &::before { display: none; }
    }
  }
}

// ─── Designed For ─────────────────────────────────────────────────────────────
.hc-for {
  &__inner { max-width: 720px; }

  &__content { display: flex; flex-direction: column; gap: $space-5; }

  h2 { margin: 0; }
}
</style>
