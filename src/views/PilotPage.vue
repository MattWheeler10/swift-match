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

  <SectionBlock :headline="p.whatItIs.headline">
    <div class="stack">
      <p v-for="b in p.whatItIs.body" :key="b">{{ b }}</p>
    </div>
    <ul class="bullets">
      <li v-for="pt in p.whatItIs.points" :key="pt">{{ pt }}</li>
    </ul>
    <p class="key-line">{{ p.whatItIs.keyLine }}</p>
    <p class="muted">{{ p.whatItIs.additionalLine }}</p>
  </SectionBlock>

  <SectionBlock :headline="p.deliverables.headline" alt>
    <p>{{ p.deliverables.lead }}</p>
    <ul class="bullets">
      <li v-for="d in p.deliverables.items" :key="d">{{ d }}</li>
    </ul>
    <p class="key-line">{{ p.deliverables.keyLine }}</p>
  </SectionBlock>

  <SectionBlock headline="How It Works">
    <div class="three-col">
      <div v-for="phase in p.phases" :key="phase.title" class="card">
        <h3>{{ phase.title }}</h3>
        <ul class="bullets">
          <li v-for="i in phase.items" :key="i">{{ i }}</li>
        </ul>
      </div>
    </div>
    <p class="key-line">{{ p.phasesClosingLine }}</p>
  </SectionBlock>

  <SectionBlock :headline="p.kpis.headline" alt>
    <ul class="bullets">
      <li v-for="k in p.kpis.items" :key="k">{{ k }}</li>
    </ul>
    <p class="key-line">{{ p.kpis.keyLine }}</p>
    <p class="muted">{{ p.kpis.supportingLine }}</p>
  </SectionBlock>

  <SectionBlock :headline="p.commercial.headline">
    <ul class="bullets">
      <li v-for="pt in p.commercial.points" :key="pt">{{ pt }}</li>
    </ul>
    <p class="muted">{{ p.commercial.additionalLine }}</p>
  </SectionBlock>

  <SectionBlock :headline="p.lowRisk.headline" alt>
    <ul class="bullets">
      <li v-for="pt in p.lowRisk.points" :key="pt">{{ pt }}</li>
    </ul>
    <p class="key-line">{{ p.lowRisk.keyLine }}</p>
    <p class="critical">{{ p.lowRisk.criticalLine }}</p>
  </SectionBlock>

  <FinalCTA
    :headline="p.finalCta.headline"
    :subtext="p.finalCta.subtext"
    :ctas="p.finalCta.ctas"
  />
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.stack { display: flex; flex-direction: column; gap: $space-3; }
.muted { color: $color-text-muted; }
.key-line {
  padding: $space-4;
  background: $color-white;
  border-left: 3px solid $color-navy;
  border-radius: $radius-sm;
  font-weight: $font-weight-medium;
  color: $color-navy;
  margin: 0;
}
.critical {
  padding: $space-4;
  background: $color-blush;
  border-radius: $radius-md;
  font-weight: $font-weight-bold;
  color: $color-navy;
  margin: 0;
}
h3 { color: $color-navy; margin: 0 0 $space-3; font-size: $font-size-md; }
</style>
