<script lang="ts" setup>
  import { Slots, VNode } from 'vue';
  import TabsHeader from './TabsHeader.vue';

  const isTag = (slot: any, tag: string): boolean => {
    return slot.type && slot.type.tag && slot.type.tag === tag;
  };
  const activeTabIndex = ref(0);
  const tabsHeader = ref<InstanceType<typeof TabsHeader>>();
  const $slots = useSlots();

  const slots = $slots.default?.() || [];
  const tabs = slots
    .filter((slot) => isTag(slot, 'code-block') || isTag(slot, 'code'))
    .map((slot, index) => {
      return {
        label: slot?.props?.filename || slot?.props?.label || `${index}`,
        active: slot?.props?.active || false,
        component: slot
      };
    });

  const renderPreviewCanvas = (slot: VNode<any, any, any>) => {
    return (slot.children as Slots)?.default?.() ?? h('div');
  };
</script>

<template>
  <div class="code-group" :class="activeTabIndex === 0 && 'first-tab'">
    <TabsHeader v-model:activeTabIndex="activeTabIndex" ref="tabsHeader" :tabs="tabs" />
    <div class="code-group-content">
      <div v-for="(slot, index) in slots" :class="index === activeTabIndex ? 'block' : 'hidden'">
        <template v-if="isTag(slot, 'code')">
          <component :is="slot" />
        </template>
        <template v-else>
          <div class="preview-canvas">
            <component :is="renderPreviewCanvas(slot)" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style>
  .code-group {
    @apply border-secondary-400 border rounded-md overflow-hidden;
  }
  .code-group .prose-code {
    @apply m-0 border-none rounded-none;
  }
  .code-group .filename {
    @apply hidden;
  }
  .preview-canvas {
    @apply p-4;
  }
  .preview-canvas:has(.sandbox): {
    @apply p-0;
  }
  .preview-canvas .sandbox: {
    @apply border-0 rounded-none;
  }
</style>