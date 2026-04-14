<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import WorkflowFlow from '@/components/sections/WorkflowFlow.vue'
import VerticalSelector from '@/components/sections/VerticalSelector.vue'
import ProblemSection from '@/components/sections/ProblemSection.vue'
import SolutionSteps from '@/components/sections/SolutionSteps.vue'
import SectionBlock from '@/components/sections/SectionBlock.vue'
import PlatformVideo from '@/components/sections/PlatformVideo.vue'
import ImpactColumns from '@/components/sections/ImpactColumns.vue'
import TransformationPathway from '@/components/sections/TransformationPathway.vue'
import ProofMetrics from '@/components/sections/ProofMetrics.vue'
import PilotBlock from '@/components/sections/PilotBlock.vue'
import FinalCTA from '@/components/sections/FinalCTA.vue'
import ComplianceStrip from '@/components/sections/ComplianceStrip.vue'
import { RouterLink } from 'vue-router'
import { globalHome } from '@/content/global-home'

const g = globalHome
</script>

<template>
  <HeroSection
    :headline="g.hero.headline"
    :subheadline="g.hero.subheadline"
    :supporting-line="g.hero.supportingLine"
    :key-line="g.hero.keyLine"
    :ctas="g.hero.ctas"
  >
    <template #visual>
      <WorkflowFlow :steps="g.hero.workflow.steps" :label="g.hero.workflow.label" />
    </template>
  </HeroSection>

  <ComplianceStrip />

  <VerticalSelector />

  <ProblemSection
    :headline="g.problem.headline"
    :points="g.problem.points"
    :supporting-lines="g.problem.supportingLines"
    :closing-line="g.problem.closingLine"
    :link="g.problem.link"
  />

  <SolutionSteps
    :headline="g.solution.headline"
    :steps="g.solution.steps"
    :supporting-line="g.solution.supportingLine"
    :two-columns="g.solution.twoColumns"
    :closing-lines="g.solution.closingLines"
    :links="g.solution.links"
  />

  <SectionBlock :headline="g.howItWorks.headline">
    <WorkflowFlow :steps="g.howItWorks.steps" :label="g.howItWorks.supportingLine" />
    <RouterLink :to="g.howItWorks.link.to" class="btn btn--ghost">
      {{ g.howItWorks.link.label }} →
    </RouterLink>
  </SectionBlock>

  <PlatformVideo
    :text-above="g.platform.textAboveVideo"
    :subtext="g.platform.subtext"
    :ctas="g.platform.ctas"
  />

  <ImpactColumns
    :headline="g.impact.headline"
    :columns="g.impact.columns"
    :closing-line="g.impact.closingLine"
    :link="g.impact.link"
  />

  <TransformationPathway
    :headline="g.transformation.headline"
    :stages="g.transformation.stages"
    :supporting-line="g.transformation.supportingLine"
    :closing-line="g.transformation.closingLine"
    :links="g.transformation.links"
    alt
  />

  <ProofMetrics
    :headline="g.proof.headline"
    :metrics="g.proof.metrics"
  />

  <PilotBlock
    :headline="g.pilot.headline"
    :points="g.pilot.points"
    :supporting-line="g.pilot.supportingLine"
    :cta="g.pilot.cta"
    alt
  />

  <FinalCTA
    :headline="g.finalCta.headline"
    :subtext="g.finalCta.subtext"
    :ctas="g.finalCta.ctas"
  />
</template>
