export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image-edge',
    '@unocss/nuxt',
    '@nuxtjs/google-fonts',
  ],
  css: [
    '@unocss/reset/tailwind.css',
    '~/styles/base.css',
    '~/styles/scrollbars.css',
  ],
  googleFonts: {
    families: {
      Inter: true,
    },
  },
  content: {
    highlight: {
      theme: { default: 'light-plus', dark: 'dark-plus' },
      preload: ['python', 'javascript'],
    },
  },
  experimental: {
    payloadExtraction: false,
  },
})
