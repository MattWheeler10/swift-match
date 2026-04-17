<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import SectionBlock from '@/components/sections/SectionBlock.vue'
import FinalCTA from '@/components/sections/FinalCTA.vue'
import { pilot as p } from '@/content/pilot'
</script>

<template>
  <HeroSection
    :headline="p.hero.headline"
    :subheadline="p.hero.subheadline"
    :supporting-line="p.hero.supportingLine"
    :tension-line="p.hero.tensionLine"
    :ctas="p.hero.ctas"
  />

  <!-- ── What it is ── -->
  <SectionBlock :headline="p.whatItIs.headline">
    <div class="body-stack">
      <p v-for="b in p.whatItIs.body" :key="b" class="text-muted">{{ b }}</p>
    </div>
    <div v-reveal.stagger="{ stagger: 0.08, y: 14 }" class="check-list">
      <div v-for="pt in p.whatItIs.points" :key="pt" class="check-item">
        <span class="check-item__icon" aria-hidden="true">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </span>
        <span>{{ pt }}</span>
      </div>
    </div>
    <p class="callout">{{ p.whatItIs.keyLine }}</p>
    <p class="text-muted">{{ p.whatItIs.additionalLine }}</p>
  </SectionBlock>

  <!-- ── Deliverables ── -->
  <SectionBlock :headline="p.deliverables.headline" alt>
    <p class="text-muted">{{ p.deliverables.lead }}</p>
    <div v-reveal.stagger="{ stagger: 0.07, y: 14 }" class="check-grid">
      <div v-for="d in p.deliverables.items" :key="d" class="check-item">
        <span class="check-item__icon" aria-hidden="true">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </span>
        <span>{{ d }}</span>
      </div>
    </div>
    <p class="callout">{{ p.deliverables.keyLine }}</p>
  </SectionBlock>

  <!-- ── How It Works (phases) ── -->
  <SectionBlock headline="How It Works">
    <div v-reveal.stagger="{ stagger: 0.1, y: 24 }" class="phase-grid">
      <div v-for="(phase, i) in p.phases" :key="phase.title" class="phase-col">
        <div class="phase-col__header">
          <span class="phase-col__num">{{ String(i + 1).padStart(2, '0') }}</span>
          <span class="phase-col__tag">{{ phase.title }}</span>
        </div>
        <ul class="phase-col__list">
          <li v-for="item in phase.items" :key="item" class="phase-col__item">{{ item }}</li>
        </ul>
      </div>
    </div>
    <p class="callout">{{ p.phasesClosingLine }}</p>
  </SectionBlock>

  <!-- ── KPIs ── -->
  <SectionBlock :headline="p.kpis.headline" alt>
    <div v-reveal.stagger="{ stagger: 0.07, y: 14 }" class="check-grid">
      <div v-for="k in p.kpis.items" :key="k" class="check-item">
        <span class="check-item__icon" aria-hidden="true">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </span>
        <span>{{ k }}</span>
      </div>
    </div>
    <p class="callout">{{ p.kpis.keyLine }}</p>
    <p class="text-muted">{{ p.kpis.supportingLine }}</p>
  </SectionBlock>

  <!-- ── Commercial ── -->
  <SectionBlock :headline="p.commercial.headline">
    <div v-reveal.stagger="{ stagger: 0.08, y: 14 }" class="check-list">
      <div v-for="pt in p.commercial.points" :key="pt" class="check-item">
        <span class="check-item__icon" aria-hidden="true">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </span>
        <span>{{ pt }}</span>
      </div>
    </div>
    <p class="text-muted">{{ p.commercial.additionalLine }}</p>
  </SectionBlock>

  <!-- ── Low Risk ── -->
  <SectionBlock :headline="p.lowRisk.headline" alt>
    <div v-reveal.stagger="{ stagger: 0.08, y: 14 }" class="check-list">
      <div v-for="pt in p.lowRisk.points" :key="pt" class="check-item">
        <span class="check-item__icon" aria-hidden="true">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </span>
        <span>{{ pt }}</span>
      </div>
    </div>
    <p class="callout">{{ p.lowRisk.keyLine }}</p>
    <p class="tension-callout">{{ p.lowRisk.criticalLine }}</p>
  </SectionBlock>

  <FinalCTA
    :headline="p.finalCta.headline"
    :subtext="p.finalCta.subtext"
    :ctas="p.finalCta.ctas"
  />
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

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

.tension-callout {
  padding: $space-5 $space-6;
  background: $color-navy;
  border-radius: $radius-md;
  font-weight: $font-weight-bold;
  color: $color-white;
  font-size: $font-size-sm;
  line-height: 1.6;
  margin: 0;
}

// ─── Body stack ───────────────────────────────────────────────────────────────
.body-stack {
  display: flex;
  flex-direction: column;
  gap: $space-2;
}

// ─── Check items (single column) ─────────────────────────────────────────────
.check-list {
  display: flex;
  flex-direction: column;
  gap: $space-3;
}

// ─── Check items (2-col grid) ─────────────────────────────────────────────────
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

// ─── Phase cards ──────────────────────────────────────────────────────────────
.phase-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $space-5;

  @media (max-width: 900px) { grid-template-columns: 1fr; }
}

.phase-col {
  background: $color-white;
  border: 1px solid $color-border;
  border-top: 3px solid $color-teal-deep;
  border-radius: 0 0 $radius-lg $radius-lg;
  padding: $space-6;
  display: flex;
  flex-direction: column;
  gap: $space-4;

  transform: none !important;
  box-shadow: none !important;

  &__header {
    display: flex;
    flex-direction: column;
    gap: $space-2;
  }

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

  &__tag {
    font-size: $font-size-xs;
    font-weight: $font-weight-bold;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: $color-teal-deep;
    line-height: 1.4;
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
}
</style>
