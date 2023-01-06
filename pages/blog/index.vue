<script setup lang="ts">
  const app = useAppConfig();
</script>
<template>
  <SEO :title="`Blog - ${app.author}`" :description="app.description" />
  <section>
    <h2>/blog</h2>
  </section>
</template>
