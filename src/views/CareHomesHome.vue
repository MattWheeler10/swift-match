<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import HeroWorkflow from '@/components/sections/HeroWorkflow.vue'
import WavePipeline from '@/components/sections/WavePipeline.vue'
import ComplianceStrip from '@/components/sections/ComplianceStrip.vue'
import ProblemSection from '@/components/sections/ProblemSection.vue'
import SolutionSteps from '@/components/sections/SolutionSteps.vue'
import SectionBlock from '@/components/sections/SectionBlock.vue'
import PlatformVideo from '@/components/sections/PlatformVideo.vue'
import ImpactColumns from '@/components/sections/ImpactColumns.vue'
import TransformationPathway from '@/components/sections/TransformationPathway.vue'
import ProofMetrics from '@/components/sections/ProofMetrics.vue'
import PilotBlock from '@/components/sections/PilotBlock.vue'
import FinalCTA from '@/components/sections/FinalCTA.vue'
import { RouterLink } from 'vue-router'
import { careHomesHome } from '@/content/care-homes-home'

const h = careHomesHome
</script>

<template>
  <HeroSection
    :eyebrow="h.hero.eyebrow"
    :headline="h.hero.headline"
    :subheadline="h.hero.subheadline"
    :supporting-line="h.hero.supportingLine"
    :ctas="h.hero.ctas"
  >
    <template #visual>
      <HeroWorkflow :steps="h.hero.workflow.steps" :label="h.hero.workflow.label" />
    </template>
  </HeroSection>

  <ComplianceStrip />

  <ProblemSection
    :headline="h.problem.headline"
    :points="h.problem.points"
    :supporting-lines="h.problem.supportingLines"
    :closing-line="h.problem.closingLine"
    :link="h.problem.link"
  />

  <SolutionSteps
    :headline="h.solution.headline"
    :steps="h.solution.steps"
    :two-columns="h.solution.twoColumns"
    :supporting-line="h.solution.supportingLine"
    :closing-lines="h.solution.closingLines"
    :links="h.solution.links"
  />

  <SectionBlock :headline="h.howItWorks.headline" :subheadline="h.howItWorks.supportingLine">
    <WavePipeline :steps="h.howItWorks.steps" />
    <div class="how-cta">
      <RouterLink :to="h.howItWorks.link.to" class="btn btn--primary">
        {{ h.howItWorks.link.label }}
        <svg class="btn__caret" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
      </RouterLink>
    </div>
  </SectionBlock>

  <PlatformVideo
    :text-above="h.platform.textAboveVideo"
    :subtext="h.platform.subtext"
    :ctas="h.platform.ctas"
  />

  <ImpactColumns
    :headline="h.impact.headline"
    :columns="h.impact.columns"
    :closing-line="h.impact.closingLine"
    :link="h.impact.link"
  />

  <TransformationPathway
    :headline="h.transformation.headline"
    :stages="h.transformation.stages"
    :supporting-line="h.transformation.supportingLine"
    :closing-line="h.transformation.closingLine"
    :links="h.transformation.links"
    alt
  />

  <ProofMetrics
    :headline="h.proof.headline"
    :metrics="h.proof.metrics"
  />

  <PilotBlock
    :headline="h.pilot.headline"
    :points="h.pilot.points"
    :supporting-line="h.pilot.supportingLine"
    :cta="h.pilot.cta"
    alt
  />

  <FinalCTA
    :headline="h.finalCta.headline"
    :subtext="h.finalCta.subtext"
    :ctas="h.finalCta.ctas"
  />
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.how-cta { display: flex; }
</style>
