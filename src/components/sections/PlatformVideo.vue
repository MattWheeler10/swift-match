<script setup lang="ts">
import type { CTA } from '@/content/types'
import CtaButtons from './CtaButtons.vue'

defineProps<{
  textAbove: string
  subtext?: string
  ctas?: CTA[]
}>()
</script>

<template>
  <section class="platform-video section section--dark">
    <div class="container platform-video__inner">
      <h2 class="platform-video__headline">{{ textAbove }}</h2>
      <p v-if="subtext" class="platform-video__sub">{{ subtext }}</p>

      <div class="platform-video__frame" aria-label="Platform video placeholder">
        <span>Video placeholder</span>
      </div>

      <CtaButtons v-if="ctas" :ctas="ctas" class="platform-video__ctas" />
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.platform-video {
  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-6;
    text-align: center;
  }

  &__headline {
    font-size: $font-size-xl;
    margin: 0;
  }

  &__sub {
    max-width: 700px;
    opacity: 0.8;
    margin: 0;
  }

  &__ctas {
    :deep(.btn--primary) {
      background: $color-white;
      color: $color-navy-900;
      &:hover {
        background: rgba($color-white, 0.92);
        box-shadow: $shadow-md;
      }
    }

    :deep(.btn--outline) {
      border-color: rgba($color-white, 0.45);
      color: $color-white;
      &:hover {
        border-color: $color-white;
        background: rgba($color-white, 0.1);
      }
    }
  }

  &__frame {
    width: 100%;
    max-width: 960px;
    aspect-ratio: 16 / 9;
    background: rgba($color-white, 0.08);
    border: 1px dashed rgba($color-white, 0.3);
    border-radius: $radius-lg;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba($color-white, 0.6);
    font-size: $font-size-sm;
  }
}
</style>
