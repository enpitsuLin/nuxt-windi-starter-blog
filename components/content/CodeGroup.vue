<script lang="ts" setup>
import type { Slots, VNode } from 'vue'
import TabsHeader from './TabsHeader.vue'

function isTag(slot: any, tag: string): boolean {
  return slot.type && slot.type.tag && slot.type.tag === tag
}
const activeTabIndex = ref(0)
const tabsHeader = ref<InstanceType<typeof TabsHeader>>()
const $slots = useSlots()

const slots = computed(() => $slots.default?.() || [])
const tabs = computed(() => {
  return slots.value
    .filter(slot => isTag(slot, 'code-block') || isTag(slot, 'code'))
    .map((slot, index) => {
      return {
        label: slot?.props?.filename || slot?.props?.label || `${index}`,
        active: slot?.props?.active || false,
        component: slot,
      }
    })
})

function renderPreviewCanvas(slot: VNode<any, any, any>) {
  return (slot.children as Slots)?.default?.() ?? h('div')
}
</script>

<template>
  <div border rounded-md border-secondary-400 overflow-hidden>
    <TabsHeader ref="tabsHeader" v-model:activeTabIndex="activeTabIndex" :tabs="tabs" />
    <div class="code-group-content">
      <div
        v-for="(slot, index) in slots"
        :key="index"
        :class="index === activeTabIndex ? 'block' : 'hidden'"
      >
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
