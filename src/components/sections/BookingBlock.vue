<script setup lang="ts">
import SectionBlock from './SectionBlock.vue'

interface Field { name: string; label: string; type: string; required?: boolean }

defineProps<{
  headline: string
  subtext?: string
  additionalLine?: string
  fields: Field[]
}>()

const onSubmit = (e: Event) => { e.preventDefault() }
</script>

<template>
  <SectionBlock :headline="headline" :subheadline="subtext" alt>
    <div class="booking">
      <div class="booking__calendar" aria-label="Calendar placeholder">
        <span>Embedded calendar (Calendly placeholder)</span>
      </div>

      <form class="booking__form" @submit="onSubmit">
        <label v-for="f in fields" :key="f.name" class="booking__field">
          <span>{{ f.label }}<em v-if="f.required"> *</em></span>
          <input :type="f.type" :name="f.name" :required="f.required" />
        </label>
        <button type="submit" class="btn btn--primary">Request time</button>
      </form>
    </div>
    <p v-if="additionalLine" class="booking__note">{{ additionalLine }}</p>
  </SectionBlock>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.booking {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $space-8;

  @media (max-width: 900px) { grid-template-columns: 1fr; }

  &__calendar {
    min-height: 360px;
    border: 1px dashed $color-border;
    border-radius: $radius-lg;
    background: $color-white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-text-muted;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: $space-3;
    padding: $space-6;
    background: $color-white;
    border-radius: $radius-lg;
    box-shadow: $shadow-sm;
  }

  &__field {
    display: flex;
    flex-direction: column;
    gap: $space-2;
    font-size: $font-size-sm;

    em { color: $color-navy; font-style: normal; }

    input {
      padding: $space-3;
      border: 1px solid $color-border;
      border-radius: $radius-sm;
      font: inherit;
    }
  }

  &__note { color: $color-text-muted; margin-top: $space-4; }
}
</style>
