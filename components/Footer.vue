<script lang="ts" setup>
  const app = useAppConfig();
</script>

<template>
  <footer>
    <div class="flex mt-16 w-full px-2 items-baseline justify-between">
      <div class="flex space-x-2 text-sm mb-8 text-gray-500 dark:text-gray-400">
        <div>© {{ new Date().getFullYear() }}</div>
        <div>{{ app.author }}</div>
        <div>•</div>
        <div>{{ app.description }}</div>
      </div>
      <div class="flex space-x-4 mb-8">
        <SocialIcon type="mail" :href="`mailto:${app.socialMedia.mail}`" />
        <SocialIcon type="github" :href="app.socialMedia.github" />
        <SocialIcon type="facebook" :href="app.socialMedia.facebook" />
        <SocialIcon type="youtube" :href="app.socialMedia.youtube" />
        <SocialIcon type="linkedin" :href="app.socialMedia.linkedin" />
        <SocialIcon type="twitter" :href="app.socialMedia.twitter" />
      </div>
    </div>
  </footer>
</template>
