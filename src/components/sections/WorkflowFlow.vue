<script setup lang="ts">
defineProps<{
  steps: string[]
  label?: string
}>()
</script>

<template>
  <div class="workflow-flow">
    <ol v-reveal.stagger="{ stagger: 0.08, y: 16 }" class="workflow-flow__steps">
      <li v-for="(step, i) in steps" :key="step" class="workflow-flow__step">
        <span class="workflow-flow__index">{{ String(i + 1).padStart(2, '0') }}</span>
        <span class="workflow-flow__label">{{ step }}</span>
      </li>
    </ol>
    <p v-if="label" class="workflow-flow__caption">{{ label }}</p>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.workflow-flow {
  display: flex;
  flex-direction: column;
  gap: $space-4;

  &__steps {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    gap: $space-3;
  }

  &__step {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: $space-3;
    padding: $space-3 $space-5 $space-3 $space-4;
    background: $color-white;
    border: 1px solid $color-border;
    border-radius: $radius-full;
    box-shadow: $shadow-xs;
    transition: transform $transition-base, box-shadow $transition-base, border-color $transition-base;

    &:not(:last-child)::after {
      content: '→';
      position: absolute;
      right: -$space-5;
      top: 50%;
      transform: translateY(-50%);
      color: $color-teal-deep;
      font-weight: $font-weight-bold;
      font-size: $font-size-md;
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: $shadow-sm;
      border-color: rgba($color-teal, 0.5);
    }
  }

  &__index {
    font-family: $font-family-display;
    font-size: $font-size-xs;
    font-weight: $font-weight-bold;
    color: $color-white;
    background: $color-navy;
    padding: 4px 8px;
    border-radius: $radius-full;
    letter-spacing: 0.06em;
  }

  &__label {
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: $color-navy;
  }

  &__caption {
    font-size: $font-size-sm;
    color: $color-text-muted;
    font-style: italic;
  }

  .section--dark & &__step {
    background: rgba($color-white, 0.05);
    border-color: rgba($color-white, 0.15);
    backdrop-filter: blur(6px);
  }
  .section--dark & &__label { color: $color-white; }
  .section--dark & &__index { background: $color-teal; color: $color-navy-900; }
}
</style>
