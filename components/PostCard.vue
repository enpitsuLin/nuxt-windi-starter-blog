<script lang="ts" setup>
  import { PostContent } from '~~/composables/usePostContent';

  const props = withDefaults(defineProps<{ post: PostContent; reverse?: boolean }>(), { reverse: false });
  const router = useRouter();
  const navigate = () => {
    router.push({ name: 'blog-slug', params: { slug: props.post._path?.slice(1) } });
  };

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const format = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', options);
  };
</script>

<template>
  <article
    :class="[reverse ? 'md:flex-row-reverse' : 'md:flex-row']"
    class="rounded-lg cursor-pointer flex flex-col shadow overflow-hidden dark:bg-[#0C0C0D] dark:shadow-dark-700 hover:bg-gray-50 dark:hover:bg-gray-900"
    @click="navigate"
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
            <NuxtLink :to="`blog${post._path}`">{{ post.title }}</NuxtLink>
          </h1>
          <div class="flex flex-wrap">
            <Tag v-for="tag in post.tags" :tag="tag" />
          </div>
        </div>
        <p class="pb-4 text-gray-500 truncate sm:whitespace-normal dark:text-cloud-lighter">
          {{ post.summary }}
        </p>
      </div>
    </div>
  </article>
</template>
