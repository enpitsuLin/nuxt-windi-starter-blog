<script lang="ts" setup>
  import { PostContent } from '~~/composables/usePostContent';

  const props = defineProps<{ post: PostContent }>();
  const router = useRouter();
  const navigate = () => {
    router.push({ name: 'blog-slug', params: { slug: props.post._path } });
  };
  onMounted(() => {
    console.log(props.post);
  });
</script>

<template>
  <article
    class="rounded-lg cursor-pointer flex flex-col shadow overflow-hidden md:flex-row dark:bg-[#0C0C0D] dark:shadow-dark-700 hover:bg-gray-50 dark:hover:bg-zinc-900"
    @click="navigate"
  >
    <div class="bg-gray-100 w-full md:mb-0 md:w-md dark:bg-zinc-900">
      <img width="864" height="378" :src="post.image" :alt="post.title" loading="lazy" />
    </div>
    <div class="m-2">
      <div class="mb-1 px-4">
        <time :datetime="post.date" class="font-medium mr-2 text-sm text-gray-500 dark:text-cloud-light">
          {{ post.date ? new Date(post.date).toDateString() : '' }}
        </time>
      </div>
      <h1 class="font-bold text-body-xl mb-2 px-4">
        <NuxtLink :to="`blog${post._path}`">{{ post.title }}</NuxtLink>
      </h1>
      <p class="px-4 pb-4 text-gray-500 truncate sm:whitespace-normal dark:text-cloud-lighter">
        {{ post.summary }}
      </p>
    </div>
  </article>
</template>
