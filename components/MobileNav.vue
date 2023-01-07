<script lang="ts" setup>
  import { useToggle } from '@vueuse/core';

  const [show, toggleShowRaw] = useToggle(false);
  const toggleShow = (value?: boolean) => {
    toggleShowRaw(value);
    if (value) {
      document.documentElement.classList.add('overflow-hidden');
    } else {
      document.documentElement.classList.remove('overflow-hidden');
    }
  };
</script>

<template>
  <div class="flex items-center lg:hidden">
    <button class="inline-flex text-xl p-2" @click="toggleShow(true)">
      <svg width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h7"
        ></path>
      </svg>
    </button>
    <Teleport to="body">
      <Transition name="nav-fade">
        <div
          v-show="show"
          class="fixed top-0 w-full h-full z-40 backdrop-filter backdrop-blur-2px backdrop-saturate-[180%]"
          @click="toggleShow(false)"
        >
          <aside class="relative h-screen w-2/3 shadow bg-gray-50 dark:shadow-gray-800 dark:bg-gray-900 translate-x-0">
            <div class="bg-light-700 dark:bg-dark-400 flex lg:hidden items-center justify-between px-4 py-4.8">
              <button class="inline-flex text-xl p-2" @click="toggleShow(true)">
                <svg width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  ></path>
                </svg>
              </button>
            </div>
            <nav class="relative mt-8 h-full w-full">
              <NuxtLink
                to="/"
                class="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100 cursor-pointer"
                @click="toggleShow(false)"
              >
                <div class="px-6 py-4">Home</div>
              </NuxtLink>
              <NuxtLink
                to="/blog"
                class="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100 cursor-pointer"
                @click="toggleShow(false)"
              >
                <div class="px-6 py-4">Blog</div>
              </NuxtLink>
              <NuxtLink
                to="/tags"
                class="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100 cursor-pointer"
                @click="toggleShow(false)"
              >
                <div class="px-6 py-4">Tags</div>
              </NuxtLink>
              <NuxtLink
                to="/about"
                class="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100 cursor-pointer"
                @click="toggleShow(false)"
              >
                <div class="px-6 py-4">About</div>
              </NuxtLink>
            </nav>
          </aside>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
<style>
  .nav-fade-enter-active,
  .nav-fade-leave-active {
    transition: all 200ms;
  }
  .nav-fade-enter-from,
  .nav-fade-enter-active,
  .nav-fade-enter-to,
  .nav-fade-leave-from,
  .nav-fade-leave-active,
  .nav-fade-leave-to {
    overflow: hidden !important;
  }
  .nav-fade-enter-from,
  .nav-fade-leave-to {
    opacity: 0;
  }
  .nav-fade-enter-to,
  .nav-fade-leave-from {
    opacity: 1;
  }
  .nav-fade-enter-from,
  .nav-fade-leave-to {
    transform: translateX(-100%);
  }
</style>
