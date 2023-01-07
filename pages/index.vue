<script setup lang="ts">
  const app = useAppConfig();
  const { query } = usePostContent();
  const { data } = await useAsyncData('home', () => query.limit(5).find());
</script>
<template>
  <SEO :title="app.title" :description="app.description" />
  <div>
    <div class="flex flex-col gap-y-4 relative justify-center sm:h-72 sm:gap-y-5">
      <h1 class="font-semibold text-4xl text-gray-900 sm:text-5xl dark:text-gray-100">Latest</h1>
      <div class="font-medium text-gray-600 sm:max-w-lg sm:text-lg dark:text-gray-300">
        {{ app.description }}
      </div>
    </div>
    <ul class="space-y-4">
      <li v-for="(content, index) in data">
        <PostCard :post="content" :reverse="index % 2 === 1" />
      </li>
    </ul>
  </div>
</template>
