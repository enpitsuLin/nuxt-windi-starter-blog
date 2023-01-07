<script setup lang="ts">
  const app = useAppConfig();
  const { query } = usePostContent();
  const { data } = await useAsyncData('home', () => query.limit(5).find());
</script>
<template>
  <SEO :title="app.title" :description="app.description" />
  <div>
    <div class="space-y-2 pt-6 pb-8 md:space-y-5">
      <h1
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
      >
        Latest
      </h1>
      <p class="max-w-lg pb-6 sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-gray-600 dark:text-gray-300">
        {{ app.description }}
      </p>
    </div>
    <ul class="space-y-4">
      <li v-for="(content, index) in data">
        <PostCard :post="content" :reverse="index % 2 === 1" />
      </li>
    </ul>
  </div>
</template>
