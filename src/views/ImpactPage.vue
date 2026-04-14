<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import SectionBlock from '@/components/sections/SectionBlock.vue'
import WorkflowFlow from '@/components/sections/WorkflowFlow.vue'
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
      <WorkflowFlow :steps="i.hero.diagramSteps" />
    </template>
  </HeroSection>

  <SectionBlock :headline="i.coreValue.headline">
    <div class="stack">
      <p v-for="s in i.coreValue.statements" :key="s">{{ s }}</p>
    </div>
  </SectionBlock>

  <SectionBlock :headline="i.workforce.headline" alt>
    <ul class="bullets">
      <li v-for="p in i.workforce.points" :key="p">{{ p }}</li>
    </ul>
    <p class="muted">{{ i.workforce.supportingLine }}</p>
    <p class="key-line">{{ i.workforce.closingLine }}</p>
  </SectionBlock>

  <SectionBlock :headline="i.financial.headline">
    <ul class="bullets">
      <li v-for="p in i.financial.points" :key="p">{{ p }}</li>
    </ul>
    <div class="stack muted">
      <p v-for="line in i.financial.supportingLines" :key="line">{{ line }}</p>
    </div>
    <p class="prominent">{{ i.financial.closingLine }}</p>
  </SectionBlock>

  <SectionBlock :headline="i.operational.headline" alt>
    <ul class="bullets">
      <li v-for="m in i.operational.metrics" :key="m">{{ m }}</li>
    </ul>
    <p class="muted">{{ i.operational.supportingLine }}</p>
    <p class="key-line">{{ i.operational.closingLine }}</p>
  </SectionBlock>

  <SectionBlock :headline="i.capability.headline">
    <p class="muted">{{ i.capability.supportingLine }}</p>
    <ul class="bullets">
      <li v-for="p in i.capability.points" :key="p">{{ p }}</li>
    </ul>
    <p class="key-line">{{ i.capability.keyLine }}</p>
  </SectionBlock>

  <TransformationPathway
    :headline="i.transformation.headline"
    :intro="i.transformation.intro"
    :stages="i.transformation.stages"
    :closing-line="i.transformation.closingLine"
    alt
  />

  <ProofMetrics
    :headline="i.proof.headline"
    :metrics="i.proof.metrics"
    :supporting-line="i.proof.supportingLine"
    :pressure-line="i.proof.pressureLine"
  />

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

.bullets {
  list-style: disc inside;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: $space-2;
}
.stack { display: flex; flex-direction: column; gap: $space-3; }
.muted { color: $color-text-muted; }
.prominent {
  font-size: $font-size-md;
  font-weight: $font-weight-bold;
  color: $color-navy;
  padding: $space-4;
  background: $color-blush;
  border-radius: $radius-md;
  margin: 0;
}
.key-line {
  padding: $space-4;
  background: $color-white;
  border-left: 3px solid $color-navy;
  border-radius: $radius-sm;
  font-weight: $font-weight-medium;
  color: $color-navy;
  margin: 0;
}
</style>
