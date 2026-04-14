<script setup lang="ts">
defineProps<{
  label?: string
  items?: Array<{ name: string; detail?: string }>
}>()

const defaults = [
  { name: 'CQC Aligned', detail: 'Care Quality Commission standards' },
  { name: 'GDPR Compliant', detail: 'UK & EU data protection' },
  { name: 'ISO 27001', detail: 'Information security' },
  { name: 'Cyber Essentials Plus', detail: 'Certified cyber controls' },
  { name: 'NHS DSPT', detail: 'Data Security & Protection Toolkit' },
]
</script>

<template>
  <section class="compliance" aria-label="Compliance and security">
    <div class="container compliance__inner">
      <p class="compliance__label">{{ label ?? 'Built for regulated care — compliance at the core' }}</p>
      <ul v-reveal="{ selector: '.compliance__item', stagger: 0.06, y: 16 }" class="compliance__grid" role="list">
        <li v-for="item in (items ?? defaults)" :key="item.name" class="compliance__item">
          <svg class="compliance__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z"
              stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"
            />
            <path
              d="m8.5 12.2 2.3 2.3 4.7-4.7"
              stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
            />
          </svg>
          <div class="compliance__text">
            <span class="compliance__name">{{ item.name }}</span>
            <span v-if="item.detail" class="compliance__detail">{{ item.detail }}</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.compliance {
  padding-block: $space-12;
  background: $color-white;
  border-block: 1px solid $color-border;

  &__inner {
    display: flex;
    flex-direction: column;
    gap: $space-6;
  }

  &__label {
    font-family: $font-family-display;
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    letter-spacing: 0.04em;
    color: $color-navy;
    text-transform: none;
  }

  &__grid {
    list-style: none;
    padding: 0; margin: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: $space-4;

    @media (max-width: 1024px) { grid-template-columns: repeat(3, 1fr); }
    @media (max-width: 640px)  { grid-template-columns: repeat(2, 1fr); }
  }

  &__item {
    display: flex;
    align-items: center;
    gap: $space-3;
    padding: $space-3 $space-4;
    border: 1px solid $color-border;
    border-radius: $radius-md;
    background: $color-cream;
    transition: border-color $transition-base, transform $transition-base;

    &:hover {
      border-color: rgba($color-gold, 0.5);
      transform: translateY(-1px);
    }
  }

  &__icon {
    width: 24px; height: 24px;
    flex-shrink: 0;
    color: $color-gold-deep;
  }

  &__text {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
  }

  &__name {
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: $color-navy;
  }

  &__detail {
    font-size: $font-size-xs;
    color: $color-text-muted;
    margin-top: 2px;
  }
}
</style>
