<script setup lang="ts">
const app = useAppConfig()
const { data } = await useAsyncData('home', () => getPosts({ limit: 5 }))
</script>

<template>
  <SEO :title="app.title" :description="app.description" />
  <div>
    <div class="flex flex-col h-36 gap-y-4 relative justify-center sm:gap-y-5 md:h-72">
      <h1 class="font-semibold text-4xl text-gray-900 sm:text-5xl dark:text-gray-100">
        Latest
      </h1>
      <div class="font-medium h-12 text-gray-600 sm:max-w-lg sm:text-lg dark:text-gray-300">
        {{ app.description }}
      </div>
    </div>
    <ul class="space-y-4">
      <li v-for="(content, index) in data" :key="content._id">
        <PostCard :post="content" :reverse="index % 2 === 1" />
      </li>
    </ul>
  </div>
</template>
