<script lang="ts" setup>
  withDefaults(defineProps<{ as?: string }>(), { as: 'div' });
</script>

<template>
  <component
    :is="as"
    class="bg-gray-50 border rounded-lg p-6 relative overflow-hidden dark:bg-gray-900 dark:border-gray-800"
  >
    <slot></slot>
  </component>
</template>
