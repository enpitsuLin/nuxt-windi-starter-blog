<script lang="ts" setup>
  defineProps<{ title: string; description: string }>();
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="robots" content="follow, index" />
    <Meta name="description" :content="description" />
  </Head>
</template>
