<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import SectionBlock from '@/components/sections/SectionBlock.vue'
import FinalCTA from '@/components/sections/FinalCTA.vue'
import { platform as p } from '@/content/platform'
</script>

<template>
  <!-- Hero -->
  <HeroSection
    :eyebrow="p.hero.eyebrow"
    :headline="p.hero.headline"
    :subheadline="p.hero.subheadline"
    :supporting-line="p.hero.supportingLine"
  />

  <!-- From Process to System -->
  <SectionBlock :headline="p.processShift.headline">
    <div v-reveal.stagger="{ stagger: 0.1, y: 20 }" class="process-compare">
      <div class="process-compare__col process-compare__col--old">
        <span class="process-compare__label">{{ p.processShift.traditional.label }}</span>
        <div class="process-flow">
          <template v-for="(step, i) in p.processShift.traditional.flow" :key="step">
            <span class="process-flow__step process-flow__step--old">{{ step }}</span>
            <span v-if="i < p.processShift.traditional.flow.length - 1" class="process-flow__arrow" aria-hidden="true">→</span>
          </template>
        </div>
      </div>
      <div class="process-compare__col process-compare__col--new">
        <span class="process-compare__label">{{ p.processShift.swiftmatch.label }}</span>
        <div class="process-flow">
          <template v-for="(step, i) in p.processShift.swiftmatch.flow" :key="step">
            <span class="process-flow__step" :class="{ 'process-flow__step--final': i === p.processShift.swiftmatch.flow.length - 1 }">{{ step }}</span>
            <span v-if="i < p.processShift.swiftmatch.flow.length - 1" class="process-flow__arrow" aria-hidden="true">→</span>
          </template>
        </div>
      </div>
    </div>
    <p class="body-text">{{ p.processShift.body }}</p>
  </SectionBlock>

  <!-- What Makes It Different -->
  <SectionBlock :headline="p.differentiation.headline" alt>
    <div v-reveal.stagger="{ stagger: 0.1, y: 20 }" class="diff-grid">
      <div v-for="pt in p.differentiation.points" :key="pt.title" class="diff-card">
        <h3 class="diff-card__title">{{ pt.title }}</h3>
        <p class="diff-card__body">{{ pt.body }}</p>
      </div>
    </div>
    <div class="consistency-block">
      <p class="consistency-block__headline">{{ p.differentiation.consistency.headline }}</p>
      <ul class="dot-list">
        <li v-for="pt in p.differentiation.consistency.points" :key="pt">{{ pt }}</li>
      </ul>
    </div>
  </SectionBlock>

  <!-- How It Works -->
  <section class="plat-steps section">
    <div class="container">
      <h2 v-reveal="{ y: 20 }" class="display plat-steps__headline">{{ p.howItWorks.headline }}</h2>
      <div v-reveal.stagger="{ stagger: 0.08, y: 24 }" class="plat-steps__list">
        <div v-for="step in p.howItWorks.steps" :key="step.title" class="plat-step">
          <div class="plat-step__num">{{ step.number }}</div>
          <div class="plat-step__body">
            <h3 class="plat-step__title">{{ step.title }}</h3>
            <p class="plat-step__body-text">{{ step.body }}</p>
            <ul class="dot-list">
              <li v-for="pt in step.points" :key="pt">{{ pt }}</li>
            </ul>
            <p v-if="step.closing" class="callout">{{ step.closing }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Built For -->
  <SectionBlock :headline="p.builtFor.headline" alt>
    <p class="body-text">{{ p.builtFor.body }}</p>
    <ul class="dot-list">
      <li v-for="pt in p.builtFor.points" :key="pt">{{ pt }}</li>
    </ul>
  </SectionBlock>

  <!-- Security -->
  <SectionBlock :headline="p.security.headline">
    <div v-reveal.stagger="{ stagger: 0.1, y: 20 }" class="security-split">
      <div class="sec-panel">
        <p class="sec-panel__eyebrow">Compliance</p>
        <p class="body-text">{{ p.security.compliance.label }}</p>
        <ul class="dot-list">
          <li v-for="c in p.security.compliance.items" :key="c">{{ c }}</li>
        </ul>
      </div>
      <div class="sec-panel sec-panel--measures">
        <p class="sec-panel__eyebrow">{{ p.security.measures.label }}</p>
        <ul class="dot-list">
          <li v-for="m in p.security.measures.items" :key="m">{{ m }}</li>
        </ul>
      </div>
    </div>
  </SectionBlock>

  <FinalCTA
    :headline="p.finalCta.headline"
    :subtext="p.finalCta.subtext"
    :ctas="p.finalCta.ctas"
  />
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.body-text {
  font-size: $font-size-sm;
  color: $color-text-muted;
  line-height: 1.65;
  margin: 0;
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

.dot-list {
  list-style: none;
  padding: 0;
  margin: 0;
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

// ─── Process Compare ─────────────────────────────────────────────────────────
.process-compare {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $space-5;
  margin-bottom: $space-6;

  @media (max-width: 640px) { grid-template-columns: 1fr; }

  &__col {
    padding: $space-6;
    border-radius: $radius-lg;
    display: flex;
    flex-direction: column;
    gap: $space-4;

    &--old {
      background: rgba($color-navy, 0.04);
      border: 1px solid rgba($color-navy, 0.1);
    }

    &--new {
      background: $color-teal-soft;
      border: 1px solid rgba($color-teal-deep, 0.25);
    }
  }

  &__label {
    font-size: $font-size-xs;
    font-weight: $font-weight-bold;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: $color-text-subtle;

    .process-compare__col--new & { color: $color-teal-deep; }
  }
}

.process-flow {
  display: flex;
  align-items: center;
  gap: $space-2;
  flex-wrap: wrap;

  &__step {
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: $color-navy;
    padding: $space-1 $space-3;
    background: rgba($color-navy, 0.06);
    border-radius: $radius-sm;

    &--old { opacity: 0.6; }

    &--final {
      color: $color-teal-deep;
      background: rgba($color-teal-deep, 0.12);
    }
  }

  &__arrow { color: $color-text-subtle; font-size: $font-size-sm; }
}

// ─── What Makes It Different ─────────────────────────────────────────────────
.diff-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: $space-4;
  margin-bottom: $space-6;

  @media (max-width: 640px) { grid-template-columns: 1fr; }
}

.diff-card {
  padding: $space-6;
  background: $color-white;
  border: 1px solid $color-border;
  border-radius: $radius-lg;
  display: flex;
  flex-direction: column;
  gap: $space-2;

  &__title {
    font-family: $font-family-display;
    font-weight: $font-weight-bold;
    font-size: $font-size-base;
    color: $color-navy;
    margin: 0;
  }

  &__body {
    font-size: $font-size-sm;
    color: $color-text-muted;
    line-height: 1.55;
    margin: 0;
  }
}

.consistency-block {
  padding: $space-6;
  background: $color-navy;
  border-radius: $radius-lg;
  display: flex;
  flex-direction: column;
  gap: $space-4;

  &__headline {
    font-family: $font-family-display;
    font-weight: $font-weight-bold;
    font-size: $font-size-base;
    color: $color-white;
    margin: 0;
  }

  .dot-list li {
    color: rgba($color-white, 0.75);

    &::before { background: $color-teal; }
  }
}

// ─── Platform Steps ───────────────────────────────────────────────────────────
.plat-steps {
  &__headline { margin-bottom: $space-10; max-width: 860px; }

  &__list {
    display: flex;
    flex-direction: column;
    gap: $space-5;
    max-width: 860px;
  }
}

.plat-step {
  display: flex;
  gap: $space-6;
  align-items: flex-start;
  padding: $space-8 $space-8;
  background: $color-white;
  border: 1px solid $color-border;
  border-radius: $radius-lg;

  &__num {
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

  &__body {
    display: flex;
    flex-direction: column;
    gap: $space-3;
    flex: 1;
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
    color: $color-text-muted;
    line-height: 1.55;
    margin: 0;
  }
}

// ─── Security ────────────────────────────────────────────────────────────────
.security-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $space-5;

  @media (max-width: 640px) { grid-template-columns: 1fr; }
}

.sec-panel {
  background: $color-white;
  border: 1px solid $color-border;
  border-top: 3px solid $color-navy;
  border-radius: 0 0 $radius-lg $radius-lg;
  padding: $space-6;
  display: flex;
  flex-direction: column;
  gap: $space-4;

  &--measures {
    border-top-color: $color-teal-deep;
    background: $color-teal-soft;
    border-color: rgba($color-teal-deep, 0.2);
  }

  &__eyebrow {
    font-size: $font-size-xs;
    font-weight: $font-weight-bold;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: $color-navy;
    margin: 0;

    .sec-panel--measures & { color: $color-teal-deep; }
  }
}
</style>
