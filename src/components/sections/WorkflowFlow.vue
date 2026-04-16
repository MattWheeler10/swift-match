<script setup lang="ts">
defineProps<{
  steps: string[]
  label?: string
  vertical?: boolean
}>()
</script>

<template>
  <div class="workflow-flow">
    <ol v-reveal.stagger="{ stagger: 0.07, y: 14 }" class="workflow-flow__steps" :class="{ 'workflow-flow__steps--vertical': vertical }">
      <li
        v-for="(step, i) in steps"
        :key="step"
        class="workflow-flow__step"
        :class="{ 'workflow-flow__step--outcome': i === steps.length - 1 }"
      >
        <span class="workflow-flow__index">{{ String(i + 1).padStart(2, '0') }}</span>
        <span class="workflow-flow__label">{{ step }}</span>
      </li>
    </ol>
    <p v-if="label" class="workflow-flow__caption">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path
          d="M7 1.5L8.4 5.5h4.1L9.2 7.7l1.2 3.8L7 9.3l-3.4 2.2 1.2-3.8L1.5 5.5h4.1L7 1.5z"
          stroke="currentColor"
          stroke-width="1.1"
          stroke-linejoin="round"
        />
      </svg>
      {{ label }}
    </p>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.workflow-flow {
  display: flex;
  flex-direction: column;
  gap: $space-5;

  &__steps {
    list-style: none;
    padding: 0;
    margin: 0;
    display: inline-flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: $space-2;

    &--vertical {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      flex-wrap: nowrap;
      gap: $space-2;

      .workflow-flow__step {
        width: 100%;
        border-radius: $radius-md;
        padding: $space-3 $space-4 $space-3 $space-3;
        background: $color-white;
        border-color: $color-soft-gray;
        box-shadow: $shadow-xs;
      }

      .workflow-flow__label {
        white-space: normal;
      }
    }
  }

  &__step {
    display: inline-flex;
    align-items: center;
    gap: $space-2;
    padding: 5px $space-3 5px 5px;
    background: $color-blue-gray-1;
    border: 1px solid $color-soft-gray;
    border-radius: $radius-full;
    transition:
      transform $transition-base,
      box-shadow $transition-base,
      border-color $transition-base;

    &:hover {
      transform: translateY(-2px);
      box-shadow: $shadow-sm;
      border-color: rgba($color-teal, 0.45);
    }

    &--outcome {
      background: rgba($color-teal, 0.1);
      border-color: rgba($color-teal, 0.35);

      .workflow-flow__index {
        background: $color-teal-deep;
        color: $color-white;
      }
      .workflow-flow__label {
        color: $color-teal-deep;
        font-weight: $font-weight-bold;
      }

      &:hover {
        border-color: $color-teal-deep;
      }
    }
  }

  &__index {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    font-family: $font-family-display;
    font-size: 0.7rem;
    font-weight: $font-weight-bold;
    color: $color-navy-900;
    background: rgba($color-teal, 0.18);
    border-radius: $radius-full;
    letter-spacing: 0.04em;
  }

  &__label {
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: $color-navy;
    white-space: nowrap;
  }

  &__caption {
    display: inline-flex;
    align-items: center;
    gap: $space-2;
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    color: $color-teal-deep;
    margin: 0;
  }

  // ─── Dark section overrides ───────────────────────────────────────────────
  .section--dark & {
    &__step {
      background: rgba($color-white, 0.06);
      border-color: rgba($color-white, 0.12);
      backdrop-filter: blur(6px);

      &--outcome {
        background: rgba($color-teal, 0.15);
        border-color: rgba($color-teal, 0.4);
      }
    }

    &__index {
      background: rgba($color-teal, 0.25);
      color: $color-teal;
    }
    &__label {
      color: rgba($color-white, 0.9);
    }
    &__caption {
      color: $color-teal;
    }
  }
}
</style>
