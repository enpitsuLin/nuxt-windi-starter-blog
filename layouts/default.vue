<template>
  <Header />
  <div
    class="flex flex-col mx-auto max-w-7xl opacity-100 px-4 transition translate-y-0 duration-700 relative sm:px-6 lg:px-8"
  >
    <div class="flex flex-col min-h-screen">
      <main class="mb-auto">
        <slot />
      </main>
      <Footer />
    </div>
  </div>
</template>
