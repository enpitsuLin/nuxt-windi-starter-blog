<script setup lang="ts">
  const app = useAppConfig();
</script>
<template>
  <SEO :title="`About - ${app.author}`" :description="app.description" />
  <div>
    <div class="flex flex-col gap-y-4 relative justify-center md:h-72 h-36 sm:gap-y-5">
      <h1 class="font-semibold text-4xl text-gray-900 sm:text-5xl dark:text-gray-100">About</h1>
      <div class="font-medium h-7"></div>
    </div>
  </div>
</template>
