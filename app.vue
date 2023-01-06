<script lang="ts" setup>
  useHead({
    bodyAttrs: {
      class: 'bg-white scrollbars text-black antialiased dark:bg-gray-900 dark:text-white'
    },
    htmlAttrs: {
      class: 'scrollbars'
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
  .scrollbars ::-webkit-scrollbar {
    @apply bg-transparent h-[0.6em] w-[0.6em];
  }
  .scrollbars ::-webkit-scrollbar-thumb {
    @apply rounded-[0.6em] bg-zinc-300 hover:bg-zinc-200;
  }
  .scrollbars ::-webkit-scrollbar-track {
    @apply bg-zinc-100;
  }

  .dark.scrollbars ::-webkit-scrollbar-thumb {
    @apply bg-zinc-700 hover:bg-zinc-600;
  }
  .dark.scrollbars ::-webkit-scrollbar-track {
    @apply bg-zinc-800;
  }
</style>
