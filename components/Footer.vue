<script lang="ts" setup>
  const app = useAppConfig();
</script>

<template>
  <footer>
    <div class="w-full mt-16 flex items-baseline justify-between px-2">
      <div class="mb-8 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div>© {{ new Date().getFullYear() }}</div>
        <div>•</div>
        <div>{{ app.author }}</div>
      </div>
      <div class="mb-8 flex space-x-4">
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
