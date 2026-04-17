<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import SectionBlock from '@/components/sections/SectionBlock.vue'
import FinalCTA from '@/components/sections/FinalCTA.vue'
import { platform as p } from '@/content/platform'
</script>

<template>
  <HeroSection
    :headline="p.hero.headline"
    :subheadline="p.hero.subheadline"
    :supporting-line="p.hero.supportingLine"
    :key-line="p.hero.keyLine"
  />

  <!-- ── Platform Overview ── -->
  <SectionBlock :headline="p.overview.headline">
    <div class="body-stack">
      <p v-for="b in p.overview.body" :key="b" class="text-muted">{{ b }}</p>
    </div>
    <div v-reveal.stagger="{ stagger: 0.1, y: 24 }" class="pillar-grid">
      <div v-for="pillar in p.overview.pillars" :key="pillar.title" class="pillar-col">
        <span class="pillar-col__tag">{{ pillar.title }}</span>
        <p class="pillar-col__desc">{{ pillar.description }}</p>
      </div>
    </div>
  </SectionBlock>

  <!-- ── Architecture ── -->
  <SectionBlock :headline="p.architecture.headline" alt>
    <div v-reveal.stagger="{ stagger: 0.1, y: 20 }" class="arch-layers">
      <div class="arch-layer">
        <span class="arch-layer__label">Your existing systems</span>
        <p class="arch-layer__sub">{{ p.architecture.flow[0] }}</p>
      </div>
      <div class="arch-layer arch-layer--core">
        <span class="arch-layer__badge">SwiftMatch</span>
        <span class="arch-layer__label">{{ p.architecture.flow[1] }}</span>
      </div>
      <div class="arch-layer">
        <span class="arch-layer__label">Execution layer</span>
        <p class="arch-layer__sub">{{ p.architecture.flow[2] }}</p>
      </div>
    </div>
    <p class="text-muted">{{ p.architecture.body }}</p>
    <ul class="dot-list">
      <li v-for="pt in p.architecture.points" :key="pt">{{ pt }}</li>
    </ul>
    <p class="callout">{{ p.architecture.keyLine }}</p>
    <p class="text-muted">{{ p.architecture.additionalLine }}</p>
  </SectionBlock>

  <!-- ── Integrations ── -->
  <SectionBlock :headline="p.integrations.headline">
    <p class="text-muted">{{ p.integrations.lead }}</p>
    <div class="system-tags">
      <span v-for="sys in p.integrations.systems" :key="sys" class="system-tag">{{ sys }}</span>
    </div>
    <p class="section-eyebrow">Key Points</p>
    <ul class="dot-list">
      <li v-for="pt in p.integrations.keyPoints" :key="pt">{{ pt }}</li>
    </ul>
    <p class="text-muted">{{ p.integrations.additionalLine }}</p>
  </SectionBlock>

  <!-- ── Data ── -->
  <SectionBlock :headline="p.data.headline" alt>
    <ul class="dot-list">
      <li v-for="pt in p.data.points" :key="pt">{{ pt }}</li>
    </ul>
    <div class="callout-stack">
      <p v-for="line in p.data.keyLines" :key="line" class="callout">{{ line }}</p>
    </div>
  </SectionBlock>

  <!-- ── Security ── -->
  <SectionBlock :headline="p.security.headline">
    <div v-reveal.stagger="{ stagger: 0.1, y: 20 }" class="security-split">
      <div class="sec-panel">
        <p class="sec-panel__eyebrow">Compliance</p>
        <p class="text-muted">{{ p.security.compliance.label }}</p>
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
    <p class="callout">{{ p.security.keyLine }}</p>
  </SectionBlock>

  <!-- ── AI ── -->
  <SectionBlock :headline="p.ai.headline" alt>
    <p class="section-eyebrow">SwiftMatch applies AI to</p>
    <ul class="dot-list">
      <li v-for="u in p.ai.uses" :key="u">{{ u }}</li>
    </ul>
    <p class="section-eyebrow">{{ p.ai.governance.label }}</p>
    <ul class="dot-list">
      <li v-for="g in p.ai.governance.items" :key="g">{{ g }}</li>
    </ul>
    <p class="callout">{{ p.ai.keyLine }}</p>
  </SectionBlock>

  <!-- ── Scalability ── -->
  <SectionBlock :headline="p.scalability.headline">
    <ul class="dot-list">
      <li v-for="pt in p.scalability.points" :key="pt">{{ pt }}</li>
    </ul>
    <p class="section-eyebrow">{{ p.scalability.approach.label }}</p>
    <div v-reveal.stagger="{ stagger: 0.08, y: 16 }" class="deploy-steps">
      <div
        v-for="(item, i) in p.scalability.approach.items"
        :key="item"
        class="deploy-step"
        :class="{ 'deploy-step--outcome': i === p.scalability.approach.items.length - 1 }"
      >
        <span class="deploy-step__num">{{ String(i + 1).padStart(2, '0') }}</span>
        <span class="deploy-step__label">{{ item }}</span>
      </div>
    </div>
    <p class="callout">{{ p.scalability.keyLine }}</p>
  </SectionBlock>

  <!-- ── Summary ── -->
  <SectionBlock :headline="p.summary.headline" alt>
    <p class="text-muted">{{ p.summary.lead }}</p>
    <div v-reveal.stagger="{ stagger: 0.07, y: 14 }" class="check-grid">
      <div v-for="pt in p.summary.points" :key="pt" class="check-item">
        <span class="check-item__icon" aria-hidden="true">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </span>
        <span>{{ pt }}</span>
      </div>
    </div>
    <p class="callout">{{ p.summary.closingLine }}</p>
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

.callout-stack {
  display: flex;
  flex-direction: column;
  gap: $space-3;
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

.section-eyebrow {
  font-size: $font-size-xs;
  font-weight: $font-weight-bold;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: $color-teal-deep;
  margin: 0;
}

// ─── Body stack ───────────────────────────────────────────────────────────────
.body-stack {
  display: flex;
  flex-direction: column;
  gap: $space-2;
}

// ─── Platform pillars ─────────────────────────────────────────────────────────
.pillar-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $space-5;

  @media (max-width: 768px) { grid-template-columns: 1fr; }
}

.pillar-col {
  background: $color-white;
  border: 1px solid $color-border;
  border-top: 3px solid $color-teal-deep;
  border-radius: 0 0 $radius-lg $radius-lg;
  padding: $space-6;
  display: flex;
  flex-direction: column;
  gap: $space-3;

  transform: none !important;
  box-shadow: none !important;

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
    align-self: flex-start;
  }

  &__desc {
    font-size: $font-size-sm;
    color: $color-text;
    line-height: 1.6;
    margin: 0;
  }
}

// ─── Architecture layers ──────────────────────────────────────────────────────
.arch-layers {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: $color-border;
  border-radius: $radius-lg;
  overflow: hidden;
  border: 1px solid $color-border;

  @media (max-width: 640px) { grid-template-columns: 1fr; }
}

.arch-layer {
  background: $color-white;
  padding: $space-8 $space-6;
  display: flex;
  flex-direction: column;
  gap: $space-2;

  &__label {
    font-size: $font-size-sm;
    font-weight: $font-weight-bold;
    color: $color-navy;
    line-height: 1.35;
  }

  &__sub {
    font-size: $font-size-xs;
    color: $color-text-muted;
    line-height: 1.5;
    margin: 0;
  }

  &__badge {
    display: inline-block;
    font-size: $font-size-xs;
    font-weight: $font-weight-bold;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: $color-teal-deep;
    background: rgba($color-teal-deep, 0.15);
    border-radius: $radius-sm;
    padding: $space-1 $space-3;
    align-self: flex-start;
  }

  &--core {
    background: $color-teal-soft;
    border-top: 3px solid $color-teal-deep;

    .arch-layer__label { color: $color-teal-deep; font-size: $font-size-md; }
  }
}

// ─── System tags ──────────────────────────────────────────────────────────────
.system-tags {
  display: flex;
  flex-wrap: wrap;
  gap: $space-2;
}

.system-tag {
  display: inline-flex;
  align-items: center;
  padding: $space-2 $space-4;
  background: $color-white;
  border: 1px solid $color-border;
  border-radius: $radius-full;
  font-size: $font-size-xs;
  font-weight: $font-weight-semibold;
  color: $color-navy;
  white-space: nowrap;
}

// ─── Security two-panel split ─────────────────────────────────────────────────
.security-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $space-6;

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

// ─── Deployment steps ─────────────────────────────────────────────────────────
.deploy-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: $color-border;
  border-radius: $radius-lg;
  overflow: hidden;
  border: 1px solid $color-border;

  @media (max-width: 640px) { grid-template-columns: 1fr; }
}

.deploy-step {
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

    .deploy-step__num {
      background: $color-teal-deep;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .deploy-step__label {
      color: $color-teal-deep;
      font-weight: $font-weight-bold;
    }
  }
}

// ─── Summary check grid ───────────────────────────────────────────────────────
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
