<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import SectionBlock from '@/components/sections/SectionBlock.vue'
import WorkflowFlow from '@/components/sections/WorkflowFlow.vue'
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

  <SectionBlock :headline="p.overview.headline">
    <div class="stack">
      <p v-for="b in p.overview.body" :key="b">{{ b }}</p>
    </div>
    <div class="three-col">
      <div v-for="pillar in p.overview.pillars" :key="pillar.title" class="card">
        <h3>{{ pillar.title }}</h3>
        <p>{{ pillar.description }}</p>
      </div>
    </div>
  </SectionBlock>

  <SectionBlock :headline="p.architecture.headline" alt>
    <WorkflowFlow :steps="p.architecture.flow" />
    <p>{{ p.architecture.body }}</p>
    <ul class="bullets">
      <li v-for="pt in p.architecture.points" :key="pt">{{ pt }}</li>
    </ul>
    <p class="key-line">{{ p.architecture.keyLine }}</p>
    <p class="muted">{{ p.architecture.additionalLine }}</p>
  </SectionBlock>

  <SectionBlock :headline="p.integrations.headline">
    <p>{{ p.integrations.lead }}</p>
    <ul class="bullets">
      <li v-for="sys in p.integrations.systems" :key="sys">{{ sys }}</li>
    </ul>
    <h3>Key Points</h3>
    <ul class="bullets">
      <li v-for="pt in p.integrations.keyPoints" :key="pt">{{ pt }}</li>
    </ul>
    <p class="muted">{{ p.integrations.additionalLine }}</p>
  </SectionBlock>

  <SectionBlock :headline="p.data.headline" alt>
    <ul class="bullets">
      <li v-for="pt in p.data.points" :key="pt">{{ pt }}</li>
    </ul>
    <div class="stack">
      <p v-for="line in p.data.keyLines" :key="line" class="key-line">{{ line }}</p>
    </div>
  </SectionBlock>

  <SectionBlock :headline="p.security.headline">
    <div class="two-col">
      <div class="card">
        <h3>Compliance</h3>
        <p>{{ p.security.compliance.label }}</p>
        <ul class="bullets">
          <li v-for="c in p.security.compliance.items" :key="c">{{ c }}</li>
        </ul>
      </div>
      <div class="card">
        <h3>{{ p.security.measures.label }}</h3>
        <ul class="bullets">
          <li v-for="m in p.security.measures.items" :key="m">{{ m }}</li>
        </ul>
      </div>
    </div>
    <p class="key-line">{{ p.security.keyLine }}</p>
  </SectionBlock>

  <SectionBlock :headline="p.ai.headline" alt>
    <p>{{ p.ai.lead }}</p>
    <ul class="bullets">
      <li v-for="u in p.ai.uses" :key="u">{{ u }}</li>
    </ul>
    <h3>{{ p.ai.governance.label }}</h3>
    <ul class="bullets">
      <li v-for="g in p.ai.governance.items" :key="g">{{ g }}</li>
    </ul>
    <p class="key-line">{{ p.ai.keyLine }}</p>
  </SectionBlock>

  <SectionBlock :headline="p.scalability.headline">
    <ul class="bullets">
      <li v-for="pt in p.scalability.points" :key="pt">{{ pt }}</li>
    </ul>
    <h3>{{ p.scalability.approach.label }}</h3>
    <ol class="bullets">
      <li v-for="a in p.scalability.approach.items" :key="a">{{ a }}</li>
    </ol>
    <p class="key-line">{{ p.scalability.keyLine }}</p>
  </SectionBlock>

  <SectionBlock :headline="p.summary.headline" alt>
    <p>{{ p.summary.lead }}</p>
    <ul class="bullets">
      <li v-for="pt in p.summary.points" :key="pt">{{ pt }}</li>
    </ul>
    <p class="key-line">{{ p.summary.closingLine }}</p>
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
h3 { color: $color-navy; margin: 0; font-size: $font-size-md; }
.card h3 { margin-bottom: $space-3; }
</style>
