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
    class="cursor-pointer flex flex-col ring-transparent p-0 transition-shadow ring-2 duration-200 hover:ring-primary-500"
  >
    <div class="bg-gray-100 w-full pb-0 relative md:mb-0 lg:w-2/7 dark:bg-gray-900">
      <NuxtImg
        class="h-full w-full inset-0 relative md:absolute"
        :src="post.image"
        fit="cover"
        :alt="post.title"
        loading="lazy"
      />
    </div>
    <div class="m-3 w-full lg:w-5/7">
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
          <h1 class="font-bold text-body-xl mb-1 text-gray-900 dark:text-white">
            {{ post.title }}
          </h1>
          <div class="flex-wrap z-20 inline-flex relative">
            <Tag v-for="tag in post.tags" :tag="tag" />
          </div>
        </div>
        <p class="pb-4 text-gray-500 truncate sm:whitespace-normal dark:text-cloud-lighter">
          {{ post.summary }}
        </p>
      </div>
    </div>

    <NuxtLink :to="`/blog${post._path}`" class="inset-0 z-10 absolute" :title="post.title" />
  </Card>
</template>
