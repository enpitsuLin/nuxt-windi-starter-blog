<script lang="ts" setup>
const app = useAppConfig()
const NavLink = defineNuxtLink({
  componentName: 'NavLink',
  exactActiveClass: '',
  activeClass: 'active',
})
</script>

<template>
  <header
    class="bg-transparent shadow-sm top-0 left-0 z-20 sticky backdrop-filter backdrop-blur-8px backdrop-saturate-[180%] dark:shadow-gray-800"
  >
    <div class="flex mx-auto max-w-7xl py-5 px-4 items-center justify-between relative sm:px-6 lg:px-8">
      <MobileNav />
      <div>
        <NuxtLink :aria-label="app.headerTitle" to="/">
          <div class="flex items-center justify-between">
            <div class="mr-3">
              N
            </div>
            <div class="font-semibold h-6 text-2xl hidden sm:block">
              {{ app.headerTitle }}
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="flex text-base leading-5 items-center">
        <div class="space-x-4 hidden sm:block">
          <NavLink class="transition-all duration animate-ease-[cubic-bezier(0.4,0.1,0.2,1)] nav-button" to="/blog">
            Blog
          </NavLink>
          <NavLink class="transition-all duration animate-ease-[cubic-bezier(0.4,0.1,0.2,1)] nav-button" to="/tags">
            Tags
          </NavLink>
          <NavLink class="transition-all duration animate-ease-[cubic-bezier(0.4,0.1,0.2,1)] nav-button" to="/about">
            About
          </NavLink>
        </div>
        <ThemeSwitch />
      </div>
    </div>
  </header>
</template>
