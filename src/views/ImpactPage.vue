<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import SectionBlock from '@/components/sections/SectionBlock.vue'
import TransformationPathway from '@/components/sections/TransformationPathway.vue'
import ProofMetrics from '@/components/sections/ProofMetrics.vue'
import PilotBlock from '@/components/sections/PilotBlock.vue'
import FinalCTA from '@/components/sections/FinalCTA.vue'
import { impact as i } from '@/content/impact'
</script>

<template>
  <HeroSection
    :headline="i.hero.headline"
    :subheadline="i.hero.subheadline"
    :supporting-line="i.hero.supportingLine"
  >
    <template #visual>
      <div v-reveal.stagger="{ stagger: 0.1, y: 16 }" class="impact-cascade">
        <div
          v-for="(step, idx) in i.hero.diagramSteps"
          :key="step"
          class="impact-cascade__step"
          :class="{ 'impact-cascade__step--outcome': idx === i.hero.diagramSteps.length - 1 }"
        >
          <div class="impact-cascade__aside">
            <span class="impact-cascade__num">{{ String(idx + 1).padStart(2, '0') }}</span>
            <span
              v-if="idx < i.hero.diagramSteps.length - 1"
              class="impact-cascade__connector"
              aria-hidden="true"
            />
          </div>
          <span class="impact-cascade__label">{{ step }}</span>
        </div>
      </div>
    </template>
  </HeroSection>

  <!-- ── Core Value ── -->
  <SectionBlock :headline="i.coreValue.headline">
    <div v-reveal.stagger="{ stagger: 0.12, y: 28 }" class="insight-grid">
      <div
        v-for="s in i.coreValue.statements"
        :key="s"
        class="insight-card"
      >
        <p class="insight-card__text">{{ s }}</p>
        <span class="insight-card__bar" aria-hidden="true" />
      </div>
    </div>
  </SectionBlock>

  <!-- ── Workforce & Service Impact ── -->
  <SectionBlock :headline="i.workforce.headline" alt>
    <ul class="dot-list">
      <li v-for="p in i.workforce.points" :key="p">{{ p }}</li>
    </ul>
    <p class="text-muted">{{ i.workforce.supportingLine }}</p>
    <p class="callout">{{ i.workforce.closingLine }}</p>
  </SectionBlock>

  <!-- ── Financial Impact ── -->
  <SectionBlock :headline="i.financial.headline">
    <ul class="dot-list">
      <li v-for="p in i.financial.points" :key="p">{{ p }}</li>
    </ul>
    <div class="supporting-stack">
      <p v-for="line in i.financial.supportingLines" :key="line">{{ line }}</p>
    </div>
    <p class="callout">{{ i.financial.closingLine }}</p>
  </SectionBlock>

  <!-- ── Operational Impact ── -->
  <SectionBlock :headline="i.operational.headline" alt>
    <div v-reveal.stagger="{ stagger: 0.07, y: 14 }" class="check-grid">
      <div v-for="m in i.operational.metrics" :key="m" class="check-item">
        <span class="check-item__icon" aria-hidden="true">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </span>
        <span>{{ m }}</span>
      </div>
    </div>
    <p class="text-muted">{{ i.operational.supportingLine }}</p>
    <p class="callout">{{ i.operational.closingLine }}</p>
  </SectionBlock>

  <!-- ── Capability ── -->
  <SectionBlock :headline="i.capability.headline">
    <p class="text-muted">{{ i.capability.supportingLine }}</p>
    <ul class="dot-list">
      <li v-for="p in i.capability.points" :key="p">{{ p }}</li>
    </ul>
    <p class="callout">{{ i.capability.keyLine }}</p>
  </SectionBlock>

  <!-- ── Transformation ── -->
  <TransformationPathway
    :headline="i.transformation.headline"
    :intro="i.transformation.intro"
    :stages="i.transformation.stages"
    :closing-line="i.transformation.closingLine"
    alt
  />

  <!-- ── Proof Metrics ── -->
  <ProofMetrics
    :headline="i.proof.headline"
    :metrics="i.proof.metrics"
    :supporting-line="i.proof.supportingLine"
    :pressure-line="i.proof.pressureLine"
  />

  <!-- ── Pilot CTA ── -->
  <PilotBlock
    :headline="i.pilot.headline"
    :points="i.pilot.points"
    :supporting-line="i.pilot.supportingLine"
    :closing-line="i.pilot.closingLine"
    :cta="i.pilot.cta"
    alt
  />

  <FinalCTA
    :headline="i.finalCta.headline"
    :subtext="i.finalCta.subtext"
    :ctas="i.finalCta.ctas"
  />
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

// ─── Hero cascade ─────────────────────────────────────────────────────────────
.impact-cascade {
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
  max-width: 260px;

  &__step {
    display: flex;
    align-items: flex-start;
    gap: $space-4;
  }

  &__aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    width: 52px;
  }

  &__num {
    font-family: $font-family-display;
    font-weight: $font-weight-bold;
    font-size: clamp(1.5rem, 2vw + 0.5rem, 2rem);
    line-height: 1;
    letter-spacing: -0.04em;
    background: linear-gradient(180deg, $color-navy 0%, $color-navy-light 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    .impact-cascade__step--outcome & {
      background: $color-teal-deep;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &__connector {
    display: block;
    width: 2px;
    height: $space-5;
    background: linear-gradient(180deg, $color-teal-deep 0%, rgba($color-teal-deep, 0.2) 100%);
    border-radius: 1px;
    margin-top: $space-1;
  }

  &__label {
    font-size: $font-size-md;
    font-weight: $font-weight-bold;
    color: $color-navy;
    line-height: 1;
    padding-top: 0.35em;

    .impact-cascade__step--outcome & {
      color: $color-teal-deep;
    }
  }
}

// ─── Shared ───────────────────────────────────────────────────────────────────
.text-muted { color: $color-text-muted; font-size: $font-size-sm; margin: 0; }

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

// ─── Core value insight cards ─────────────────────────────────────────────────
.insight-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $space-5;

  @media (max-width: 900px) { grid-template-columns: 1fr; }
}

.insight-card {
  display: flex;
  flex-direction: column;
  gap: $space-5;
  padding: $space-8 $space-6;
  background: $color-navy;
  border-radius: $radius-lg;

  &__text {
    font-size: $font-size-base;
    font-weight: $font-weight-medium;
    color: rgba($color-white, 0.88);
    line-height: 1.65;
    margin: 0;
    flex: 1;
  }

  &__bar {
    display: block;
    height: 3px;
    border-radius: $radius-full;
    background: linear-gradient(90deg, $color-teal-deep 0%, rgba($color-teal-deep, 0.2) 100%);
  }
}

// ─── Supporting text stack ────────────────────────────────────────────────────
.supporting-stack {
  display: flex;
  flex-direction: column;
  gap: $space-2;

  p {
    font-size: $font-size-sm;
    color: $color-text-muted;
    line-height: 1.6;
    margin: 0;
  }
}

// ─── Operational metrics check grid ──────────────────────────────────────────
.check-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: $space-3;

  @media (max-width: 640px) { grid-template-columns: 1fr; }
}

.check-item {
  display: flex;
  align-items: flex-start;
  gap: $space-3;
  padding: $space-4 $space-5;
  background: $color-white;
  border: 1px solid $color-border;
  border-left: 3px solid $color-teal-deep;
  border-radius: 0 $radius-md $radius-md 0;
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  color: $color-navy;
  line-height: 1.45;

  &__icon {
    flex-shrink: 0;
    margin-top: 1px;
    width: 20px;
    height: 20px;
    border-radius: $radius-full;
    background: $color-teal-soft;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-teal-deep;
  }
}
</style>
