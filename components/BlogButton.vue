<script lang="ts" setup>
  import { RouteLocationRaw } from 'vue-router';
  defineProps<{ disabled?: boolean; to?: RouteLocationRaw }>();
  defineEmits<{ (event: 'click', payload: MouseEvent): void }>();
</script>

<template>
  <NuxtLink
    role="button"
    :class="[
      'focus:outline-none focus:ring-offset-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-offset-black dark:focus:ring-gray-50',
      'hover:(bg-gray-50 dark:bg-gray-900)',
      disabled && 'cursor-not-allowed opacity-75'
    ]"
    class="bg-white border rounded-lg font-medium border-gray-200 text-base py-3 px-6 text-gray-700 inline-flex items-center justify-center sm:justify-start dark:bg-[#0c0c0d] dark:border-gray-700 dark:text-gray-200"
    :to="disabled ? undefined : to"
    @click="$emit('click', $event)"
  >
    <slot name="prefix"></slot>

    <slot></slot>

    <slot name="append"></slot>
  </NuxtLink>
</template>
