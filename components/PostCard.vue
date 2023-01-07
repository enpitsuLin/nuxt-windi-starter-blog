<script lang="ts" setup>
  import { PostContent } from '~~/composables/usePostContent';

  const props = withDefaults(defineProps<{ post: PostContent; reverse?: boolean }>(), { reverse: false });

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const format = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', options);
  };
</script>

<template>
  <Card
    as="article"
    :class="[reverse ? 'md:flex-row-reverse' : 'md:flex-row']"
    class="ring-2 ring-transparent cursor-pointer flex flex-col hover:ring-primary-500 transition-all duration-200"
  >
    <div class="bg-gray-100 w-full md:mb-0 md:w-md dark:bg-gray-900">
      <img width="864" height="378" :src="post.image" :alt="post.title" loading="lazy" />
    </div>
    <div class="m-2">
      <div class="mb-1 px-4">
        <dl>
          <dt class="sr-only">Publish on</dt>
          <dd class="font-medium mr-2 text-sm text-gray-500 dark:text-cloud-light">
            <time :datetime="post.date">
              {{ post.date ? format(post.date) : '' }}
            </time>
          </dd>
        </dl>
      </div>
      <div class="space-y-3 px-4">
        <div>
          <h1 class="font-bold text-body-xl mb-1">
            {{ post.title }}
          </h1>
          <div class="flex flex-wrap relative z-20">
            <Tag v-for="tag in post.tags" :tag="tag" />
          </div>
        </div>
        <p class="pb-4 text-gray-500 truncate sm:whitespace-normal dark:text-cloud-lighter">
          {{ post.summary }}
        </p>
      </div>
    </div>

    <NuxtLink :to="`blog${post._path}`" class="absolute inset-0 z-10"></NuxtLink>
  </Card>
</template>
