<script setup lang="ts">
  const app = useAppConfig();
  const route = useRoute();
</script>
<template>
  <SEO :title="`${route.params.tag} - ${app.author}`" :description="app.description" />
  <section>
    <h2>/blog/tags/[tags]</h2>
    <code>{{ JSON.stringify(route.params) }}</code>
  </section>
</template>
