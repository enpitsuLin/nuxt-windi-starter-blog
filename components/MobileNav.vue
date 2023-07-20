<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints, useToggle } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

const hidden = breakpoints.greaterOrEqual('lg')
const [show, toggleShowRaw] = useToggle(false)
function toggleShow(value?: boolean) {
  toggleShowRaw(value)
  if (value)
    document.documentElement.classList.add('overflow-hidden')
  else
    document.documentElement.classList.remove('overflow-hidden')
}
</script>

<template>
  <div class="flex items-center lg:hidden">
    <button class="text-xl p-2 inline-flex" @click="toggleShow(true)">
      <svg width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h7"
        />
      </svg>
    </button>
    <Teleport to="body">
      <Transition name="nav-fade">
        <div
          v-show="show && !hidden"
          class="h-full w-full top-0 z-40 fixed backdrop-filter backdrop-blur-2px backdrop-saturate-[180%]"
          @click="toggleShow(false)"
        >
          <aside class="h-screen bg-gray-50 shadow w-2/3 translate-x-0 relative dark:bg-gray-900 dark:shadow-gray-800">
            <div class="flex bg-light-700 py-4.8 px-4 items-center justify-between lg:hidden dark:bg-dark-400">
              <button class="text-xl p-2 inline-flex" @click="toggleShow(true)">
                <svg width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </button>
            </div>
            <nav class="h-full mt-8 w-full relative">
              <NuxtLink
                to="/"
                class="cursor-pointer font-bold tracking-widest text-2xl text-gray-900 dark:text-gray-100"
                @click="toggleShow(false)"
              >
                <div class="py-4 px-6">
                  Home
                </div>
              </NuxtLink>
              <NuxtLink
                to="/blog"
                class="cursor-pointer font-bold tracking-widest text-2xl text-gray-900 dark:text-gray-100"
                @click="toggleShow(false)"
              >
                <div class="py-4 px-6">
                  Blog
                </div>
              </NuxtLink>
              <NuxtLink
                to="/tags"
                class="cursor-pointer font-bold tracking-widest text-2xl text-gray-900 dark:text-gray-100"
                @click="toggleShow(false)"
              >
                <div class="py-4 px-6">
                  Tags
                </div>
              </NuxtLink>
              <NuxtLink
                to="/about"
                class="cursor-pointer font-bold tracking-widest text-2xl text-gray-900 dark:text-gray-100"
                @click="toggleShow(false)"
              >
                <div class="py-4 px-6">
                  About
                </div>
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
