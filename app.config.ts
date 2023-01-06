const siteMetadata: import('@nuxt/schema').AppConfig = {
  title: 'Nuxt Stater Blog',
  author: 'enpituslin',
  description: 'A blog build with Nuxt 3 and sanity.io',
  headerTitle: 'NuxtBlog',
  language: 'en-US'
};

export default defineAppConfig(siteMetadata);

declare module '@nuxt/schema' {
  interface AppConfig {
    title: string;
    author: string;
    description: string;
    headerTitle: string;
    language: string;
  }
}
