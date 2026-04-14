<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
import { brand, navLinks, primaryCta } from '@/content/shared'

const mobileOpen = ref(false)
const scrolled = ref(false)
const toggleMobile = () => { mobileOpen.value = !mobileOpen.value }
const closeMobile = () => { mobileOpen.value = false }

const onScroll = () => { scrolled.value = window.scrollY > 8 }
onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }) })
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="site-header" :class="{ 'site-header--scrolled': scrolled }">
    <div class="container site-header__inner">
      <RouterLink to="/" class="site-header__brand" @click="closeMobile">
        <span class="site-header__logo" aria-hidden="true" />
        <span>{{ brand.name }}</span>
      </RouterLink>

      <nav class="site-header__nav" aria-label="Primary">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="site-header__link"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="site-header__actions">
        <RouterLink :to="primaryCta.to!" class="btn btn--primary site-header__cta">
          {{ primaryCta.label }}
        </RouterLink>

        <button
          class="site-header__burger"
          type="button"
          :aria-expanded="mobileOpen"
          aria-label="Toggle navigation"
          @click="toggleMobile"
        >
          <span /><span /><span />
        </button>
      </div>
    </div>

    <Transition name="mobile">
      <div v-if="mobileOpen" class="site-header__mobile">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="site-header__mobile-link"
          @click="closeMobile"
        >
          {{ link.label }}
        </RouterLink>
        <RouterLink
          :to="primaryCta.to!"
          class="btn btn--primary"
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
  background: rgba($color-cream, 0.75);
  backdrop-filter: saturate(180%) blur(14px);
  -webkit-backdrop-filter: saturate(180%) blur(14px);
  border-bottom: 1px solid transparent;
  transition: border-color $transition-base, background $transition-base, box-shadow $transition-base;

  &--scrolled {
    background: rgba($color-white, 0.9);
    border-bottom-color: $color-border;
    box-shadow: $shadow-xs;
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: $space-6;
    padding-block: $space-4;
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
  }

  &__logo {
    width: 28px; height: 28px;
    border-radius: 8px;
    background: $gradient-accent;
    box-shadow: inset 0 0 0 1px rgba($color-navy-900, 0.1), $shadow-xs;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      inset: 6px;
      border-radius: 4px;
      background: $color-navy-900;
    }
  }

  &__nav {
    display: flex;
    gap: $space-8;

    @media (max-width: 960px) { display: none; }
  }

  &__link {
    position: relative;
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: $color-navy-ink;
    padding-inline: $space-1;
    transition: color $transition-base;

    &::after {
      content: '';
      position: absolute;
      left: $space-1; right: $space-1; bottom: 8px;
      height: 2px;
      background: $gradient-accent;
      border-radius: $radius-full;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform $transition-base;
    }

    &:hover { color: $color-navy; }
    &.router-link-active { color: $color-navy; }
    &.router-link-active::after,
    &:hover::after { transform: scaleX(1); }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: $space-3;
  }

  &__cta { padding-inline: $space-6; }

  &__burger {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    background: none;
    border: none;
    padding: $space-2;
    cursor: pointer;
    min-width: 44px;
    min-height: 44px;

    span {
      width: 22px;
      height: 2px;
      background: $color-navy;
      border-radius: 2px;
      transition: transform $transition-base;
    }

    @media (max-width: 960px) { display: flex; }
  }

  &__mobile {
    display: none;
    flex-direction: column;
    gap: $space-3;
    padding: $space-4 $space-8 $space-6;
    border-top: 1px solid $color-border;
    background: $color-white;

    @media (max-width: 960px) { display: flex; }
  }

  &__mobile-link {
    padding: $space-3 0;
    color: $color-navy;
    font-weight: $font-weight-semibold;
    border-bottom: 1px solid $color-border;
  }
}

.mobile-enter-active, .mobile-leave-active { transition: all $transition-base; }
.mobile-enter-from, .mobile-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
