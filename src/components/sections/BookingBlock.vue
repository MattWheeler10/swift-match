<script setup lang="ts">
import { reactive } from 'vue'
import SectionBlock from './SectionBlock.vue'

interface Field { name: string; label: string; type: string; required?: boolean }

const props = defineProps<{
  headline: string
  subtext?: string
  additionalLine?: string
  fields: Field[]
}>()

interface FieldState { value: string; touched: boolean; error: string }

const formState = reactive<Record<string, FieldState>>(
  Object.fromEntries(
    props.fields.map(f => [f.name, { value: '', touched: false, error: '' }])
  )
)

function validate(field: Field): string {
  const val = formState[field.name].value.trim()
  if (field.required && !val) return `${field.label} is required`
  if (field.type === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val))
    return 'Please enter a valid email address'
  return ''
}

function onBlur(field: Field) {
  formState[field.name].touched = true
  formState[field.name].error = validate(field)
}

function onInput(field: Field) {
  if (formState[field.name].touched)
    formState[field.name].error = validate(field)
}

function onSubmit(e: Event) {
  e.preventDefault()
  // Touch all fields and validate
  props.fields.forEach(f => {
    formState[f.name].touched = true
    formState[f.name].error = validate(f)
  })
}
</script>

<template>
  <SectionBlock :headline="headline" :subheadline="subtext" alt>
    <div class="booking">
      <div class="booking__calendar" aria-label="Calendar placeholder">
        <span>Embedded calendar (Calendly placeholder)</span>
      </div>

      <form class="booking__form" novalidate @submit="onSubmit">
        <div
          v-for="f in fields"
          :key="f.name"
          class="booking__field"
          :class="{ 'booking__field--error': formState[f.name].touched && formState[f.name].error }"
        >
          <label :for="f.name" class="booking__label">
            {{ f.label }}<em v-if="f.required" class="booking__required" aria-hidden="true"> *</em>
          </label>
          <div class="booking__input-wrap">
            <input
              :id="f.name"
              v-model="formState[f.name].value"
              :type="f.type"
              :name="f.name"
              :required="f.required"
              :aria-invalid="formState[f.name].touched && !!formState[f.name].error"
              :aria-describedby="formState[f.name].error ? `${f.name}-error` : undefined"
              class="booking__input"
              @blur="onBlur(f)"
              @input="onInput(f)"
            />
            <span
              v-if="formState[f.name].touched && formState[f.name].error"
              class="booking__input-icon"
              aria-hidden="true"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </span>
          </div>
          <p
            v-if="formState[f.name].touched && formState[f.name].error"
            :id="`${f.name}-error`"
            class="booking__error"
            role="alert"
          >
            {{ formState[f.name].error }}
          </p>
        </div>

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
    gap: $space-4;
    padding: $space-6;
    background: $color-white;
    border-radius: $radius-lg;
    box-shadow: $shadow-sm;
  }

  // ── Field container ──────────────────────────────────────────────────────────
  &__field {
    display: flex;
    flex-direction: column;
    gap: $space-1;
  }

  // ── Label ────────────────────────────────────────────────────────────────────
  &__label {
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    color: $color-navy;
    line-height: 1.4;
    cursor: pointer;
  }

  &__required {
    color: $color-coral;
    font-style: normal;
    margin-left: 1px;
  }

  // ── Input wrapper (positions the icon) ──────────────────────────────────────
  &__input-wrap {
    position: relative;
  }

  // ── Input ────────────────────────────────────────────────────────────────────
  &__input {
    width: 100%;
    padding: $space-3 $space-4;
    border: 1.5px solid $color-border;
    border-radius: $radius-sm;
    font: inherit;
    font-size: $font-size-sm;
    color: $color-navy;
    background: $color-white;
    outline: none;
    transition:
      border-color $transition-fast,
      box-shadow $transition-fast,
      background $transition-fast;
    box-sizing: border-box;

    &::placeholder { color: $color-blue-gray-3; }

    &:focus {
      border-color: $color-teal-deep;
      box-shadow: 0 0 0 3px rgba($color-teal, 0.15);
    }

    // Error state — triggered by parent class
    .booking__field--error & {
      border-color: $color-coral;
      background: rgba($color-coral, 0.03);
      padding-right: 2.5rem; // make room for icon

      &:focus {
        border-color: $color-coral;
        box-shadow: 0 0 0 3px rgba($color-coral, 0.14);
      }
    }
  }

  // ── Inline error icon ────────────────────────────────────────────────────────
  &__input-icon {
    position: absolute;
    right: $space-3;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    color: $color-coral;
    pointer-events: none;
  }

  // ── Error message ────────────────────────────────────────────────────────────
  &__error {
    display: flex;
    align-items: center;
    gap: $space-2;
    margin: 0;
    margin-top: $space-1;
    font-size: $font-size-xs;
    font-weight: $font-weight-medium;
    color: darken($color-coral, 12%);
    line-height: 1.4;
    animation: error-in 160ms $ease-smooth both;

    &::before {
      content: '';
      flex-shrink: 0;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: currentColor;
      margin-top: 1px;
    }
  }

  &__note { color: $color-text-muted; margin-top: $space-4; }
}

@keyframes error-in {
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
