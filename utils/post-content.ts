import type { MarkdownParsedContent, QueryBuilderWhere } from '@nuxt/content/dist/runtime/types'

export interface PostContent extends MarkdownParsedContent {
  tags: string[]
  /** ISO Format Date String */
  date: string
  image?: string
  /** inject by `~/server/plugins/content-slug` */
  slug: string
}

export function getQueryContentBuilder() {
  const query = queryContent<PostContent>()
  return query
}

interface QueryOption {
  where?: QueryBuilderWhere
  limit?: number
  skip?: number
}

export async function getPosts({ where, limit, skip }: QueryOption = {}) {
  let query = getQueryContentBuilder().sort({ date: -1 })
  if (where)
    query = query.where(where)
  if (skip)
    query = query.skip(skip)
  if (limit)
    query = query.limit(limit)
  return query.find()
}

export async function getPost(slug: string) {
  const query = getQueryContentBuilder()
  const post = await query.where({ slug }).findOne()

  return post
}

export async function getSurround(slug: string) {
  const query = getQueryContentBuilder()
  const [prev = null, next = null] = (await query.only(['slug', 'title']).sort({ date: 1 }).findSurround({ slug })) as [
    Pick<PostContent, 'title' | 'slug'> | null,
    Pick<PostContent, 'title' | 'slug'> | null,
  ]
  return { prev, next }
}

export async function getTags() {
  const posts = await getPosts()
  return posts
    .map(post => post.tags ?? [])
    .flat()
    .reduce((map, tag) => ({ ...map, [tag]: tag in map ? map[tag] + 1 : 1 }), {} as Record<string, number>)
}
