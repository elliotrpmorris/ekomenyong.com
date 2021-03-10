import dayjs from 'dayjs';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import AppContainer from '../AppContainer';
import BlogTitle from '../BlogTitle';
import CustomLink from '../Link';

const editUrl = (slug) =>
  `https://github.com/ekomenyong/ekomenyong.com/edit/main/src/data/posts/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://ekomenyong.com/posts/${slug}`
  )}`;

export default function BlogLayout({ children, frontMatter }) {
  return (
    <AppContainer>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.summary}
        canonical={`https://ekomenyong.com/posts/${frontMatter.slug}`}
        openGraph={{
          url: `https://ekomenyong.com/posts/${frontMatter.slug}`,
          title: `${frontMatter.title}`,
          description: `${frontMatter.summary}`,
          images: [
            {
              url: `https://ekomenyong.com${frontMatter.image}`,
              width: 1200,
              height: 720,
              alt: 'Cover Image for Understanding Core Web Vitals Web Post',
            },
          ],
        }}
        twitter={{
          handle: '@EkomEnyong',
          site: '@EkomEnyong',
          cardType: 'summary_large_image',
        }}
      />
      <ArticleJsonLd
        url={`https://ekomenyong.com/posts/${frontMatter.slug}`}
        title={frontMatter.title}
        images={[`https://ekomenyong.com${frontMatter.image}`]}
        datePublished={`${frontMatter.publishedAt}`}
        dateModified={`${frontMatter.lastmod}`}
        authorName="Ekom Enyong"
        publisherName="EkomEnyong.com"
        publisherLogo="https://ekomenyong.com/img/ekom-enyong-header.jpg"
        description={frontMatter.summary}
      />
      <article className="max-w-3xl mx-auto px-0 md:px-4 my-24">
        <BlogTitle>{frontMatter.title}</BlogTitle>
        <div className="flex flex-col md:flex-row items-center justify-between pb-4">
          <p className=" prose prose-indigo text-gray-700 dark:text-gray-200">
            Written by:{' '}
            <CustomLink href="about">
              <a className="text-gray-700">Ekom Enyong</a>
            </CustomLink>
          </p>
          <span className="text-gray-600 dark:text-gray-200 italic">
            {dayjs(frontMatter.publishedAt).format('MMM DD, YYYY')}
            {' — '}
            {frontMatter.readingTime.text}
          </span>
        </div>
        <div className="prose prose-indigo prose-lg dark:prose-dark max-w-4xl mx-auto my-12">
          {children}
        </div>
        <div className="flex flex-row items-center justify-center text-sm space-x-4">
          <CustomLink href={discussUrl(frontMatter.slug)}>
            <a className="text-gray-600 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-gray-400">
              Discuss on Twitter
            </a>
          </CustomLink>
          <span>•</span>
          <CustomLink href={editUrl(frontMatter.slug)}>
            <a className="text-gray-600 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-gray-400">
              Edit on GitHub
            </a>
          </CustomLink>
        </div>
      </article>
    </AppContainer>
  );
}
