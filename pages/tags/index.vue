<script setup lang="ts">
  const app = useAppConfig();
</script>
<template>
  <SEO :title="`Tags - ${app.author}`" :description="app.description" />
  <section>
    <h2>/tags</h2>
  </section>
</template>
