<script setup lang="ts">
const app = useAppConfig()
const route = useRoute()
const current = Number(route.params.page!)

const { data } = await useAsyncData('blog', () => getPosts({ skip: (current - 1) * 5, limit: 5 }))

const total = computed(() => Math.ceil((data.value?.length ?? 0) / app.postPerPage))
</script>

<template>
  <SEO :title="`Page ${route.params.page} - ${app.author}`" :description="app.description" />
  <div>
    <div class="flex flex-col h-36 gap-y-4 relative justify-center sm:gap-y-5 md:h-72">
      <h1 class="font-semibold text-4xl text-gray-900 sm:text-5xl dark:text-gray-100">
        Posts
      </h1>
      <div class="h-12">
        <ArticleSearch />
      </div>
    </div>
  </div>
  <ul class="space-y-4">
    <li v-for="(content, index) in data" :key="content._id">
      <PostCard :post="content" :reverse="index % 2 === 1" />
    </li>
  </ul>
  <Pagination :total="total" :current="current" />
</template>
