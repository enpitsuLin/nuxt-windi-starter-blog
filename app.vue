<script lang="ts" setup>
useHead({
  bodyAttrs: {
    class: 'bg-white scrollbars text-black antialiased dark:bg-[#0C0C0D] dark:text-white',
  },
  htmlAttrs: {
    class: 'scrollbars',
  },
})
</script>

<template>
  <div class="app">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
