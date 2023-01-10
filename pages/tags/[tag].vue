<script setup lang="ts">
  const app = useAppConfig();
  const route = useRoute();

  const { data } = await useAsyncData('tag', () =>
    getPosts({ where: { tags: { $contains: [route.params.tag as string] } } })
  );
</script>
<template>
  <SEO :title="`${route.params.tag} - ${app.author}`" :description="app.description" />
  <div>
    <div class="flex flex-col h-36 gap-y-4 relative justify-center sm:gap-y-5 md:h-72">
      <h1 class="font-semibold text-4xl text-gray-900 sm:text-5xl dark:text-gray-100">
        <span class="capitalize">{{ route.params.tag }}</span>
      </h1>
      <div class="h-12">
        <ArticleSearch />
      </div>
    </div>
  </div>
  <ul class="space-y-4">
    <li v-for="(content, index) in data">
      <PostCard :post="content" :reverse="index % 2 === 1" />
    </li>
  </ul>
</template>
