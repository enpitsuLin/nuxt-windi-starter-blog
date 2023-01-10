import type { MarkdownParsedContent, QueryBuilderWhere } from '@nuxt/content/dist/runtime/types';

export interface PostContent extends MarkdownParsedContent {
  tags: string[];
  /** ISO Format Date String */
  date: string;
  image?: string;
  /** inject by `~/server/plugins/content-slug` */
  slug: string;
}

export const getQueryContentBuilder = () => {
  const query = queryContent<PostContent>();
  return query;
};

interface QueryOption {
  where?: QueryBuilderWhere;
  limit?: number;
  skip?: number;
}

export const getPosts = async ({ where, limit, skip }: QueryOption = {}) => {
  let query = getQueryContentBuilder().sort({ date: -1 });
  if (where) query = query.where(where);
  if (skip) query = query.skip(skip);
  if (limit) query = query.limit(limit);
  return query.find();
};

export const getPost = async (slug: string) => {
  const query = getQueryContentBuilder();
  const querySurround = getQueryContentBuilder();
  const post = await query.where({ slug }).findOne();
  try {
    const [prev, next] = await querySurround.only(['slug', 'title']).sort({ date: 1 }).findSurround({ slug });
    return { post, prev, next } as {
      post: PostContent;
      prev: Pick<PostContent, 'title' | 'slug'>;
      next: Pick<PostContent, 'title' | 'slug'>;
    };
  } catch (error) {
    console.error(error);
  }
};

export const getTags = async () => {
  const posts = await getPosts();
  return posts
    .map((post) => post.tags ?? [])
    .flat()
    .reduce((map, tag) => ({ ...map, [tag]: tag in map ? map[tag] + 1 : 1 }), {} as Record<string, number>);
};
