import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
import remarkGfm from 'remark-gfm';

export const docs = defineDocs({
  dir: 'content',
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkGfm],
  },
});
