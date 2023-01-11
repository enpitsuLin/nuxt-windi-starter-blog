<script lang="tsx" setup>
  import { TocLink } from '@nuxt/content/dist/runtime/types';
  import { useToggle } from '@vueuse/core';
  import { PropType } from 'vue';

  defineProps<{ links: TocLink[] }>();

  const [show, toggleShow] = useToggle(false);

  const HeadingList = defineComponent({
    props: { links: { type: Object as PropType<TocLink[]> } },
    render() {
      return (
        <ul class="px-1">
          {this.links?.map((link) => (
            <li class={['min-w-0 group', link.depth > 1 && 'pl-3']}>
              <a
                href={`#${link.id}`}
                class="text-sm py-1 text-gray-500 block truncate lg:pr-3 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-50"
                dynamic-class={[
                  false && 'font-semibold text-sm py-1 text-green-500 block truncate lg:pr-3 dark:text-green-400'
                ]}
              >
                {link.text}
              </a>
              {link.children?.length !== 0 && <HeadingList links={link.children} />}
            </li>
          ))}
        </ul>
      );
    }
  });
</script>

<template>
  <div
    class="flex-1 -mx-4 px-4 backdrop-filter overflow-x-hidden backdrop-blur-md sm:-mx-6 sm:px-6 lg:mx-0 lg:max-h-[calc(100vh-80px)] lg:px-0 lg:z-0"
  >
    <div class="border-b border-gray-200 py-3 lg:border-none lg:py-0 dark:border-gray-700">
      <button class="flex gap-3 items-center lg:hidden" tabindex="-1" @click="toggleShow()">
        <span class="font-semibold text-sm text-gray-900 leading-6 dark:text-gray-50">Table of Contents</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="'h-5 transform transition-transform text-gray-400 w-5 duration-100 icon dark:text-gray-500'"
          :class="[show ? 'rotate-90' : 'rotate-0']"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M15.54 11.29L9.88 5.64a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.41l4.95 5L8.46 17a1 1 0 0 0 0 1.41a1 1 0 0 0 .71.3a1 1 0 0 0 .71-.3l5.66-5.65a1 1 0 0 0 0-1.47Z"
          ></path>
        </svg>
      </button>
      <nav
        class="flex flex-col space-y-1 mt-4 py-1 px-1 hidden sm:space-y-2 lg:mt-0 lg:block"
        :style="show ? 'display:flex' : ''"
      >
        <span class="font-semibold text-sm items-center hidden overflow-hidden lg:flex">
          <h2>Table of Contents</h2>
        </span>
        <HeadingList :links="links" />
      </nav>
    </div>
  </div>
</template>
