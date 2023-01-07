<script lang="ts" setup>
  defineProps<{ tag: string; count?: number }>();
</script>

<template>
  <NuxtLink
    :class="['text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-200']"
    class="tag-link"
    :to="{ name: 'tags-tag', params: { tag } }"
  >
    #{{ tag }}
  </NuxtLink>
</template>
