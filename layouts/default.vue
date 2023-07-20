<template>
  <Header />
  <div
    flex="~ col" mxa max-w-6xl relative p="x4 sm:x6 lg:x8"
    class="opacity-100  transition translate-y-0 duration-700"
  >
    <div flex="~ col" min-h-screen>
      <main mb-auto>
        <slot />
      </main>
      <Footer />
    </div>
  </div>
</template>
