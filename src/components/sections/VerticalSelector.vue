<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { verticals } from '@/content/shared'
import { globalHome } from '@/content/global-home'

const { headline, subheadline } = globalHome.verticalSelector
</script>

<template>
  <section class="vertical-selector section">
    <div class="container">
      <header class="vertical-selector__head">
        <p class="eyebrow">Pick your setting</p>
        <h2 class="vertical-selector__title">{{ headline }}</h2>
        <p class="vertical-selector__sub">{{ subheadline }}</p>
      </header>
      <div v-reveal.stagger="{ stagger: 0.12, y: 36 }" class="vertical-selector__cards">
        <RouterLink
          v-for="(v, i) in verticals"
          :key="v.id"
          :to="v.to"
          class="card vertical-card"
          :style="{ '--accent-hue': i }"
        >
          <div class="vertical-card__badge">0{{ i + 1 }}</div>
          <h3 class="vertical-card__title">{{ v.title }}</h3>
          <p class="vertical-card__desc">{{ v.description }}</p>
          <div class="vertical-card__cta">
            <span>Explore</span>
            <span class="vertical-card__arrow" aria-hidden="true">→</span>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.vertical-selector {
  &__head {
    display: flex;
    flex-direction: column;
    gap: $space-3;
    align-items: center;
    text-align: center;
    margin-bottom: $space-14;
  }

  &__title {
    font-size: clamp(1.75rem, 2.5vw + 0.5rem, 2.5rem);
    max-width: 720px;
  }

  &__sub { color: $color-text-muted; max-width: 640px; }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $space-6;

    @media (max-width: 900px) { grid-template-columns: 1fr; }
  }
}

.vertical-card {
  display: flex;
  flex-direction: column;
  gap: $space-4;
  text-decoration: none;
  color: $color-text;
  min-height: 260px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    width: 220px; height: 220px;
    top: -90px; right: -90px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba($color-teal, 0.28) 0%, transparent 65%);
    opacity: 0;
    transition: opacity $transition-slow;
  }

  &:hover::after { opacity: 1; }

  &__badge {
    font-family: $font-family-display;
    font-weight: $font-weight-bold;
    font-size: $font-size-sm;
    color: $color-teal-deep;
    letter-spacing: 0.12em;
  }

  &__title {
    font-size: $font-size-xl;
    color: $color-navy;
    margin: 0;
  }

  &__desc {
    color: $color-text-muted;
    flex-grow: 1;
    margin: 0;
  }

  &__cta {
    display: inline-flex;
    align-items: center;
    gap: $space-2;
    font-weight: $font-weight-semibold;
    color: $color-navy;
    margin-top: auto;
  }

  &__arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px; height: 32px;
    border-radius: $radius-full;
    background: $color-navy;
    color: $color-white;
    font-size: 0.9rem;
    transition: transform $transition-base, background $transition-base;
  }

  &:hover &__arrow {
    transform: translateX(4px);
    background: $color-teal-deep;
  }
}
</style>
