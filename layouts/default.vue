<template>
  <Header></Header>
  <div class="mx-auto max-w-6xl px-4 sm:px-6 xl:max-w-8xl xl:px-0">
    <div class="flex h-screen flex-col">
      <main class="mb-auto">
        <slot></slot>
      </main>
      <Footer></Footer>
    </div>
  </div>
</template>
