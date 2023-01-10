<script setup lang="ts">
  const app = useAppConfig();
  const { query } = usePostContent();

  const { data } = await useAsyncData('tags', () => getTags());
</script>
<template>
  <SEO :title="`Tags - ${app.author}`" :description="app.description" />
  <div>
    <div class="flex flex-col h-36 gap-y-4 relative justify-center sm:gap-y-5 md:h-72">
      <h1 class="font-semibold text-4xl text-gray-900 sm:text-5xl dark:text-gray-100">Tags</h1>
      <div class="font-medium h-12 text-gray-600 sm:max-w-lg sm:text-lg dark:text-gray-300">
        Discover all tags from content.
      </div>
    </div>
    <Card>
      <div class="flex flex-wrap">
        <Tag v-for="[tag, count] in Object.entries(data ?? {})" :tag="tag" :count="count" />
      </div>
    </Card>
  </div>
</template>
