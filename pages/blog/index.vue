<script setup lang="ts">
  const app = useAppConfig();
  const { query } = usePostContent();
  const { data } = await useAsyncData('blog', () => query.limit(5).find());
</script>
<template>
  <SEO :title="`Blog - ${app.author}`" :description="app.description" />
  <div>
    <div class="flex flex-col h-36 gap-y-4 relative justify-center sm:gap-y-5 md:h-72">
      <h1 class="font-semibold text-4xl text-gray-900 sm:text-5xl dark:text-gray-100">Posts</h1>
      <div class="max-w-lg relative">
        <input
          aria-label="Search articles"
          type="text"
          placeholder="Search articles"
          class="bg-white border rounded-md border-gray-300 w-full py-2 px-4 text-gray-900 block dark:bg-gray-800 dark:border-gray-900 dark:text-gray-100"
        />
        <svg
          class="h-5 top-3 right-3 text-gray-400 w-5 absolute dark:text-gray-300"
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
