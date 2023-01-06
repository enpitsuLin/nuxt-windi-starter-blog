<script setup lang="ts">
  const app = useAppConfig();
</script>
<template>
  <SEO :title="`About - ${app.author}`" :description="app.description" />
  <section>
    <h2>/about</h2>
  </section>
</template>
