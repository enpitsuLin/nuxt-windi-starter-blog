<script setup lang="ts">
  const app = useAppConfig();
  const { query } = usePostContent();

  const { data } = await useAsyncData('tags', () =>
    query.find().then((contents) =>
      contents
        .map((content) => content.tags!)
        .flat()
        .reduce((map, tag) => ({ ...map, [tag]: tag in map ? map[tag] + 1 : 1 }), {} as Record<string, number>)
    )
  );
</script>
<template>
  <SEO :title="`Tags - ${app.author}`" :description="app.description" />
  <div>
    <div class="flex flex-col gap-y-4 relative justify-center md:h-72 h-36 sm:gap-y-5">
      <h1 class="font-semibold text-4xl text-gray-900 sm:text-5xl dark:text-gray-100">Tags</h1>
      <div class="ont-medium text-gray-600 sm:max-w-lg sm:text-lg dark:text-gray-300">Discover all tags from content.</div>
    </div>
    <Card>
      <div class="flex flex-wrap">
        <Tag v-for="[tag, count] in Object.entries(data ?? {})" :tag="tag" :count="count" />
      </div>
    </Card>
  </div>
</template>
