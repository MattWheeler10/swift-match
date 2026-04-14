<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import FinalCTA from '@/components/sections/FinalCTA.vue'
import { bookDemoCta, startPilotCta } from '@/content/shared'
</script>

<template>
  <HeroSection
    eyebrow="Hospitals"
    headline="Workforce control for hospitals"
    subheadline="Reduce agency spend and increase clinical capacity"
    supporting-line="This vertical page will be populated from the Hospitals specification document."
  />
  <FinalCTA
    headline="See how this works in your organisation"
    subtext="Walk through your current hiring workflow and identify where delays and cost can be removed"
    :ctas="[bookDemoCta, startPilotCta]"
  />
</template>
