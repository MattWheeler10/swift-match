<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import FinalCTA from '@/components/sections/FinalCTA.vue'
import { pilot as p } from '@/content/pilot'
</script>

<template>
  <!-- Hero -->
  <HeroSection
    :eyebrow="p.hero.eyebrow"
    :headline="p.hero.headline"
    :subheadline="p.hero.subheadline"
    :supporting-line="p.hero.supportingLine"
    :ctas="p.hero.ctas"
  />

  <!-- What It Is -->
  <section class="pilot-what section">
    <div class="container">
      <div class="pilot-what__inner">
        <div v-reveal="{ y: 24 }">
          <h2 class="display">{{ p.whatItIs.headline }}</h2>
          <p class="lead">{{ p.whatItIs.body }}</p>
          <h3 class="sub-headline">{{ p.whatItIs.purposeHeadline }}</h3>
          <p class="body-text">{{ p.whatItIs.purpose }}</p>
          <ul class="dot-list">
            <li v-for="pt in p.whatItIs.points" :key="pt">{{ pt }}</li>
          </ul>
          <div class="not-a-trial">
            <p>{{ p.whatItIs.notATrial }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Phases -->
  <section class="pilot-phases section section--alt">
    <div class="container">
      <h2 v-reveal="{ y: 20 }" class="display pilot-phases__headline">{{ p.phases.headline }}</h2>
      <div v-reveal.stagger="{ stagger: 0.1, y: 24 }" class="pilot-phases__list">
        <div v-for="step in p.phases.steps" :key="step.title" class="pilot-phase">
          <div class="pilot-phase__num">{{ step.number }}</div>
          <div class="pilot-phase__body">
            <h3 class="pilot-phase__title">{{ step.title }}</h3>
            <p class="pilot-phase__body-text">{{ step.body }}</p>
            <ul class="plain-list">
              <li v-for="item in step.covers" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- What Decision-Makers Get -->
  <section class="pilot-dm section">
    <div class="container">
      <div class="pilot-dm__inner">
        <div v-reveal="{ y: 24 }">
          <h2 class="display">{{ p.decisionMakers.headline }}</h2>
          <p class="body-text">{{ p.decisionMakers.intro }}</p>
          <ul class="dot-list">
            <li v-for="pt in p.decisionMakers.points" :key="pt">{{ pt }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Designed For -->
  <section class="pilot-for section section--alt">
    <div class="container">
      <h2 v-reveal="{ y: 20 }" class="display pilot-for__headline">{{ p.designedFor.headline }}</h2>
      <div v-reveal.stagger="{ stagger: 0.1, y: 20 }" class="pilot-for__grid">
        <div class="pilot-for__col">
          <p class="pilot-for__col-label">{{ p.designedFor.intro }}</p>
          <ul class="dot-list">
            <li v-for="a in p.designedFor.attendees" :key="a">{{ a }}</li>
          </ul>
        </div>
        <div class="pilot-for__col pilot-for__col--logistics">
          <p class="pilot-for__col-label">What to expect:</p>
          <ul class="check-list">
            <li v-for="l in p.designedFor.logistics" :key="l" class="check-item">
              <span class="check-item__icon" aria-hidden="true">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </span>
              <span>{{ l }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Low Risk -->
  <section class="pilot-risk section">
    <div class="container">
      <div class="pilot-risk__inner">
        <div v-reveal="{ y: 24 }">
          <h2 class="display">{{ p.lowRisk.headline }}</h2>
          <p class="body-text">{{ p.lowRisk.body }}</p>
          <ul class="dot-list">
            <li v-for="pt in p.lowRisk.points" :key="pt">{{ pt }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Post-Pilot -->
  <section class="pilot-post section section--alt">
    <div class="container">
      <h2 v-reveal="{ y: 20 }" class="display pilot-post__headline">{{ p.postPilot.headline }}</h2>
      <div v-reveal.stagger="{ stagger: 0.1, y: 20 }" class="pilot-post__grid">
        <div class="pilot-post__col">
          <p class="pilot-post__col-label">{{ p.postPilot.intro }}</p>
          <ul class="dot-list">
            <li v-for="s in p.postPilot.steps" :key="s">{{ s }}</li>
          </ul>
        </div>
        <div class="pilot-post__col">
          <p class="pilot-post__col-label">{{ p.postPilot.outcomes.label }}</p>
          <ul class="dot-list">
            <li v-for="pt in p.postPilot.outcomes.points" :key="pt">{{ pt }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Final CTA -->
  <FinalCTA
    :headline="p.finalCta.headline"
    :subtext="p.finalCta.subtext"
    :ctas="p.finalCta.ctas"
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
  margin: 0 0 $space-4;
}

.sub-headline {
  font-family: $font-family-display;
  font-weight: $font-weight-bold;
  font-size: $font-size-md;
  color: $color-navy;
  margin: 0 0 $space-3;
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
    color: $color-text-muted;
    line-height: 1.5;
    padding-left: $space-4;
    position: relative;

    &::before {
      content: '—';
      position: absolute;
      left: 0;
      color: $color-teal-deep;
    }
  }
}

.check-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: $space-3;
}

.check-item {
  display: flex;
  align-items: flex-start;
  gap: $space-3;
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

// ─── What It Is ───────────────────────────────────────────────────────────────
.pilot-what {
  &__inner { max-width: 720px; }
  h2 { margin-bottom: $space-5; }
}

.not-a-trial {
  padding: $space-5 $space-6;
  background: $color-navy;
  border-radius: $radius-lg;
  margin-top: $space-2;

  p {
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: rgba($color-white, 0.85);
    margin: 0;
    line-height: 1.6;
  }
}

// ─── Phases ───────────────────────────────────────────────────────────────────
.pilot-phases {
  &__headline { margin-bottom: $space-10; max-width: 860px; }

  &__list {
    display: flex;
    flex-direction: column;
    gap: $space-5;
    max-width: 860px;
  }
}

.pilot-phase {
  display: flex;
  gap: $space-6;
  align-items: flex-start;
  padding: $space-8;
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
    margin: 0;
  }
}

// ─── Decision Makers ─────────────────────────────────────────────────────────
.pilot-dm {
  &__inner { max-width: 720px; }
  h2 { margin-bottom: $space-5; }
}

// ─── Designed For ─────────────────────────────────────────────────────────────
.pilot-for {
  &__headline { margin-bottom: $space-10; }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $space-6;

    @media (max-width: 640px) { grid-template-columns: 1fr; }
  }

  &__col {
    padding: $space-8 $space-6;
    background: $color-white;
    border: 1px solid $color-border;
    border-radius: $radius-lg;
    display: flex;
    flex-direction: column;
    gap: $space-4;

    &--logistics {
      background: $color-teal-soft;
      border-color: rgba($color-teal-deep, 0.2);
    }
  }

  &__col-label {
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: $color-navy;
    margin: 0;
  }
}

// ─── Low Risk ─────────────────────────────────────────────────────────────────
.pilot-risk {
  &__inner { max-width: 720px; }
  h2 { margin-bottom: $space-5; }
}

// ─── Post Pilot ───────────────────────────────────────────────────────────────
.pilot-post {
  &__headline { margin-bottom: $space-10; }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $space-6;

    @media (max-width: 640px) { grid-template-columns: 1fr; }
  }

  &__col {
    padding: $space-6;
    background: $color-white;
    border: 1px solid $color-border;
    border-radius: $radius-lg;
    display: flex;
    flex-direction: column;
    gap: $space-4;
  }

  &__col-label {
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: $color-navy;
    margin: 0;
  }
}
</style>
