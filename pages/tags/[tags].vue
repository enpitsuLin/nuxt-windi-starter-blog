<script setup lang="ts">
  const route = useRoute();
</script>
<template>
  <section>
    <h2>/blog/tags/[tags]</h2>
    <code>{{ JSON.stringify(route.params) }}</code>
  </section>
</template>
