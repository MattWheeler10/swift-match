<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { verticals } from '@/content/shared'
import { globalHome } from '@/content/global-home'

const { headline, subheadline } = globalHome.verticalSelector

// Lucide icons — hospital building, house (care home), user-check (domiciliary visiting)
const icons: string[] = [
  // Hospitals — Lucide `hospital` (building with cross)
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6v4"/><path d="M14 14h-4"/><path d="M14 18h-4"/><path d="M14 8h-4"/><path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"/><path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"/></svg>`,
  // Care Homes — Lucide `house` (solid home outline)
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,
  // Domiciliary — Lucide `user-check` (home visiting / verified carer)
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>`,
]
</script>

<template>
  <section class="vertical-selector section section--dark">
    <div class="vertical-selector__orb vertical-selector__orb--teal" aria-hidden="true"></div>
    <div class="vertical-selector__orb vertical-selector__orb--gold" aria-hidden="true"></div>
    <div class="container">
      <header class="vertical-selector__head">
        <h2 class="vertical-selector__title">{{ headline }}</h2>
        <p class="vertical-selector__sub">{{ subheadline }}</p>
      </header>

      <div v-reveal.stagger="{ stagger: 0.12, y: 36 }" class="vertical-selector__cards">
        <RouterLink
          v-for="(v, i) in verticals"
          :key="v.id"
          :to="v.to"
          class="vertical-card"
        >
          <!-- eslint-disable-next-line vue/no-v-html -->
          <span class="vertical-card__icon" v-html="icons[i]"></span>

          <div class="vertical-card__body">
            <h3 class="vertical-card__title">{{ v.title }}</h3>
            <p class="vertical-card__desc">{{ v.description }}</p>
          </div>

          <div class="vertical-card__cta">
            <span>Explore</span>
            <span class="vertical-card__arrow" aria-hidden="true">
              <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.vertical-selector {
  background: $gradient-dark;
  overflow: hidden;

  &__orb {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;

    &--teal {
      width: 700px; height: 700px;
      top: -260px; right: -200px;
      background: radial-gradient(circle, rgba($color-teal, 0.13) 0%, transparent 65%);
    }

    &--gold {
      width: 500px; height: 500px;
      bottom: -220px; left: -180px;
      background: radial-gradient(circle, rgba($color-gold, 0.09) 0%, transparent 65%);
    }
  }

  &__head {
    display: flex;
    flex-direction: column;
    gap: $space-3;
    align-items: center;
    text-align: center;
    margin-bottom: $space-14;
  }

  &__title {
    font-size: clamp(1.75rem, 2.5vw + 0.5rem, 2.75rem);
    color: $color-white;
    max-width: 700px;
  }

  &__sub {
    color: rgba($color-white, 0.6);
    max-width: 520px;
    font-size: $font-size-base;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $space-6;

    @media (max-width: 900px) { grid-template-columns: 1fr; }
  }
}

// ─── Card ────────────────────────────────────────────────────────────────────
.vertical-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: $space-5;
  text-decoration: none;
  color: $color-white;
  min-height: 290px;
  overflow: hidden;
  padding: $space-8;
  border-radius: $radius-xl;
  background: rgba($color-white, 0.05);
  border: 1px solid rgba($color-white, 0.1);
  backdrop-filter: blur(14px);
  cursor: pointer;
  transition:
    background $transition-slow,
    border-color $transition-slow,
    transform $transition-slow,
    box-shadow $transition-slow;

  &:hover {
    background: rgba($color-teal, 0.09);
    border-color: rgba($color-teal, 0.45);
    transform: translateY(-6px);
    box-shadow:
      0 0 0 1px rgba($color-teal, 0.25),
      0 32px 64px -16px rgba($color-teal, 0.22),
      0 8px 20px -8px rgba($color-navy-900, 0.4);
  }

  // ─── Icon pill ───────────────────────────────────────────────────────────
  &__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px; height: 48px;
    border-radius: $radius-md;
    background: rgba($color-teal, 0.14);
    color: $color-teal;
    flex-shrink: 0;
    align-self: flex-start;
    transition: background $transition-base;

    :deep(svg) { width: 22px; height: 22px; }

    .vertical-card:hover & { background: rgba($color-teal, 0.24); }
  }

  // ─── Body ────────────────────────────────────────────────────────────────
  &__body { flex-grow: 1; }

  &__title {
    font-size: $font-size-lg;
    font-weight: $font-weight-bold;
    color: $color-white;
    margin: 0 0 $space-3;
    line-height: 1.2;
  }

  &__desc {
    color: rgba($color-white, 0.62);
    margin: 0;
    line-height: 1.65;
    font-size: $font-size-base;
  }

  // ─── CTA row ─────────────────────────────────────────────────────────────
  &__cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: $space-5;
    border-top: 1px solid rgba($color-white, 0.1);
    margin-top: auto;
    font-weight: $font-weight-semibold;
    font-size: $font-size-sm;
    color: $color-teal;
    letter-spacing: 0.02em;
    transition: border-color $transition-base;

    .vertical-card:hover & { border-top-color: rgba($color-teal, 0.2); }
  }

  &__arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px; height: 36px;
    border-radius: $radius-full;
    background: rgba($color-teal, 0.14);
    color: $color-teal;
    transition: transform $transition-base, background $transition-base, color $transition-base;

    svg { width: 16px; height: 16px; }

    .vertical-card:hover & {
      transform: translateX(4px);
      background: $color-teal;
      color: $color-navy-900;
    }
  }

}
</style>
