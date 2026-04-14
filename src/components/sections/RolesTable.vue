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
        <tr v-for="r in rows" :key="r.role">
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
  box-shadow: $shadow-sm;

  th, td {
    text-align: left;
    padding: $space-3 $space-4;
    border-bottom: 1px solid $color-border;
  }

  th { background: $color-blue-gray-1; color: $color-navy; font-weight: $font-weight-bold; }
  tr:last-child td { border-bottom: none; }
}

.roles-closing { color: $color-text-muted; }
</style>
