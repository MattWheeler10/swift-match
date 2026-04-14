<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { brand, footerLinks } from '@/content/shared'
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <div class="site-footer__top">
        <RouterLink to="/" class="site-footer__brand">
          <span class="site-footer__logo" aria-hidden="true" />
          <span>{{ brand.name }}</span>
        </RouterLink>

        <nav class="site-footer__nav" aria-label="Footer">
          <RouterLink
            v-for="link in footerLinks"
            :key="link.to"
            :to="link.to"
            class="site-footer__link"
          >
            {{ link.label }}
          </RouterLink>
        </nav>
      </div>

      <hr class="site-footer__rule" />

      <div class="site-footer__bottom">
        <p class="site-footer__meta">© {{ new Date().getFullYear() }} {{ brand.name }}. Workforce control for modern care.</p>
        <p class="site-footer__tagline">Built for the teams keeping services running.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.site-footer {
  position: relative;
  background: $gradient-dark;
  color: $color-white;
  padding-block: $space-20 $space-10;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -60%; left: -20%;
    width: 700px; height: 700px;
    background: radial-gradient(circle, rgba($color-teal, 0.18) 0%, transparent 60%);
    filter: blur(60px);
    pointer-events: none;
  }

  &__inner {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: $space-10;
  }

  &__top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: $space-10;
    flex-wrap: wrap;
  }

  &__brand {
    display: inline-flex;
    align-items: center;
    gap: $space-3;
    font-family: $font-family-display;
    font-weight: $font-weight-bold;
    font-size: $font-size-lg;
    color: $color-white;
  }

  &__logo {
    width: 32px; height: 32px;
    border-radius: 10px;
    background: $gradient-accent;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      inset: 7px;
      border-radius: 5px;
      background: $color-navy-900;
    }
  }

  &__nav {
    display: flex;
    flex-wrap: wrap;
    gap: $space-8;
  }

  &__link {
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    color: rgba($color-white, 0.72);
    transition: color $transition-base;

    &:hover { color: $color-teal; }
  }

  &__rule {
    height: 1px;
    border: none;
    background: rgba($color-white, 0.1);
    margin: 0;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    gap: $space-4;
    flex-wrap: wrap;
    font-size: $font-size-sm;
  }

  &__meta { color: rgba($color-white, 0.6); }
  &__tagline { color: rgba($color-white, 0.5); }
}
</style>
