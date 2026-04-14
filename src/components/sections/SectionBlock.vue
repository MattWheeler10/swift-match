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
      <header v-if="eyebrow || headline || subheadline" v-reveal.stagger="{ stagger: 0.08, y: 20 }" class="section-block__head">
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

  &__head {
    display: flex;
    flex-direction: column;
    gap: $space-4;
    max-width: 820px;
  }

  &__title {
    font-size: clamp(1.75rem, 2.5vw + 0.5rem, 2.5rem);
    line-height: 1.1;
    letter-spacing: -0.03em;
  }

  &__sub {
    font-size: $font-size-md;
    color: $color-text-muted;
    line-height: 1.6;
    max-width: 680px;

    .section--dark & { color: rgba($color-white, 0.75); }
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: $space-8;
  }
}
</style>
