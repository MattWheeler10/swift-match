<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import ProofMetrics from '@/components/sections/ProofMetrics.vue'
import FinalCTA from '@/components/sections/FinalCTA.vue'
import { impact as i } from '@/content/impact'
</script>

<template>
  <!-- Hero -->
  <HeroSection
    :eyebrow="i.hero.eyebrow"
    :headline="i.hero.headline"
    :subheadline="i.hero.subheadline"
    :supporting-line="i.hero.supportingLine"
  />

  <!-- Process Shift -->
  <section class="impact-process section">
    <div class="container">
      <div class="impact-process__inner">
        <div v-reveal="{ y: 24 }">
          <h2 class="display">{{ i.processShift.headline }}</h2>
          <p class="lead">{{ i.processShift.intro }}</p>
          <div class="impact-process__tags">
            <span v-for="t in i.processShift.traditional" :key="t" class="impact-process__tag">{{ t }}</span>
          </div>
          <p class="note">{{ i.processShift.note }}</p>
          <p class="label-text">{{ i.processShift.matters.label }}</p>
          <ul class="dot-list">
            <li v-for="pt in i.processShift.matters.points" :key="pt">{{ pt }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- What Changes -->
  <section class="impact-changes section section--alt">
    <div class="container">
      <h2 v-reveal="{ y: 20 }" class="display impact-changes__headline">{{ i.whatChanges.headline }}</h2>
      <p v-reveal="{ y: 16 }" class="impact-changes__intro">{{ i.whatChanges.intro }}</p>
      <div v-reveal.stagger="{ stagger: 0.08, y: 24 }" class="impact-changes__list">
        <div v-for="outcome in i.whatChanges.outcomes" :key="outcome.title" class="impact-change">
          <div class="impact-change__num">{{ outcome.number }}</div>
          <div class="impact-change__body">
            <h3 class="impact-change__title">{{ outcome.title }}</h3>
            <p class="impact-change__body-text"><strong>{{ outcome.body }}</strong></p>
            <p class="impact-change__supporting">{{ outcome.supporting }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Measured Outcomes -->
  <ProofMetrics
    :headline="i.measuredOutcomes.headline"
    :metrics="i.measuredOutcomes.metrics"
    :supporting-line="i.measuredOutcomes.disclaimer"
  />

  <!-- Value Drivers -->
  <section class="impact-value section">
    <div class="container">
      <h2 v-reveal="{ y: 20 }" class="display impact-value__headline">{{ i.valueDrivers.headline }}</h2>
      <p v-reveal="{ y: 16 }" class="impact-value__intro">{{ i.valueDrivers.intro }}</p>
      <div v-reveal.stagger="{ stagger: 0.1, y: 20 }" class="impact-value__grid">
        <div v-for="d in i.valueDrivers.drivers" :key="d.title" class="impact-value__card">
          <h3 class="impact-value__card-title">{{ d.title }}</h3>
          <p class="impact-value__card-body">{{ d.body }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Financial Impact -->
  <section class="impact-financial section section--alt">
    <div class="container">
      <div class="impact-financial__inner">
        <div v-reveal="{ y: 24 }">
          <h2 class="display">{{ i.financial.headline }}</h2>
          <p class="lead">Impact is driven by structural changes in workforce supply:</p>
          <ul class="dot-list">
            <li v-for="pt in i.financial.points" :key="pt">{{ pt }}</li>
          </ul>
          <p class="callout">{{ i.financial.keyStatement }}</p>
          <p class="note">{{ i.financial.closingLine }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Final CTA -->
  <FinalCTA
    :headline="i.finalCta.headline"
    :subtext="i.finalCta.subtext"
    :ctas="i.finalCta.ctas"
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

.note {
  font-size: $font-size-sm;
  color: $color-text-muted;
  margin: $space-3 0 $space-5;
  font-style: italic;
}

.label-text {
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  color: $color-navy;
  margin: 0 0 $space-3;
}

.callout {
  padding: $space-4 $space-5;
  background: $color-teal-soft;
  border-left: 3px solid $color-teal-deep;
  border-radius: 0 $radius-sm $radius-sm 0;
  font-weight: $font-weight-semibold;
  color: $color-navy;
  font-size: $font-size-sm;
  line-height: 1.6;
  margin: 0 0 $space-4;
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

// ─── Process Shift ───────────────────────────────────────────────────────────
.impact-process {
  &__inner { max-width: 720px; }

  h2 { margin-bottom: $space-5; }

  &__tags {
    display: flex;
    gap: $space-2;
    flex-wrap: wrap;
    margin-bottom: $space-4;
  }

  &__tag {
    display: inline-flex;
    align-items: center;
    padding: $space-2 $space-4;
    background: rgba($color-navy, 0.06);
    border: 1px solid rgba($color-navy, 0.1);
    border-radius: $radius-full;
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: $color-navy;
    opacity: 0.6;
    text-decoration: line-through;
  }
}

// ─── What Changes ────────────────────────────────────────────────────────────
.impact-changes {
  &__headline { margin-bottom: $space-3; max-width: 860px; }

  &__intro {
    font-size: $font-size-sm;
    color: $color-text-muted;
    margin: 0 0 $space-10;
    max-width: 860px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: $space-4;
    max-width: 860px;
  }
}

.impact-change {
  display: flex;
  gap: $space-5;
  align-items: flex-start;
  padding: $space-6 $space-8;
  background: $color-white;
  border: 1px solid $color-border;
  border-radius: $radius-lg;

  &__num {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: $radius-full;
    background: $color-navy;
    color: $color-white;
    font-family: $font-family-display;
    font-weight: $font-weight-bold;
    font-size: $font-size-sm;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: $space-2;
  }

  &__title {
    font-family: $font-family-display;
    font-weight: $font-weight-bold;
    font-size: $font-size-md;
    color: $color-navy;
    margin: 0;
  }

  &__body-text {
    font-size: $font-size-sm;
    color: $color-navy;
    margin: 0;
  }

  &__supporting {
    font-size: $font-size-sm;
    color: $color-text-muted;
    line-height: 1.55;
    margin: 0;
  }
}

// ─── Value Drivers ───────────────────────────────────────────────────────────
.impact-value {
  &__headline { margin-bottom: $space-3; }

  &__intro {
    font-size: $font-size-sm;
    color: $color-text-muted;
    margin: 0 0 $space-10;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: $space-5;

    @media (max-width: 640px) { grid-template-columns: 1fr; }
  }

  &__card {
    padding: $space-8 $space-6;
    background: $color-white;
    border: 1px solid $color-border;
    border-radius: $radius-lg;
    display: flex;
    flex-direction: column;
    gap: $space-3;
    border-top: 3px solid $color-teal-deep;
  }

  &__card-title {
    font-family: $font-family-display;
    font-weight: $font-weight-bold;
    font-size: $font-size-base;
    color: $color-navy;
    margin: 0;
  }

  &__card-body {
    font-size: $font-size-sm;
    color: $color-text-muted;
    line-height: 1.55;
    margin: 0;
  }
}

// ─── Financial ───────────────────────────────────────────────────────────────
.impact-financial {
  &__inner { max-width: 720px; }

  h2 { margin-bottom: $space-5; }
}
</style>
