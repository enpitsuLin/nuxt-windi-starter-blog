<script setup lang="ts">
  const app = useAppConfig();
</script>
<template>
  <SEO :title="`About - ${app.author}`" :description="app.description" />
  <div>
    <div class="flex flex-col h-36 gap-y-4 relative justify-center sm:gap-y-5 md:h-72">
      <h1 class="font-semibold text-4xl text-gray-900 sm:text-5xl dark:text-gray-100">About</h1>
      <div class="h-12"></div>
    </div>
  </div>
</template>
