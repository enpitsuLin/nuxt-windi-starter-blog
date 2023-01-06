///<reference types="unplugin-icons/types/vue"/>
///<reference types='@nuxtjs/google-fonts'/>

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-windicss', '@nuxtjs/google-fonts', ['unplugin-icons/nuxt', { autoInstall: true }]],
  googleFonts: {
    families: {
      Inter: true
    }
  }
});
