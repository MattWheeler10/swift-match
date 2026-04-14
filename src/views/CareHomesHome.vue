<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import FinalCTA from '@/components/sections/FinalCTA.vue'
import { bookDemoCta, startPilotCta } from '@/content/shared'
</script>

<template>
  <HeroSection
    eyebrow="Care Homes"
    headline="Stable staffing for care homes"
    subheadline="Reduce reliance on agencies and build a consistent workforce"
    supporting-line="This vertical page will be populated from the Care Homes specification document."
  />
  <FinalCTA
    headline="See how this works in your organisation"
    subtext="Walk through your current hiring workflow and identify where delays and cost can be removed"
    :ctas="[bookDemoCta, startPilotCta]"
  />
</template>
