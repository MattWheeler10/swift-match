<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import WorkflowFlow from '@/components/sections/WorkflowFlow.vue'
import ProofMetrics from '@/components/sections/ProofMetrics.vue'
import FinalCTA from '@/components/sections/FinalCTA.vue'
import { RouterLink } from 'vue-router'
import { globalHome } from '@/content/global-home'

const g = globalHome
</script>

<template>
  <!-- 1. Hero -->
  <HeroSection
    :headline="g.hero.headline"
    :subheadline="g.hero.subheadline"
    :supporting-line="g.hero.supportingLine"
    :ctas="g.hero.ctas"
  >
    <template #visual>
      <WorkflowFlow :steps="g.hero.workflow.steps" :label="g.hero.workflow.label" vertical />
    </template>
  </HeroSection>

  <!-- 2. Urgency ("Why Now") -->
  <section class="urgency section section--alt">
    <div class="container urgency__inner">
      <div v-reveal="{ y: 24 }" class="urgency__text">
        <h2 class="urgency__headline display">{{ g.urgency.headline }}</h2>
        <p class="urgency__body">{{ g.urgency.body }}</p>
      </div>
      <div v-reveal.stagger="{ stagger: 0.12, y: 20 }" class="urgency__points">
        <div v-for="pt in g.urgency.points" :key="pt.label" class="urgency__point">
          <span class="urgency__point-label">{{ pt.label }}</span>
          <span class="urgency__point-desc">{{ pt.description }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. Core Insight -->
  <section class="insight section">
    <div class="container">
      <div v-reveal="{ y: 20 }" class="insight__card">
        <p class="insight__statement">{{ g.coreInsight.statement }}</p>
      </div>
    </div>
  </section>

  <!-- 4. Problem -->
  <section class="problem section section--alt">
    <div class="container problem__inner">
      <div v-reveal="{ y: 24 }" class="problem__text">
        <h2 class="problem__headline display">{{ g.problem.headline }}</h2>
        <p class="problem__intro">{{ g.problem.intro }}</p>
        <p class="problem__subtext">{{ g.problem.subtext }}</p>
        <ul class="problem__list">
          <li v-for="pt in g.problem.points" :key="pt">{{ pt }}</li>
        </ul>
        <RouterLink :to="g.problem.link.to" class="text-link">
          {{ g.problem.link.label }}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
        </RouterLink>
      </div>
      <div v-reveal="{ y: 32, delay: 0.15 }" class="problem__visual">
        <div class="problem__diagram">
          <div class="problem__diagram-step problem__diagram-step--bad">
            <span class="problem__diagram-icon">⏳</span>
            <span>Role Opens</span>
          </div>
          <div class="problem__diagram-arrow">↓</div>
          <div class="problem__diagram-step problem__diagram-step--bad">
            <span class="problem__diagram-icon">🔄</span>
            <span>Start from Zero</span>
          </div>
          <div class="problem__diagram-arrow">↓</div>
          <div class="problem__diagram-step problem__diagram-step--bad">
            <span class="problem__diagram-icon">💸</span>
            <span>Agency Cover</span>
          </div>
          <div class="problem__diagram-arrow">↓</div>
          <div class="problem__diagram-step problem__diagram-step--bad">
            <span class="problem__diagram-icon">⚠️</span>
            <span>Weeks of Delay</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 5. Model Shift -->
  <section class="model section">
    <div class="container model__inner">
      <div v-reveal="{ y: 24 }" class="model__content">
        <h2 class="model__headline display">{{ g.modelShift.headline }}</h2>
        <p class="model__body">{{ g.modelShift.body }}</p>
        <p class="model__subtext">{{ g.modelShift.subtext }}</p>
        <div class="model__transition">
          <span class="model__transition-from">{{ g.modelShift.transition.from }}</span>
          <span class="model__transition-arrow" aria-hidden="true">→</span>
          <span class="model__transition-to">{{ g.modelShift.transition.to }}</span>
        </div>
        <RouterLink :to="g.modelShift.link.to" class="text-link">
          {{ g.modelShift.link.label }}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- 6. Outcome Snapshot -->
  <section class="outcomes section section--alt">
    <div class="container">
      <h2 v-reveal="{ y: 20 }" class="outcomes__headline display">{{ g.outcomeSnapshot.headline }}</h2>
      <div v-reveal.stagger="{ stagger: 0.1, y: 24 }" class="outcomes__grid">
        <div v-for="card in g.outcomeSnapshot.cards" :key="card.title" class="outcomes__card">
          <h3 class="outcomes__card-title">{{ card.title }}</h3>
          <p class="outcomes__card-desc">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 7. Proof -->
  <ProofMetrics
    :headline="g.proof.headline"
    :metrics="g.proof.metrics"
    :supporting-line="g.proof.disclaimer"
  />

  <!-- 8. Final CTA -->
  <FinalCTA
    :headline="g.finalCta.headline"
    :subtext="g.finalCta.subtext"
    :ctas="g.finalCta.ctas"
  />
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

// ─── 2. Urgency ───────────────────────────────────────────────────────────────
.urgency {
  &__inner {
    display: flex;
    flex-direction: column;
    gap: $space-10;
    align-items: center;
    text-align: center;
  }

  &__text {
    max-width: 680px;
  }

  &__headline {
    margin-bottom: $space-4;
  }

  &__body {
    font-size: clamp($font-size-base, 1.8vw, $font-size-lg);
    color: $color-text-muted;
    line-height: 1.65;
    margin: 0;
  }

  &__points {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $space-6;
    width: 100%;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      max-width: 400px;
    }
  }

  &__point {
    display: flex;
    flex-direction: column;
    gap: $space-2;
    padding: $space-6;
    background: $color-white;
    border: 1px solid $color-border;
    border-radius: $radius-lg;
    text-align: left;
  }

  &__point-label {
    font-family: $font-family-display;
    font-weight: $font-weight-bold;
    font-size: $font-size-base;
    color: $color-navy;
  }

  &__point-desc {
    font-size: $font-size-sm;
    color: $color-text-muted;
    line-height: 1.55;
    margin: 0;
  }
}

// ─── 3. Core Insight ──────────────────────────────────────────────────────────
.insight {
  &__card {
    max-width: 680px;
    margin-inline: auto;
    padding: $space-10 $space-10;
    background: $color-navy;
    border-radius: $radius-xl;
    text-align: center;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse at 30% 50%, rgba($color-teal, 0.18) 0%, transparent 70%);
    }
  }

  &__statement {
    position: relative;
    font-family: $font-family-display;
    font-size: clamp($font-size-lg, 2.2vw, $font-size-xl);
    font-weight: $font-weight-semibold;
    color: rgba($color-white, 0.92);
    line-height: 1.5;
    letter-spacing: -0.01em;
    margin: 0;
  }
}

// ─── 4. Problem ───────────────────────────────────────────────────────────────
.problem {
  &__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $space-14;
    align-items: center;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: $space-8;
    }
  }

  &__headline {
    margin-bottom: $space-5;
  }

  &__intro {
    font-size: $font-size-md;
    font-weight: $font-weight-semibold;
    color: $color-navy;
    line-height: 1.5;
    white-space: pre-line;
    margin: 0 0 $space-3;
  }

  &__subtext {
    font-size: $font-size-sm;
    color: $color-text-muted;
    margin: 0 0 $space-5;
  }

  &__list {
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

  &__visual {
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &__diagram {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    width: 100%;
    max-width: 260px;
  }

  &__diagram-step {
    display: flex;
    align-items: center;
    gap: $space-3;
    width: 100%;
    padding: $space-4 $space-5;
    border-radius: $radius-md;
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;

    &--bad {
      background: rgba($color-navy, 0.05);
      border: 1px solid rgba($color-navy, 0.1);
      color: $color-navy;
    }
  }

  &__diagram-icon {
    font-size: 1.1rem;
  }

  &__diagram-arrow {
    color: $color-text-subtle;
    font-size: $font-size-lg;
    line-height: 1;
    padding: $space-1 0;
  }
}

// ─── 5. Model Shift ───────────────────────────────────────────────────────────
.model {
  &__inner {
    display: flex;
    justify-content: center;
  }

  &__content {
    max-width: 680px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-4;
  }

  &__headline {
    margin: 0;
  }

  &__body {
    font-size: $font-size-md;
    color: $color-text;
    line-height: 1.65;
    margin: 0;
  }

  &__subtext {
    font-size: $font-size-sm;
    color: $color-text-muted;
    line-height: 1.6;
    margin: 0;
  }

  &__transition {
    display: flex;
    align-items: center;
    gap: $space-4;
    padding: $space-4 $space-8;
    background: $color-navy;
    border-radius: $radius-full;
    margin-top: $space-2;
  }

  &__transition-from {
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: rgba($color-white, 0.6);
    text-decoration: line-through;
  }

  &__transition-arrow {
    font-size: $font-size-lg;
    color: $color-teal;
    font-weight: $font-weight-bold;
  }

  &__transition-to {
    font-size: $font-size-sm;
    font-weight: $font-weight-bold;
    color: $color-teal;
  }
}

// ─── 6. Outcome Snapshot ─────────────────────────────────────────────────────
.outcomes {
  &__headline {
    text-align: center;
    margin-bottom: $space-10;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: $space-5;

    @media (max-width: 960px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }

  &__card {
    padding: $space-8 $space-6;
    background: $color-white;
    border: 1px solid $color-border;
    border-radius: $radius-lg;
    display: flex;
    flex-direction: column;
    gap: $space-3;
    transition: box-shadow $transition-base, transform $transition-base;

    &:hover {
      box-shadow: $shadow-md;
      transform: translateY(-2px);
    }
  }

  &__card-title {
    font-family: $font-family-display;
    font-weight: $font-weight-bold;
    font-size: $font-size-base;
    color: $color-navy;
    margin: 0;
  }

  &__card-desc {
    font-size: $font-size-sm;
    color: $color-text-muted;
    line-height: 1.55;
    margin: 0;
  }
}

// ─── Shared text link ─────────────────────────────────────────────────────────
.text-link {
  display: inline-flex;
  align-items: center;
  gap: $space-1;
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  color: $color-teal-deep;
  transition: gap $transition-base;

  &:hover {
    gap: $space-2;
  }
}
</style>
