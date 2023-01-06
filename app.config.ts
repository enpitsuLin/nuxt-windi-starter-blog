const siteMetadata: import('@nuxt/schema').AppConfig = {
  title: 'Nuxt Stater Blog',
  author: 'enpituslin',
  description: 'A blog build with Nuxt 3 and sanity.io',
  headerTitle: 'NuxtBlog',
  language: 'en-US',
  socialMedia: {
    mail: 'address@yoursite.com',
    github: 'https://github.com',
    twitter: 'https://twitter.com/Twitter',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
    linkedin: 'https://www.linkedin.com'
  }
};

export default defineAppConfig(siteMetadata);

declare module '@nuxt/schema' {
  interface AppConfig {
    title: string;
    author: string;
    description: string;
    headerTitle: string;
    language: string;
    socialMedia: {
      mail: string;
      github: string;
      facebook: string;
      youtube: string;
      linkedin: string;
      twitter: string;
    };
  }
}
