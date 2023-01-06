<script lang="tsx">
  import TabsHeader from './TabsHeader.vue';

  const isTag = (slot: any, tag: string): boolean => {
    return slot.type && slot.type.tag && slot.type.tag === tag;
  };

  export default defineComponent({
    data() {
      return {
        activeTabIndex: 0
      };
    },
    render() {
      const slots = this.$slots?.default?.() || [];
      const tabs = slots
        .filter((slot) => isTag(slot, 'code-block') || isTag(slot, 'code'))
        .map((slot, index) => {
          return {
            label: slot?.props?.filename || slot?.props?.label || `${index}`,
            active: slot?.props?.active || false,
            component: slot
          };
        });
      return (
        <div class={['code-group', this.activeTabIndex === 0 && 'first-tab']}>
          <TabsHeader
            ref="tabs-header"
            activeTabIndex={this.activeTabIndex}
            tabs={tabs}
            onUpdate:activeTabIndex={(e) => (this.activeTabIndex = e)}
          />
          <div class={{ class: 'code-group-content', text: this.activeTabIndex }}>
            {slots.map((slot, index) => (
              <div class={index === this.activeTabIndex ? 'block' : 'hidden'}>
                {isTag(slot, 'code') ? (
                  slot
                ) : (
                  <div class="preview-canvas">{(slot.children as any)?.default?.() || <div></div>}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }
  });
</script>

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
