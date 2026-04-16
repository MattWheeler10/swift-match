<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import SectionBlock from '@/components/sections/SectionBlock.vue'
import WorkflowFlow from '@/components/sections/WorkflowFlow.vue'
import RolesTable from '@/components/sections/RolesTable.vue'
import FinalCTA from '@/components/sections/FinalCTA.vue'
import { howItWorks as h } from '@/content/how-it-works'
</script>

<template>
  <HeroSection
    :headline="h.hero.headline"
    :subheadline="h.hero.subheadline"
    :tension-line="h.hero.tensionLine"
    :supporting-line="h.hero.supportingLine"
  />

  <SectionBlock headline="End-to-End Workflow" alt>
    <WorkflowFlow :steps="h.workflow.steps" :label="h.workflow.overlayLabel" />
    <p>{{ h.workflow.supportingLine }}</p>
    <p class="muted">{{ h.workflow.additionalLine }}</p>
  </SectionBlock>

  <SectionBlock headline="Step-by-Step Breakdown">
    <ol class="steps">
      <li v-for="step in h.steps" :key="step.title" class="steps__item card">
        <h3>{{ step.title }}</h3>
        <div v-if="step.actors?.length" class="steps__group">
          <h4>Actors</h4>
          <ul><li v-for="a in step.actors" :key="a">{{ a }}</li></ul>
        </div>
        <div v-if="step.process?.length" class="steps__group">
          <h4>Process</h4>
          <ul><li v-for="p in step.process" :key="p">{{ p }}</li></ul>
        </div>
        <div v-if="step.swiftMatchRole?.length" class="steps__group">
          <h4>SwiftMatch Role</h4>
          <ul><li v-for="r in step.swiftMatchRole" :key="r">{{ r }}</li></ul>
        </div>
        <p v-if="step.keyLine" class="steps__key">{{ step.keyLine }}</p>
        <p v-if="step.additionalLine" class="muted">{{ step.additionalLine }}</p>
        <p v-if="step.impactLine" class="muted">{{ step.impactLine }}</p>
      </li>
    </ol>
  </SectionBlock>

  <RolesTable
    :headline="h.roles.headline"
    :rows="h.roles.rows"
    :closing-line="h.roles.closingLine"
  />

  <SectionBlock :headline="h.whereOperates.headline" alt>
    <WorkflowFlow :steps="h.whereOperates.flow" />
    <ul class="bullets">
      <li v-for="p in h.whereOperates.points" :key="p">{{ p }}</li>
    </ul>
    <p class="key-line">{{ h.whereOperates.keyLine }}</p>
  </SectionBlock>

  <SectionBlock :headline="h.integration.headline">
    <p>{{ h.integration.lead }}</p>
    <ul class="bullets">
      <li v-for="sys in h.integration.systems" :key="sys">{{ sys }}</li>
    </ul>
    <h3>Key Points</h3>
    <ul class="bullets">
      <li v-for="p in h.integration.keyPoints" :key="p">{{ p }}</li>
    </ul>
  </SectionBlock>

  <SectionBlock :headline="h.summary.headline" alt>
    <p>{{ h.summary.lead }}</p>
    <ul class="bullets">
      <li v-for="p in h.summary.points" :key="p">{{ p }}</li>
    </ul>
    <p class="key-line">{{ h.summary.closingLine }}</p>
  </SectionBlock>

  <FinalCTA
    :headline="h.finalCta.headline"
    :subtext="h.finalCta.subtext"
    :ctas="h.finalCta.ctas"
  />
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

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
.steps {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: $space-6;

  &__item {
    display: flex;
    flex-direction: column;
    gap: $space-3;

    h3 { color: $color-navy; margin: 0; font-size: $font-size-md; }
    h4 { color: $color-text; margin: 0; font-size: $font-size-sm; text-transform: uppercase; letter-spacing: 0.05em; }
    ul { list-style: disc inside; padding: 0; margin: 0; display: flex; flex-direction: column; gap: $space-1; }
  }
  &__group { display: flex; flex-direction: column; gap: $space-2; }
  &__key { font-weight: $font-weight-medium; color: $color-navy; margin: 0; }
}
</style>
