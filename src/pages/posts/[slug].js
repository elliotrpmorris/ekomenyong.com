import hydrate from 'next-mdx-remote/hydrate';

import { getFiles, getFileBySlug, getAllFilesFrontMatter } from '@/lib/mdx';
import BlogLayout from '@/components/layouts/blog';
import MDXComponents from '@/components/MDXComponents';
import BlogTitle from 'src/components/BlogTitle';
import Emoji from 'src/components/Emoji';
import CustomLink from 'src/components/Link';

export default function BlogPost({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return (
    <>
      {frontMatter.draft !== true ? (
        <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>
      ) : (
        <BlogLayout frontMatter={frontMatter}>
          <h2 className="text-center">
            Well this is certainly awkward... <Emoji emoji="🥴" label="Awkward face emoji" />
          </h2>
          <div className="max-w-lg mx-auto text-center">
            <p className="prose prose-indigo prose-lg">
              This content doesn't exist yet. Why don't you{' '}
              <CustomLink href="/posts">
                <a>view or search blog posts</a>
              </CustomLink>{' '}
              or go to the{' '}
              <CustomLink href="/">
                <a>homepage</a>
              </CustomLink>
              ?
            </p>
          </div>
        </BlogLayout>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles('posts');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('posts');
  const postIndex = allPosts.findIndex((post) => post.slug === params.slug);
  const prev = allPosts[postIndex + 1] || null;
  const next = allPosts[postIndex - 1] || null;
  const post = await getFileBySlug('posts', params.slug);

  return { props: post };
}
