<script lang="ts" setup>
defineProps<{ tag: string; count?: number }>()
</script>

<template>
  <NuxtLink

    class="tag-link text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-200"
    :to="{ name: 'tags-tag', params: { tag } }"
  >
    #{{ tag }}
  </NuxtLink>
</template>
