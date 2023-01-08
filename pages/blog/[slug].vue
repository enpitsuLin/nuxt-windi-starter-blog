<script setup lang="ts">
  const route = useRoute();
  const slug = route.params.slug as string;
  const { query } = usePostContent();

  const { query: querySurround } = usePostContent();

  const { data } = await useAsyncData(`blog:${slug}`, () => query.where({ slug }).findOne());
  const { data: surroundData } = await useAsyncData(`blog:${slug}:surround`, async () => {
    const [prev, next] = await querySurround
      .sort({ date: 1 })
      .only(['title', 'slug'])
      .findSurround('/' + slug);
    return { prev, next };
  });

  if (!data.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
  }
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const format = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', options);
  };
</script>
<template>
  <template v-if="data">
    {{ JSON.stringify(surroundData) }}
    <SEO :title="data.title" :description="data.summary" />
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
        </div>
      </div>
    </article>
  </template>
</template>
