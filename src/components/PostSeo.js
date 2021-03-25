import { NextSeo, ArticleJsonLd } from 'next-seo';

const PostSeo = ({ frontMatter }) => {
  return (
    <>
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
              alt: `Cover image for ${frontMatter.title}`,
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
        description={frontMatter.summary}
      />
    </>
  );
};

export default PostSeo;
