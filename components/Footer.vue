<script lang="ts" setup>
const app = useAppConfig()
</script>

<template>
  <footer>
    <div class="flex flex-col mt-16 w-full px-2 items-center justify-between lg:flex-row-reverse lg:items-baseline">
      <div class="flex space-x-4 mb-4 md:mb-8">
        <SocialIcon type="mail" :href="`mailto:${app.socialMedia.mail}`" />
        <SocialIcon type="github" :href="app.socialMedia.github" />
        <SocialIcon type="facebook" :href="app.socialMedia.facebook" />
        <SocialIcon type="youtube" :href="app.socialMedia.youtube" />
        <SocialIcon type="linkedin" :href="app.socialMedia.linkedin" />
        <SocialIcon type="twitter" :href="app.socialMedia.twitter" />
      </div>
      <div class="flex space-x-2 text-sm mb-12 text-gray-500 lg:mb-8 dark:text-gray-400">
        <div>© {{ new Date().getFullYear() }}</div>
        <div>•</div>
        <div>{{ app.author }}</div>
        <div>•</div>
        <div>{{ app.title }}</div>
      </div>
    </div>
  </footer>
</template>
