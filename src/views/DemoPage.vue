<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import SectionBlock from '@/components/sections/SectionBlock.vue'
import BookingBlock from '@/components/sections/BookingBlock.vue'
import { demo as d } from '@/content/demo'
</script>

<template>
  <HeroSection
    :headline="d.hero.headline"
    :subheadline="d.hero.subheadline"
    :supporting-line="d.hero.supportingLine"
    :tension-line="d.hero.pressureLine"
  />

  <SectionBlock :headline="d.whatYoullSee.headline">
    <ul class="bullets">
      <li v-for="i in d.whatYoullSee.items" :key="i">{{ i }}</li>
    </ul>
    <p class="key-line">{{ d.whatYoullSee.keyLine }}</p>
    <p class="muted">{{ d.whatYoullSee.additionalLine }}</p>
  </SectionBlock>

  <SectionBlock :headline="d.whoShouldAttend.headline" alt>
    <ul class="bullets">
      <li v-for="i in d.whoShouldAttend.items" :key="i">{{ i }}</li>
    </ul>
    <p class="muted">{{ d.whoShouldAttend.optionalLine }}</p>
  </SectionBlock>

  <SectionBlock :headline="d.preview.headline" :subheadline="d.preview.subtext">
    <div class="preview-placeholder">
      <span>{{ d.preview.note }}</span>
    </div>
  </SectionBlock>

  <BookingBlock
    :headline="d.booking.headline"
    :subtext="d.booking.subtext"
    :additional-line="d.booking.additionalLine"
    :fields="d.booking.formFields"
  />

  <SectionBlock headline="Reassurance">
    <ul class="bullets">
      <li v-for="r in d.reassurance.items" :key="r">{{ r }}</li>
    </ul>
    <p class="key-line">{{ d.reassurance.keyLine }}</p>
    <p>{{ d.reassurance.additionalLine }}</p>
    <p class="final-line">{{ d.reassurance.finalLine }}</p>
  </SectionBlock>
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
.preview-placeholder {
  aspect-ratio: 16 / 9;
  max-width: 720px;
  background: $color-blue-gray-1;
  border: 1px dashed $color-border;
  border-radius: $radius-lg;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $color-text-muted;
}
.final-line {
  font-size: $font-size-md;
  font-weight: $font-weight-medium;
  color: $color-navy;
}
</style>
