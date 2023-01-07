<script lang="ts" setup>
  useHead({
    bodyAttrs: {
      class: 'bg-white scrollbars text-black antialiased dark:bg-[#0C0C0D] dark:text-white'
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
    @apply bg-transparent h-1.75 w-1.75;
  }
  .scrollbars ::-webkit-scrollbar-thumb {
    @apply rounded-md bg-gray-400 hover:bg-gray-300;
  }
  .scrollbars ::-webkit-scrollbar-track {
    @apply bg-gray-100;
  }

  .dark.scrollbars ::-webkit-scrollbar-thumb {
    @apply bg-gray-700 hover:bg-gray-600;
  }
  .dark.scrollbars ::-webkit-scrollbar-track {
    @apply bg-gray-800;
  }
  html {
    font-size: 16px;
    scroll-behavior: smooth;
    overflow-y: overlay;
  }
  :target::before {
    content: '';
    display: block;
    height: 80px;
    margin: -80px 0 0;
  }
</style>
