<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import SectionBlock from '@/components/sections/SectionBlock.vue'
import TransformationPathway from '@/components/sections/TransformationPathway.vue'
import FinalCTA from '@/components/sections/FinalCTA.vue'
import WorkflowFlow from '@/components/sections/WorkflowFlow.vue'
import { solution as s } from '@/content/solution'
</script>

<template>
  <HeroSection
    :headline="s.hero.headline"
    :subheadline="s.hero.subheadline"
    :supporting-line="s.hero.supportingLine"
    :key-line="s.hero.keyLine"
    :ctas="s.hero.ctas"
  />

  <SectionBlock :headline="s.whatIs.headline">
    <p class="lead">{{ s.whatIs.lead }}</p>
    <p>{{ s.whatIs.body }}</p>
    <ul class="bullets">
      <li v-for="p in s.whatIs.points" :key="p">{{ p }}</li>
    </ul>
    <p class="key-line">{{ s.whatIs.keyLine }}</p>
  </SectionBlock>

  <SectionBlock headline="Core Components" alt>
    <div class="three-col">
      <div v-for="c in s.coreComponents" :key="c.title" class="card core">
        <h3>{{ c.title }}</h3>
        <ul>
          <li v-for="b in c.bullets" :key="b">{{ b }}</li>
        </ul>
        <p class="core__outcome"><strong>Outcome:</strong> {{ c.outcome }}</p>
      </div>
    </div>
  </SectionBlock>

  <SectionBlock :headline="s.supplyLayer.headline">
    <p>{{ s.supplyLayer.body }}</p>
    <ul class="bullets">
      <li v-for="p in s.supplyLayer.points" :key="p">{{ p }}</li>
    </ul>
    <p class="key-line">{{ s.supplyLayer.keyLine }}</p>
    <p class="mechanism">{{ s.supplyLayer.mechanismLine }}</p>
  </SectionBlock>

  <SectionBlock :headline="s.orchestration.headline" alt>
    <p>{{ s.orchestration.lead }}</p>
    <ul class="bullets">
      <li v-for="c in s.orchestration.connects" :key="c">{{ c }}</li>
    </ul>
    <p>All activity becomes:</p>
    <ul class="bullets">
      <li v-for="b in s.orchestration.becomes" :key="b">{{ b }}</li>
    </ul>
    <p class="key-line">{{ s.orchestration.closingLine }}</p>
  </SectionBlock>

  <TransformationPathway
    :headline="s.transformation.headline"
    :stages="s.transformation.stages"
    :closing-line="s.transformation.closingLine"
  />

  <SectionBlock :headline="s.howItConnects.headline" alt>
    <WorkflowFlow :steps="s.howItConnects.flow" />
    <ul class="bullets">
      <li v-for="p in s.howItConnects.points" :key="p">{{ p }}</li>
    </ul>
    <div class="final-lines">
      <p v-for="line in s.howItConnects.finalLines" :key="line">{{ line }}</p>
    </div>
  </SectionBlock>

  <FinalCTA
    :headline="s.finalCta.headline"
    :subtext="s.finalCta.subtext"
    :ctas="s.finalCta.ctas"
  />
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.lead { font-size: $font-size-md; color: $color-navy; font-weight: $font-weight-medium; }
.bullets {
  list-style: disc inside;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: $space-2;
}
.key-line {
  padding: $space-4;
  background: $color-white;
  border-left: 3px solid $color-navy;
  border-radius: $radius-sm;
  font-weight: $font-weight-medium;
  color: $color-navy;
}
.mechanism { font-weight: $font-weight-medium; color: $color-navy; }
.core {
  h3 { color: $color-navy; margin: 0 0 $space-3; font-size: $font-size-md; }
  ul { list-style: disc inside; padding: 0; margin: 0 0 $space-3; display: flex; flex-direction: column; gap: $space-2; }
  &__outcome { margin: 0; color: $color-text-muted; font-size: $font-size-sm; }
}
.final-lines { display: flex; flex-direction: column; gap: $space-3; color: $color-text-muted; }
</style>
