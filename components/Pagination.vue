<script lang="ts" setup>
const { total, current } = defineProps<{ total: number; current: number }>()
const hasPrev = current - 1 > 0
const hasNext = current + 1 <= total
</script>

<template>
  <div aria-label="pagination" class="space-y-2 pt-6 pb-8 md:space-y-5">
    <nav class="flex justify-between items-center">
      <BlogButton :to="current - 1 === 1 ? `/blog/` : `/blog/page/${current - 1}`" :disabled="!hasPrev">
        <span>Prev</span>
      </BlogButton>
      <span>{{ current }} of {{ total }}</span>

      <BlogButton :to="`/blog/page/${current + 1}`" :disabled="!hasNext">
        <span>Next</span>
      </BlogButton>
    </nav>
  </div>
</template>
