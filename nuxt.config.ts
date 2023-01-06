///<reference types="unplugin-icons/types/vue"/>
///<reference types='@nuxtjs/google-fonts'/>
///<reference types='@nuxt/content'/>

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', 'nuxt-windicss', '@nuxtjs/google-fonts', ['unplugin-icons/nuxt', { autoInstall: true }]],
  googleFonts: {
    families: {
      Inter: true
    }
  },
  content: {},
  extends: '@nuxt-themes/typography'
});
