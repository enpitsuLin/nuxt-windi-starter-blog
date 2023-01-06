<script setup lang="ts">
  const app = useAppConfig();
  const { query } = usePostContent();
  const contents = await query.limit(5).find();
</script>
<template>
  <SEO :title="app.title" :description="app.description" />
  <section class="h-[120vh]">
    <div class="space-y-4">
      <PostCard v-for="content in contents" :post="content" />
    </div>
  </section>
</template>
