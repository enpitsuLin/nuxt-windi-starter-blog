<script lang="ts" setup>
  useHead({
    bodyAttrs: {
      class: 'bg-white text-black antialiased overflow-hidden dark:bg-gray-900 dark:text-white'
    }
  });
</script>

<template>
  <div class="mx-auto max-w-6xl px-4 overflow-y-auto sm:px-6 xl:max-w-8xl xl:px-0">
    <div class="flex h-screen flex-col">
      <Header></Header>

      <main class="flex-1 relative mx-auto">
        <slot></slot>
      </main>
      <Footer></Footer>
    </div>
  </div>
</template>
