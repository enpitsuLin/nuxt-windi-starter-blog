///<reference types="unplugin-icons/types/vue"/>

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image-edge',
    'nuxt-windicss',
    '@nuxtjs/google-fonts',
    ['unplugin-icons/nuxt', { autoInstall: true }]
  ],
  googleFonts: {
    families: {
      Inter: true
    }
  },
  content: {
    highlight: {
      theme: { default: 'light-plus', dark: 'dark-plus' },
      preload: ['python', 'javascript']
    }
  },
  extends: '@nuxt-themes/typography',
  experimental: {
    payloadExtraction: false
  },
  routeRules: {
    // prerendered pages
    '/': { prerender: true },
    '/blog/**': { prerender: true },
    '/tags/**': { prerender: true }, // defaults
    '/**': { cache: { swr: true, maxAge: 120, staleMaxAge: 60, headersOnly: true }, prerender: false }
  }
});
