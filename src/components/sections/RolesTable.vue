<script setup lang="ts">
import SectionBlock from './SectionBlock.vue'
import type { Role } from '@/content/types'

defineProps<{
  headline: string
  rows: Role[]
  closingLine?: string
}>()
</script>

<template>
  <SectionBlock :headline="headline">
    <table class="roles-table">
      <thead>
        <tr>
          <th>Role</th>
          <th>Responsibility</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="r in rows" :key="r.role" :class="{ 'roles-table__highlight': r.role === 'SwiftMatch' }">
          <td>{{ r.role }}</td>
          <td>{{ r.responsibility }}</td>
        </tr>
      </tbody>
    </table>
    <p v-if="closingLine" class="roles-closing">{{ closingLine }}</p>
  </SectionBlock>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.roles-table {
  width: 100%;
  border-collapse: collapse;
  background: $color-white;
  border-radius: $radius-md;
  overflow: hidden;
  border: 1px solid $color-border;

  th, td {
    text-align: left;
    padding: $space-3 $space-5;
    border-bottom: 1px solid $color-border;
    font-size: $font-size-sm;
  }

  th {
    background: $color-blue-gray-1;
    color: $color-navy;
    font-weight: $font-weight-semibold;
    font-size: $font-size-xs;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  td:first-child {
    font-weight: $font-weight-semibold;
    color: $color-navy;
    white-space: nowrap;
  }

  td:last-child { color: $color-text; }

  tr:last-child td { border-bottom: none; }

  &__highlight {
    td {
      background: $color-teal-soft;
    }
    td:first-child { color: $color-teal-deep; }
  }
}

.roles-closing {
  color: $color-text;
  font-size: $font-size-sm;
}
</style>
