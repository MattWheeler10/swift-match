<script setup lang="ts">
defineProps<{
  eyebrow?: string
  headline?: string
  subheadline?: string
  alt?: boolean
  dark?: boolean
}>()
</script>

<template>
  <section class="section" :class="{ 'section--alt': alt, 'section--dark': dark }">
    <div class="container section-block">
      <header
        v-if="eyebrow || headline || subheadline"
        v-reveal.stagger="{ stagger: 0.08, y: 20 }"
        class="section-block__head"
      >
        <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
        <h2 v-if="headline" class="section-block__title">{{ headline }}</h2>
        <p v-if="subheadline" class="section-block__sub">{{ subheadline }}</p>
      </header>
      <div class="section-block__body">
        <slot />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.section-block {
  display: flex;
  flex-direction: column;
  gap: $space-12;

  // ─── Head ────────────────────────────────────────────────────────────────────
  &__head {
    display: flex;
    flex-direction: column;
    gap: $space-3;
    max-width: 760px;
  }

  // ─── Title ───────────────────────────────────────────────────────────────────
  &__title {
    font-family: $font-family-display;
    font-size: clamp(1.9rem, 2.8vw + 0.5rem, 2.875rem);
    font-weight: $font-weight-bold;
    line-height: 1.08;
    letter-spacing: -0.03em;
    // navy-900 → teal-deep gradient for depth + brand connection
    background: linear-gradient(118deg, $color-navy-900 0%, $color-navy 45%, $color-teal-deep 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;

    // ── Alt sections: slightly warmer gradient ──
    .section--alt & {
      background: linear-gradient(
        118deg,
        $color-navy-900 0%,
        $color-navy 55%,
        $color-teal-deep 100%
      );
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    // ── Dark sections: white → teal ──
    .section--dark & {
      background: linear-gradient(
        118deg,
        $color-white 0%,
        rgba($color-white, 0.9) 50%,
        $color-teal 100%
      );
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  // ─── Subheadline ─────────────────────────────────────────────────────────────
  &__sub {
    font-size: $font-size-md;
    color: $color-text-muted;
    line-height: 1.65;
    max-width: 640px;
    margin-top: $space-1;

    .section--dark & {
      color: rgba($color-white, 0.72);
    }
  }

  // ─── Body ────────────────────────────────────────────────────────────────────
  &__body {
    display: flex;
    flex-direction: column;
    gap: $space-8;
  }
}
</style>
