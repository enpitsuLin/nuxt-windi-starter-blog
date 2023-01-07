<script setup lang="ts">
  import { nextTick, ref, watch } from 'vue';

  const props = defineProps<{ tabs: { label: string }[]; activeTabIndex: number }>();

  const emit = defineEmits<{ (e: 'update:activeTabIndex', p: number): void }>();

  const tabsRef = ref<HTMLDivElement>();

  const highlightUnderline = ref<HTMLSpanElement>();

  const updateHighlightUnderlinePosition = (activeTab: HTMLButtonElement) => {
    if (!activeTab || !highlightUnderline.value) {
      return;
    }

    highlightUnderline.value.style.left = `${activeTab.offsetLeft}px`;
    highlightUnderline.value.style.width = `${activeTab.clientWidth}px`;
  };

  const updateTabs = ($event: MouseEvent, i: number) => {
    emit('update:activeTabIndex', i);
    nextTick(() => updateHighlightUnderlinePosition($event.target as HTMLButtonElement));
  };

  watch(
    tabsRef,
    (newVal) => {
      if (!newVal) {
        return;
      }

      setTimeout(() => {
        updateHighlightUnderlinePosition(tabsRef.value!.children[props.activeTabIndex] as HTMLButtonElement);
      }, 50);
    },
    {
      immediate: true
    }
  );
</script>

<template>
  <div class="tabs-header">
    <div v-if="tabs" ref="tabsRef" class="tabs">
      <button
        v-for="({ label }, i) in tabs"
        :key="`${i}${label}`"
        :class="[
          'py-2.5 px-4 relative leading-4 tracking-tight select-none transition-colors duration-100',
          activeTabIndex === i
            ? 'text-gray-500 dark:text-gray-300'
            : 'text-gray-700 hover:text-gray-800 hover:bg-gray-300 dark:text-gray-200 dark:hover:text-gray-200 dark:hover:bg-gray-700'
        ]"
        @click="updateTabs($event, i)"
      >
        {{ label }}
      </button>
      <span ref="highlightUnderline" class="highlight-underline">
        <span class="flex h-full bg-gray-100 w-full dark:bg-gray-900" />
      </span>
    </div>

    <slot name="footer" />
  </div>
</template>
<style scoped>
  .tabs-header {
    @apply bg-gray-200 text-red-700 relative dark:bg-gray-800 dark:text-red-500;
  }
  .tabs-header .tabs {
    @apply flex px-2 z-0 relative overflow-x-auto;
  }
  .tabs-header .tabs .highlight-underline {
    transition-property: left, width;
    @apply h-full top-0 -z-1 duration-150 absolute;
  }
</style>
