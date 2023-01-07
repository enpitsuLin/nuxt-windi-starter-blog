<script setup lang="ts">
  const app = useAppConfig();
  const { query } = usePostContent();
  const { data } = await useAsyncData('blog', () => query.limit(5).find());
</script>
<template>
  <SEO :title="`Blog - ${app.author}`" :description="app.description" />
  <div>
    <div class="flex flex-col gap-y-4 relative justify-center md:h-72 h-36 sm:gap-y-5">
      <h1 class="font-semibold text-4xl text-gray-900 sm:text-5xl dark:text-gray-100">Posts</h1>
      <div class="relative max-w-lg">
        <input
          aria-label="Search articles"
          type="text"
          placeholder="Search articles"
          class="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
        />
        <svg
          class="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>
