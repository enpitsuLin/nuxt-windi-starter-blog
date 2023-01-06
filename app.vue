<script lang="ts" setup>
  useHead({
    bodyAttrs: {
      class: 'bg-white nuxt-scrollbars text-black antialiased dark:bg-gray-900 dark:text-white'
    },
    htmlAttrs: {
      class: 'nuxt-scrollbars'
    }
  });
</script>
<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
  .nuxt-scrollbars ::-webkit-scrollbar {
    @apply bg-transparent h-[0.6em] w-[0.6em];
  }
  .nuxt-scrollbars ::-webkit-scrollbar-thumb {
    @apply rounded-[0.6em] bg-light-100;
  }
  .nuxt-scrollbars ::-webkit-scrollbar-track {
    @apply bg-light-50;
  }
  .dark.nuxt-scrollbars ::-webkit-scrollbar-thumb {
    @apply bg-dark-500;
  }
  .dark.nuxt-scrollbars ::-webkit-scrollbar-track {
    @apply bg-gray-600;
  }
</style>
