<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { brand, navLinks, primaryCta } from '@/content/shared'

const mobileOpen = ref(false)
const scrolled = ref(false)
const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value
}
const closeMobile = () => {
  mobileOpen.value = false
}

const onScroll = () => {
  scrolled.value = window.scrollY > 8
}
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

watch(mobileOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})
</script>

<template>
  <header
    class="site-header"
    :class="{ 'site-header--scrolled': scrolled, 'site-header--open': mobileOpen }"
  >
    <div class="site-header__shell">
      <div class="site-header__inner">
        <RouterLink to="/" class="site-header__brand" @click="closeMobile">
          <span class="site-header__logo" aria-hidden="true">
            <span class="site-header__logo-spark" />
          </span>
          <span class="site-header__brand-text">{{ brand.name }}</span>
        </RouterLink>

        <nav class="site-header__nav" aria-label="Primary">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="site-header__link"
          >
            <span>{{ link.label }}</span>
          </RouterLink>
        </nav>

        <div class="site-header__actions">
          <RouterLink :to="primaryCta.to!" class="site-header__cta">
            <span>{{ primaryCta.label }}</span>
            <svg
              class="site-header__cta-arrow"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </RouterLink>

          <button
            class="site-header__burger"
            :class="{ 'site-header__burger--open': mobileOpen }"
            type="button"
            :aria-expanded="mobileOpen"
            aria-label="Toggle navigation"
            @click="toggleMobile"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </div>

    <Transition name="mobile">
      <div v-if="mobileOpen" class="site-header__mobile" role="dialog" aria-modal="true">
        <nav class="site-header__mobile-nav" aria-label="Mobile">
          <RouterLink
            v-for="(link, i) in navLinks"
            :key="link.to"
            :to="link.to"
            class="site-header__mobile-link"
            :style="{ '--i': i }"
            @click="closeMobile"
          >
            <span>{{ link.label }}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M5 4l4 4-4 4"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </RouterLink>
        </nav>
        <RouterLink
          :to="primaryCta.to!"
          class="btn btn--primary site-header__mobile-cta"
          @click="closeMobile"
        >
          {{ primaryCta.label }}
        </RouterLink>
      </div>
    </Transition>
  </header>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.site-header {
  position: sticky;
  top: 0;
  z-index: $z-overlay;
  transition: padding $transition-slow;
  pointer-events: none;
  height: 0;

  &__shell {
    padding-top: 0.75rem;
    pointer-events: auto;
    max-width: 1200px;
    margin-inline: auto;
    padding-inline: $space-4;
    transition:
      max-width $transition-slow,
      padding $transition-slow;
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: $space-6;
    padding: $space-3 $space-4 $space-3 $space-5;
    border-radius: $radius-full;
    background: transparent;
    border: 1px solid transparent;
    box-shadow: none;
    transition:
      background $transition-slow,
      border-color $transition-slow,
      box-shadow $transition-slow,
      backdrop-filter $transition-slow;
  }

  &--scrolled &__inner {
    background: rgba($color-white, 0.82);
    backdrop-filter: saturate(180%) blur(16px);
    -webkit-backdrop-filter: saturate(180%) blur(16px);
    border-color: rgba($color-navy, 0.08);
    box-shadow:
      0 1px 0 rgba($color-white, 0.9) inset,
      0 10px 30px -12px rgba($color-navy-900, 0.18),
      0 4px 10px -4px rgba($color-navy-900, 0.06);
  }

  &--scrolled &__shell {
    max-width: 1164px;
  }

  &__brand {
    display: inline-flex;
    align-items: center;
    gap: $space-3;
    font-family: $font-family-display;
    font-weight: $font-weight-bold;
    font-size: $font-size-md;
    letter-spacing: -0.01em;
    color: $color-navy;
    transition: opacity $transition-base;

    &:hover {
      opacity: 0.85;
    }
  }

  &__logo {
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 9px;
    background: $gradient-accent;
    box-shadow:
      inset 0 0 0 1px rgba($color-navy-900, 0.12),
      inset 0 1px 0 rgba($color-white, 0.35),
      $shadow-xs;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      inset: 6px;
      border-radius: 4px;
      background: $color-navy-900;
      box-shadow: inset 0 1px 0 rgba($color-white, 0.08);
    }
  }

  &__logo-spark {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      115deg,
      transparent 40%,
      rgba($color-white, 0.5) 50%,
      transparent 60%
    );
    transform: translateX(-100%);
    animation: logoSheen 4.5s ease-in-out infinite;
  }

  @keyframes logoSheen {
    0%,
    70% {
      transform: translateX(-120%);
    }
    85% {
      transform: translateX(120%);
    }
    100% {
      transform: translateX(120%);
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: $space-2;

    @media (max-width: 960px) {
      display: none;
    }
  }

  &__link {
    position: relative;
    display: inline-flex;
    align-items: center;
    height: 38px;
    padding: 0 $space-4;
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: $color-navy-ink;
    border-radius: $radius-full;
    transition:
      color $transition-base,
      background $transition-base;
    z-index: 0;

    span {
      position: relative;
      z-index: 1;
    }

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: rgba($color-navy, 0.05);
      opacity: 0;
      transform: scale(0.9);
      transition:
        opacity $transition-base,
        transform $transition-base;
    }

    &:hover {
      color: $color-navy;
      &::before {
        opacity: 1;
        transform: scale(1);
      }
    }

    &.router-link-active {
      color: $color-navy;
      &::before {
        opacity: 1;
        transform: scale(1);
        background: linear-gradient(135deg, rgba($color-teal, 0.14), rgba($color-teal-deep, 0.08));
        box-shadow: inset 0 0 0 1px rgba($color-teal, 0.25);
      }
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: $space-2;
  }

  &__cta {
    display: inline-flex;
    align-items: center;
    gap: $space-2;
    height: 40px;
    padding: 0 $space-2 0 $space-5;
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: $color-white;
    background: $gradient-dark;
    border-radius: $radius-full;
    box-shadow:
      0 1px 0 rgba($color-white, 0.14) inset,
      0 8px 22px -10px rgba($color-navy-900, 0.55);
    transition:
      transform $transition-base,
      box-shadow $transition-base;

    &-arrow {
      display: inline-flex;
      width: 26px;
      height: 26px;
      padding: 6px;
      border-radius: $radius-full;
      background: rgba($color-white, 0.12);
      transition:
        transform $transition-base,
        background $transition-base;
    }

    &:hover {
      transform: translateY(-1px);
      box-shadow:
        0 1px 0 rgba($color-white, 0.18) inset,
        0 14px 28px -10px rgba($color-navy-900, 0.6);
    }

    &:hover &-arrow {
      background: rgba($color-teal, 0.5);
      transform: translateX(2px);
    }
  }

  &__burger {
    position: relative;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 40px;
    height: 40px;
    background: rgba($color-navy, 0.04);
    border: 1px solid rgba($color-navy, 0.08);
    border-radius: $radius-full;
    padding: 0;
    cursor: pointer;
    transition: background $transition-base;

    span {
      width: 16px;
      height: 1.75px;
      background: $color-navy;
      border-radius: 2px;
      transform-origin: center;
      transition:
        transform $transition-base,
        opacity $transition-base;
    }

    &--open span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }
    &--open span:nth-child(2) {
      opacity: 0;
      transform: scaleX(0);
    }
    &--open span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }

    &:hover {
      background: rgba($color-navy, 0.08);
    }

    @media (max-width: 960px) {
      display: flex;
    }
  }

  // ─── Mobile overlay ────────────────────────────────────────────
  &__mobile {
    display: none;
    position: fixed;
    inset: 0;
    top: 0;
    padding: calc(76px + #{$space-4}) $space-6 $space-8;
    background: rgba($color-cream, 0.98);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    flex-direction: column;
    gap: $space-6;
    z-index: -1;

    @media (max-width: 960px) {
      display: flex;
    }
  }

  &__mobile-nav {
    display: flex;
    flex-direction: column;
    gap: $space-1;
  }

  &__mobile-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: $space-4 $space-5;
    color: $color-navy;
    font-family: $font-family-display;
    font-weight: $font-weight-semibold;
    font-size: $font-size-lg;
    letter-spacing: -0.01em;
    background: rgba($color-white, 0.6);
    border: 1px solid rgba($color-navy, 0.06);
    border-radius: $radius-md;
    transition:
      background $transition-base,
      transform $transition-base;
    animation: mobileLinkIn 400ms $ease-smooth both;
    animation-delay: calc(60ms * var(--i));

    svg {
      color: $color-text-subtle;
      transition:
        transform $transition-base,
        color $transition-base;
    }

    &:hover,
    &.router-link-active {
      background: $color-white;
      transform: translateX(4px);
      svg {
        color: $color-teal-deep;
        transform: translateX(3px);
      }
    }
  }

  &__mobile-cta {
    margin-top: auto;
    width: 100%;
    justify-content: center;
  }

  @keyframes mobileLinkIn {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

// Transition
.mobile-enter-active {
  transition: opacity $transition-slow;
}
.mobile-leave-active {
  transition: opacity $transition-base;
}
.mobile-enter-from,
.mobile-leave-to {
  opacity: 0;
}
</style>
