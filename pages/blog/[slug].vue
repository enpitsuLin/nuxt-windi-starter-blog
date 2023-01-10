<script setup lang="ts">
  const route = useRoute();
  const slug = route.params.slug as string;

  const { data } = await useAsyncData(`blog:${slug}`, () => getPost(slug));
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
    <article>
      <div class="xl-divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
        <header class="pt-12 xl:pb-4">
          <div class="border-b space-y-2 border-gray-200 text-center pb-12 dark:border-gray-700">
            <h1
              class="font-extrabold tracking-tight text-3xl text-gray-900 leading-9 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100"
            >
              {{ data.title }}
            </h1>
            <dl>
              <div>
                <dt class="sr-only">Published on</dt>
                <dd class="font-medium text-base text-gray-500 leading-6 dark:text-gray-400">
                  <time :datetime="data.date">{{ format(data.date) }}</time>
                </dd>
              </div>
            </dl>
          </div>
        </header>
        <div class="divide-y divide-gray-200 pb-8 xl:divide-y-0 dark:divide-gray-700">
          <div class="divide-y divide-gray-200 xl:pb-0 dark:divide-gray-700">
            <div class="max-w-none pt-4 pb-8">
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
  </template>
</template>
