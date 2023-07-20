<script lang="ts" setup>
export type SocialType = 'facebook' | 'github' | 'mail' | 'youtube' | 'linkedin' | 'twitter'
defineProps<{ type: SocialType; href: string }>()
const icons: Record<SocialType, string> = {
  mail: 'i-fa:envelope',
  github: 'i-fa:github',
  facebook: 'i-fa:facebook',
  youtube: 'i-fa:youtube',
  twitter: 'i-fa:twitter',
  linkedin: 'i-fa:linkedin',
}
</script>

<template>
  <a
    :href="href"
    class="text-sm transition text-gray-500 hover:text-gray-600"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span class="sr-only">{{ type }}</span>
    <div
      :class="icons[type]" h-6 w-6
      text="gray-700 dark:gray-200 hover:green-400"
    />
  </a>
</template>

<style scoped></style>
