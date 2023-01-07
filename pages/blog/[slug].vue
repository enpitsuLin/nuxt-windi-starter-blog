<script setup lang="ts">
  const route = useRoute();
  const slug = route.params.slug as string;
</script>
<template>
  <section>
    <ContentDoc :path="slug" v-slot="{ doc }">
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </section>
</template>
