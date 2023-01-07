<script setup lang="ts">
  const app = useAppConfig();
  const { query } = usePostContent();

  const { data } = await useAsyncData('tags', () =>
    query.find().then((contents) =>
      contents
        .map((content) => content.tags!)
        .flat()
        .reduce((map, tag) => ({ ...map, [tag]: tag in map ? map[tag] + 1 : 1 }), {} as Record<string, number>)
    )
  );
</script>
<template>
  <SEO :title="`Tags - ${app.author}`" :description="app.description" />
  <section>
    <h2>/tags</h2>
    <code>
      <pre>{{ JSON.stringify(data, null, 2) }}</pre>
    </code>
  </section>
</template>
