<script setup lang="ts">
  const props = defineProps<{ error: Object }>();
  const backToHome = () => clearError({ redirect: '/' });
</script>
<template>
  <section>
    <h2>error page</h2>
    <code>
      <pre>{{ JSON.stringify(props, null, 2) }}</pre>
    </code>
    <button @click="backToHome">back to home</button>
  </section>
</template>
