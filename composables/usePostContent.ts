import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types';

export interface PostContent extends MarkdownParsedContent {
  tags?: string[];
  /** ISO Format Date String */
  date?: string;
  image?: string;
  /** inject by `~/server/plugins/content-slug` */
  slug: string;
}
export const usePostContent = () => {
  const query = queryContent<PostContent>();
  return { query };
};
