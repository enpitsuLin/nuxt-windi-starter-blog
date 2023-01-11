<script setup lang="ts">
  const route = useRoute();
  const slug = route.params.slug as string;

  const { data } = await useAsyncData(`blog:${slug}`, () => getPost(slug));
  if (!data.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
  }
  const { data: latestPost } = await useAsyncData('home', () => getPosts({ limit: 5 }));
  const { data: surroundData } = await useAsyncData(() => getSurround(slug));

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const format = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', options);
  };
  const prev = computed(() => surroundData.value?.prev);
  const next = computed(() => surroundData.value?.next);
</script>
<template>
  <template v-if="data">
    <SEO :title="data.title ?? ''" :description="data.description" />
    <div class="col-span-10 relative lg:col-span-8">
      <section class="flex flex-col-reverse gap-8 relative lg:grid lg:grid-cols-12">
        <div class="flex flex-col order-1 lg:col-span-3 lg:self-start sticky top-20 z-20 lg:pt-8">
          <div class="flex flex-col mt-4 py-1 px-1 hidden lg:mt-0 lg:block">
            <span class="font-semibold text-sm items-center hidden overflow-hidden lg:flex">
              <h2>Tags</h2>
            </span>
            <div role="listbox" class="p-1 flex flex-wrap">
              <div role="listitem" v-for="tag in data.tags">
                <Tag :tag="tag" />
              </div>
            </div>
          </div>
          <div class="flex flex-col mt-4 py-1 px-1 hidden lg:mt-0 lg:block">
            <span class="font-semibold text-sm items-center hidden overflow-hidden lg:flex">
              <h2>Latest Post</h2>
            </span>
            <ul class="p-1 divide-y divide-dashed divide-gray-500">
              <li v-for="item in latestPost" class="py-2">
                <NuxtLink
                  :to="`/blog/${item.slug}`"
                  class="text-sm text-gray-500 block lg:pr-3 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
                >
                  <span class="text-gray-300 dark:text-gray-500">{{ format(item.date) }}</span>
                  <p>{{ item.title }}</p>
                </NuxtLink>
              </li>
            </ul>
          </div>
          <ProseToc v-if="data.body.toc.links.length > 0" :links="data.body.toc.links" />
        </div>
        <article class="col-span-10 docs-page lg:col-span-9">
          <div class="xl-divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
            <header class="border-b border-gray-200 pt-6 xl:pb-4 dark:border-gray-700">
              <div class="space-y-2 text-center">
                <dl>
                  <div>
                    <dt class="sr-only">Published on</dt>
                    <dd class="font-medium text-base text-gray-500 leading-6 dark:text-gray-400">
                      <time :datetime="data.date">{{ format(data.date) }}</time>
                    </dd>
                  </div>
                </dl>
                <h1
                  class="font-extrabold tracking-tight text-3xl text-gray-900 leading-9 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100"
                >
                  {{ data.title }}
                </h1>
                <div v-if="data.image" class="pt-4">
                  <NuxtImg
                    class="rounded-lg h-full w-full"
                    :src="data.image"
                    fit="cover"
                    :alt="data.title"
                    loading="lazy"
                  />
                </div>
              </div>
            </header>
            <div class="divide-y divide-gray-200 pb-8 xl:divide-y-0 dark:divide-gray-700">
              <div class="divide-y divide-gray-200 xl:pb-0 dark:divide-gray-700">
                <div class="max-w-none pb-8">
                  <ContentRenderer :value="data" />
                </div>
                <div class="py-6 text-gray-700 dark:text-gray-200">Comments</div>
              </div>
              <footer>
                <div
                  class="font-medium divide-gray-200 text-sm leading-5 xl:divide-y xl:col-start-1 xl:row-start-2 dark:divide-gray-700"
                >
                  <div v-if="next || prev" class="flex py-4 justify-between xl:space-y-8 xl:py-8 xl:block">
                    <div v-if="prev">
                      <h2 class="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">Previous Article</h2>
                      <div class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                        <NuxtLink :href="`/blog/${prev.slug}`">{{ prev.title }}</NuxtLink>
                      </div>
                    </div>

                    <div v-if="next">
                      <h2 class="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">Next Article</h2>
                      <div class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                        <NuxtLink :href="`/blog/${next.slug}`">{{ next.title }}</NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </article>
      </section>
    </div>
  </template>
</template>
