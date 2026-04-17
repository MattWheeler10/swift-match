<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import SectionBlock from '@/components/sections/SectionBlock.vue'
import TransformationPathway from '@/components/sections/TransformationPathway.vue'
import FinalCTA from '@/components/sections/FinalCTA.vue'
import { solution as s } from '@/content/solution'
</script>

<template>
  <HeroSection
    :headline="s.hero.headline"
    :subheadline="s.hero.subheadline"
    :supporting-line="s.hero.supportingLine"
    :key-line="s.hero.keyLine"
    :ctas="s.hero.ctas"
  />

  <!-- ── What is SwiftMatch? ── -->
  <SectionBlock :headline="s.whatIs.headline">
    <p class="lead">{{ s.whatIs.lead }}</p>
    <p>{{ s.whatIs.body }}</p>
    <ul class="dot-list">
      <li v-for="p in s.whatIs.points" :key="p">{{ p }}</li>
    </ul>
    <p class="callout">{{ s.whatIs.keyLine }}</p>
  </SectionBlock>

  <!-- ── Core Components ── -->
  <SectionBlock headline="Core Components" alt>
    <div v-reveal.stagger="{ stagger: 0.1, y: 28 }" class="core-grid">
      <div v-for="c in s.coreComponents" :key="c.title" class="core-col">
        <div class="core-col__header">
          <span class="core-col__tag">{{ c.title }}</span>
        </div>
        <ul class="core-col__list">
          <li v-for="b in c.bullets" :key="b" class="core-col__item">{{ b }}</li>
        </ul>
        <div class="core-col__outcome">
          <p>{{ c.outcome }}</p>
        </div>
      </div>
    </div>
  </SectionBlock>

  <!-- ── Continuous workforce supply ── -->
  <SectionBlock :headline="s.supplyLayer.headline">
    <p>{{ s.supplyLayer.body }}</p>
    <ul class="dot-list">
      <li v-for="p in s.supplyLayer.points" :key="p">{{ p }}</li>
    </ul>
    <p class="callout">{{ s.supplyLayer.keyLine }}</p>
    <p class="mechanism">{{ s.supplyLayer.mechanismLine }}</p>
  </SectionBlock>

  <!-- ── Fully coordinated hiring system ── -->
  <SectionBlock :headline="s.orchestration.headline" alt>
    <div v-reveal.stagger="{ stagger: 0.1, y: 24 }" class="orchestration-split">

      <!-- Left: what it connects -->
      <div class="orch-panel">
        <p class="orch-panel__eyebrow">SwiftMatch connects</p>
        <ul class="orch-panel__list">
          <li v-for="c in s.orchestration.connects" :key="c" class="orch-panel__item">
            <span class="orch-panel__dot" aria-hidden="true" />
            {{ c }}
          </li>
        </ul>
      </div>

      <!-- Right: what hiring becomes -->
      <div class="orch-panel orch-panel--outcome">
        <p class="orch-panel__eyebrow">Hiring becomes</p>
        <ul class="orch-panel__list">
          <li v-for="b in s.orchestration.becomes" :key="b" class="orch-panel__item orch-panel__item--bold">
            <svg class="orch-panel__check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
            {{ b }}
          </li>
        </ul>
      </div>

    </div>
    <p class="callout">{{ s.orchestration.closingLine }}</p>
  </SectionBlock>

  <!-- ── Transformation pathway ── -->
  <TransformationPathway
    :headline="s.transformation.headline"
    :stages="s.transformation.stages"
    :closing-line="s.transformation.closingLine"
  />

  <!-- ── How it connects ── -->
  <SectionBlock :headline="s.howItConnects.headline" alt>
    <div v-reveal.stagger="{ stagger: 0.07, y: 20 }" class="connects-flow">
      <div
        v-for="(step, i) in s.howItConnects.flow"
        :key="step"
        class="connects-step"
        :class="{ 'connects-step--outcome': i === s.howItConnects.flow.length - 1 }"
      >
        <span class="connects-step__num">{{ String(i + 1).padStart(2, '0') }}</span>
        <span class="connects-step__label">{{ step }}</span>
      </div>
    </div>

    <ul class="dot-list">
      <li v-for="p in s.howItConnects.points" :key="p">{{ p }}</li>
    </ul>

    <div class="final-lines">
      <p v-for="(line, i) in s.howItConnects.finalLines" :key="line"
        :class="{ callout: i === 0 }">{{ line }}</p>
    </div>
  </SectionBlock>

  <FinalCTA
    :headline="s.finalCta.headline"
    :subtext="s.finalCta.subtext"
    :ctas="s.finalCta.ctas"
  />
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

// ─── Lead text ────────────────────────────────────────────────────────────────
.lead {
  font-size: $font-size-md;
  color: $color-navy;
  font-weight: $font-weight-semibold;
  margin: 0;
}

// ─── Teal-dot bullet list ─────────────────────────────────────────────────────
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

// ─── Callout (teal left-border) ───────────────────────────────────────────────
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

.mechanism {
  font-weight: $font-weight-medium;
  color: $color-navy;
  font-size: $font-size-sm;
  margin: 0;
}

// ─── Core Components grid ─────────────────────────────────────────────────────
.core-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $space-6;

  @media (max-width: 900px) { grid-template-columns: 1fr; }
}

.core-col {
  background: $color-white;
  border: 1px solid $color-border;
  border-top: 3px solid $color-teal-deep;
  border-radius: 0 0 $radius-lg $radius-lg;
  padding: $space-6;
  display: flex;
  flex-direction: column;
  gap: $space-5;

  // No hover — explicitly static
  transform: none !important;
  box-shadow: none !important;

  &__header {
    display: flex;
    align-items: center;
  }

  &__tag {
    display: inline-block;
    font-size: $font-size-xs;
    font-weight: $font-weight-bold;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: $color-teal-deep;
    background: $color-teal-soft;
    border-radius: $radius-sm;
    padding: $space-1 $space-3;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: $space-3;
    flex: 1;
  }

  &__item {
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

  &__outcome {
    margin-top: auto;
    padding: $space-3 $space-4;
    background: $color-teal-soft;
    border-left: 3px solid $color-teal-deep;
    border-radius: 0 $radius-sm $radius-sm 0;

    p {
      margin: 0;
      font-size: $font-size-xs;
      font-weight: $font-weight-semibold;
      color: $color-teal-deep;
      line-height: 1.5;
    }
  }
}

// ─── Orchestration two-panel split ───────────────────────────────────────────
.orchestration-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $space-6;

  @media (max-width: 640px) { grid-template-columns: 1fr; }
}

.orch-panel {
  background: $color-white;
  border: 1px solid $color-border;
  border-top: 3px solid $color-navy;
  border-radius: 0 0 $radius-lg $radius-lg;
  padding: $space-6;
  display: flex;
  flex-direction: column;
  gap: $space-5;

  &--outcome {
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

    .orch-panel--outcome & { color: $color-teal-deep; }
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: $space-3;
  }

  &__item {
    display: flex;
    align-items: flex-start;
    gap: $space-3;
    font-size: $font-size-sm;
    color: $color-text;
    line-height: 1.5;

    &--bold {
      font-size: $font-size-md;
      font-weight: $font-weight-bold;
      color: $color-navy;
      align-items: center;
    }
  }

  &__dot {
    flex-shrink: 0;
    margin-top: 0.45em;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: $color-navy;
  }

  &__check {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    color: $color-teal-deep;
  }
}

// ─── "How it connects" numbered grid ─────────────────────────────────────────
.connects-flow {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: $color-border;
  border-radius: $radius-lg;
  overflow: hidden;
  border: 1px solid $color-border;

  @media (max-width: 640px) { grid-template-columns: repeat(2, 1fr); }
}

.connects-step {
  background: $color-white;
  padding: $space-6 $space-5;
  display: flex;
  flex-direction: column;
  gap: $space-2;

  &__num {
    font-family: $font-family-display;
    font-weight: $font-weight-bold;
    font-size: clamp(1.75rem, 2.5vw + 0.5rem, 2.5rem);
    line-height: 1;
    letter-spacing: -0.04em;
    background: linear-gradient(180deg, $color-navy 0%, $color-navy-light 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__label {
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: $color-navy;
    line-height: 1.3;
  }

  &--outcome {
    background: $color-teal-soft;

    .connects-step__num {
      background: $color-teal-deep;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .connects-step__label {
      color: $color-teal-deep;
      font-weight: $font-weight-bold;
    }
  }
}

// ─── Final lines ──────────────────────────────────────────────────────────────
.final-lines {
  display: flex;
  flex-direction: column;
  gap: $space-4;

  p {
    margin: 0;
    font-size: $font-size-sm;
    color: $color-text;
    line-height: 1.65;
  }
}
</style>
