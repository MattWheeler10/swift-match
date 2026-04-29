<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import FinalCTA from '@/components/sections/FinalCTA.vue'
import { governance as g } from '@/content/governance'
</script>

<template>
  <!-- Hero -->
  <HeroSection
    :eyebrow="g.hero.eyebrow"
    :headline="g.hero.headline"
    :subheadline="g.hero.subheadline"
    :supporting-line="g.hero.supportingLine"
  />

  <!-- Why Governance -->
  <section class="gov-why section">
    <div class="container">
      <div class="gov-why__inner">
        <div v-reveal="{ y: 24 }">
          <h2 class="display">{{ g.whyGovernance.headline }}</h2>
          <p class="lead">{{ g.whyGovernance.intro }}</p>
          <ul class="dot-list">
            <li v-for="item in g.whyGovernance.impacts" :key="item">{{ item }}</li>
          </ul>
          <p class="body-text">{{ g.whyGovernance.body }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Gold Standard -->
  <section class="gov-gold section section--alt">
    <div class="container">
      <div class="gov-gold__inner">
        <div v-reveal="{ y: 24 }">
          <h2 class="display">{{ g.goldStandard.headline }}</h2>
          <p class="lead">{{ g.goldStandard.intro }}</p>
          <p class="label-text">{{ g.goldStandard.principleLabel }}</p>
          <div class="gov-gold__principles">
            <span v-for="p in g.goldStandard.principles" :key="p" class="gov-gold__principle">{{ p }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Core Principles -->
  <section class="gov-principles section">
    <div class="container">
      <h2 v-reveal="{ y: 20 }" class="display gov-principles__headline">{{ g.corePrinciples.headline }}</h2>
      <div v-reveal.stagger="{ stagger: 0.08, y: 20 }" class="gov-principles__grid">
        <div v-for="p in g.corePrinciples.principles" :key="p.title" class="gov-principles__card">
          <h3 class="gov-principles__card-title">{{ p.title }}</h3>
          <p class="gov-principles__card-body">{{ p.body }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Governance Model Areas -->
  <section class="gov-model section section--alt">
    <div class="container">
      <h2 v-reveal="{ y: 20 }" class="display gov-model__headline">{{ g.model.headline }}</h2>
      <p v-reveal="{ y: 16 }" class="gov-model__intro">{{ g.model.intro }}</p>
      <div v-reveal.stagger="{ stagger: 0.07, y: 24 }" class="gov-model__areas">
        <div v-for="area in g.model.areas" :key="area.title" class="gov-model__area">
          <div class="gov-model__area-header">
            <span class="gov-model__area-num">{{ area.number }}</span>
            <div>
              <h3 class="gov-model__area-title">{{ area.title }}</h3>
              <p class="gov-model__area-objective">{{ area.objective }}</p>
            </div>
          </div>
          <div class="gov-model__area-compare">
            <div class="gov-model__area-col gov-model__area-col--without">
              <span class="gov-model__area-col-label">Without governance</span>
              <ul class="plain-list">
                <li v-for="item in area.without" :key="item">{{ item }}</li>
              </ul>
            </div>
            <div class="gov-model__area-col gov-model__area-col--with">
              <span class="gov-model__area-col-label">With SwiftMatch</span>
              <ul class="plain-list">
                <li v-for="item in area.with" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- What This Delivers -->
  <section class="gov-delivers section">
    <div class="container">
      <h2 v-reveal="{ y: 20 }" class="display gov-delivers__headline">{{ g.delivers.headline }}</h2>
      <div v-reveal.stagger="{ stagger: 0.09, y: 20 }" class="gov-delivers__grid">
        <div v-for="outcome in g.delivers.outcomes" :key="outcome.title" class="gov-delivers__card">
          <h3 class="gov-delivers__card-title">{{ outcome.title }}</h3>
          <p class="gov-delivers__card-body">{{ outcome.body }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Positioning -->
  <section class="gov-position section section--alt">
    <div class="container">
      <div class="gov-position__inner">
      <div v-reveal="{ y: 24 }">
        <h2 class="display">{{ g.positioning.headline }}</h2>
        <div class="gov-position__compare">
          <div class="gov-position__compare-row">
            <span class="gov-position__compare-label">Traditional systems:</span>
            <span class="gov-position__compare-value gov-position__compare-value--old">{{ g.positioning.traditional }}</span>
          </div>
          <div class="gov-position__compare-row">
            <span class="gov-position__compare-label">SwiftMatch:</span>
            <span class="gov-position__compare-value gov-position__compare-value--new">{{ g.positioning.swiftmatch }}</span>
          </div>
        </div>
        <p class="body-text">{{ g.positioning.body }}</p>
        <p class="label-text">Ensuring every decision is:</p>
        <div class="gov-position__principles">
          <span v-for="p in g.positioning.principles" :key="p" class="gov-position__principle">{{ p }}</span>
        </div>
      </div>
      </div>
    </div>
  </section>

  <!-- Final CTA -->
  <FinalCTA
    :headline="g.finalCta.headline"
    :subtext="g.finalCta.subtext"
    :ctas="g.finalCta.ctas"
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

.body-text {
  font-size: $font-size-sm;
  color: $color-text-muted;
  line-height: 1.65;
  margin: $space-4 0 0;
}

.label-text {
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  color: $color-navy;
  margin: $space-4 0 $space-3;
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

.plain-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: $space-2;

  li {
    font-size: $font-size-sm;
    color: $color-text;
    line-height: 1.5;
  }
}

// ─── Why ─────────────────────────────────────────────────────────────────────
.gov-why {
  &__inner { max-width: 720px; }
  h2 { margin-bottom: $space-5; }
}

// ─── Gold Standard ────────────────────────────────────────────────────────────
.gov-gold {
  &__inner { max-width: 720px; }
  h2 { margin-bottom: $space-5; }

  &__principles {
    display: flex;
    gap: $space-3;
    flex-wrap: wrap;
  }

  &__principle {
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
}

// ─── Core Principles ─────────────────────────────────────────────────────────
.gov-principles {
  &__headline { margin-bottom: $space-10; }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $space-5;

    @media (max-width: 900px) { grid-template-columns: 1fr 1fr; }
    @media (max-width: 560px) { grid-template-columns: 1fr; }
  }

  &__card {
    padding: $space-8 $space-6;
    background: $color-navy;
    border-radius: $radius-lg;
    display: flex;
    flex-direction: column;
    gap: $space-3;
  }

  &__card-title {
    font-family: $font-family-display;
    font-weight: $font-weight-bold;
    font-size: $font-size-base;
    color: $color-white;
    margin: 0;
  }

  &__card-body {
    font-size: $font-size-sm;
    color: rgba($color-white, 0.65);
    line-height: 1.55;
    margin: 0;
  }
}

// ─── Model Areas ─────────────────────────────────────────────────────────────
.gov-model {
  &__headline { margin-bottom: $space-3; max-width: 860px; }

  &__intro {
    font-size: $font-size-sm;
    color: $color-text-muted;
    margin: 0 0 $space-10;
    max-width: 860px;
  }

  &__areas {
    display: flex;
    flex-direction: column;
    gap: $space-5;
    max-width: 860px;
  }

  &__area {
    padding: $space-8 $space-8;
    background: $color-white;
    border: 1px solid $color-border;
    border-radius: $radius-lg;
    display: flex;
    flex-direction: column;
    gap: $space-5;
  }

  &__area-header {
    display: flex;
    gap: $space-4;
    align-items: flex-start;
  }

  &__area-num {
    flex-shrink: 0;
    width: 36px;
    height: 36px;
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

  &__area-title {
    font-family: $font-family-display;
    font-weight: $font-weight-bold;
    font-size: $font-size-md;
    color: $color-navy;
    margin: 0 0 $space-1;
  }

  &__area-objective {
    font-size: $font-size-sm;
    color: $color-text-muted;
    margin: 0;
  }

  &__area-compare {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $space-4;

    @media (max-width: 640px) { grid-template-columns: 1fr; }
  }

  &__area-col {
    padding: $space-4 $space-5;
    border-radius: $radius-md;
    display: flex;
    flex-direction: column;
    gap: $space-3;

    &--without {
      background: rgba($color-navy, 0.04);
      border: 1px solid rgba($color-navy, 0.1);
    }

    &--with {
      background: $color-teal-soft;
      border: 1px solid rgba($color-teal-deep, 0.2);
    }
  }

  &__area-col-label {
    font-size: $font-size-xs;
    font-weight: $font-weight-bold;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: $color-text-subtle;

    .gov-model__area-col--with & { color: $color-teal-deep; }
  }
}

// ─── Delivers ────────────────────────────────────────────────────────────────
.gov-delivers {
  &__headline { margin-bottom: $space-10; }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $space-5;

    @media (max-width: 900px) { grid-template-columns: 1fr 1fr; }
    @media (max-width: 480px) { grid-template-columns: 1fr; }
  }

  &__card {
    padding: $space-8 $space-6;
    background: $color-white;
    border: 1px solid $color-border;
    border-radius: $radius-lg;
    display: flex;
    flex-direction: column;
    gap: $space-3;
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

// ─── Positioning ─────────────────────────────────────────────────────────────
.gov-position {
  &__inner { max-width: 720px; }
  h2 { margin-bottom: $space-6; }

  &__compare {
    display: flex;
    flex-direction: column;
    gap: $space-3;
    margin-bottom: $space-5;
    padding: $space-6;
    background: $color-white;
    border: 1px solid $color-border;
    border-radius: $radius-lg;
  }

  &__compare-row {
    display: flex;
    align-items: center;
    gap: $space-4;
    flex-wrap: wrap;
  }

  &__compare-label {
    font-size: $font-size-sm;
    color: $color-text-muted;
    min-width: 140px;
  }

  &__compare-value {
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    padding: $space-1 $space-3;
    border-radius: $radius-sm;

    &--old {
      color: $color-text-subtle;
      background: rgba($color-navy, 0.05);
      text-decoration: line-through;
    }

    &--new {
      color: $color-teal-deep;
      background: $color-teal-soft;
    }
  }

  &__principles {
    display: flex;
    gap: $space-3;
    flex-wrap: wrap;
    margin-top: $space-3;
  }

  &__principle {
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
}
</style>
