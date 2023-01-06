<script setup lang="ts">
  const app = useAppConfig();
</script>
<template>
  <SEO :title="app.title" :description="app.description" />
  <section class="h-[120vh]">
    <h2>/</h2>
    <ul>
      <li>
        <NuxtLink to="/blog">/blog</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog/some-slug">/blog/some-slug</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/tags">/tags</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/tags/some-tag">/tags/some-tag</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog/page/1">/blog/page/1</NuxtLink>
      </li>
    </ul>
  </section>
</template>
