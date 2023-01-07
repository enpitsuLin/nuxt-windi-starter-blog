<script lang="ts" setup>
  const app = useAppConfig();
  const NavLink = defineNuxtLink({
    componentName: 'NavLink',
    exactActiveClass: '',
    activeClass: 'active'
  });
</script>

<template>
  <header
    class="bg-transparent shadow-sm dark:shadow-gray-800 top-0 left-0 z-20 sticky backdrop-filter backdrop-blur-8px backdrop-saturate-[180%]"
  >
    <div class="flex py-5 items-center justify-between mx-auto sm:px-6 lg:px-8 px-4 max-w-7xl relative">
      <div>
        <NuxtLink :aria-label="app.headerTitle" to="/">
          <div class="flex items-center justify-between">
            <div class="mr-3">N</div>
            <div class="font-semibold h-6 text-2xl hidden sm:block">{{ app.headerTitle }}</div>
          </div>
        </NuxtLink>
      </div>
      <div class="flex text-base leading-5 items-center">
        <div class="hidden sm:block space-x-4">
          <NavLink class="nav-button duration transition-all animate-ease-[cubic-bezier(0.4,0.1,0.2,1)]" to="/blog">
            Blog
          </NavLink>
          <NavLink class="nav-button duration transition-all animate-ease-[cubic-bezier(0.4,0.1,0.2,1)]" to="/tags">
            Tags
          </NavLink>
          <NavLink class="nav-button duration transition-all animate-ease-[cubic-bezier(0.4,0.1,0.2,1)]" to="/about">
            About
          </NavLink>
        </div>
        <ThemeSwitch />
      </div>
    </div>
  </header>
</template>
