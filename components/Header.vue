<script lang="ts" setup>
  const app = useAppConfig();
</script>

<template>
  <header
    class="sticky px-2 top-0 left-0 z-20 bg-transparent backdrop-filter backdrop-blur-8px backdrop-saturate-[180%] flex items-center justify-between py-4"
  >
    <div>
      <NuxtLink :aria-label="app.headerTitle" to="/">
        <div class="flex items-center justify-between">
          <div class="mr-3">N</div>
          <div class="hidden h-6 text-2xl font-semibold sm:block">{{ app.headerTitle }}</div>
        </div>
      </NuxtLink>
    </div>
    <div class="flex items-center text-base leading-5">
      <div class="hidden sm:block">
        <NuxtLink class="font-medium text-gray-900 rounded dark:text-gray-100 sm:p-4" href="/blog"> Blog </NuxtLink>
        <NuxtLink class="font-medium text-gray-900 rounded dark:text-gray-100 sm:p-4" href="/tags"> Tags </NuxtLink>
        <NuxtLink class="font-medium text-gray-900 rounded dark:text-gray-100 sm:p-4" href="/about"> About </NuxtLink>
      </div>
      <ThemeSwitch />
    </div>
  </header>
</template>
