<script lang="ts" setup>
  import FaEnvelope from '~icons/fa/envelope';
  import FaFacebook from '~icons/fa/facebook';
  import FaGithub from '~icons/fa/github';
  import FaLinkedin from '~icons/fa/linkedin';
  import FaTwitter from '~icons/fa/twitter';
  import FaYoutube from '~icons/fa/youtube';
  export type SocialType = 'facebook' | 'github' | 'mail' | 'youtube' | 'linkedin' | 'twitter';
  defineProps<{ type: SocialType; href: string }>();
  const components: Record<SocialType, typeof FaEnvelope> = {
    mail: FaEnvelope,
    github: FaGithub,
    facebook: FaFacebook,
    youtube: FaYoutube,
    twitter: FaTwitter,
    linkedin: FaLinkedin
  };
</script>

<template>
  <a
    :href="href"
    class="text-sm text-gray-500 transition hover:text-gray-600"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span class="sr-only">{{ type }}</span>
    <component
      :is="components[type]"
      class="fill-current text-gray-700 hover:text-green-400 dark:text-gray-200 h-6 w-6"
    />
  </a>
</template>

<style scoped></style>
