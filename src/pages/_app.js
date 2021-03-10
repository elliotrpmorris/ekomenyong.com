import '@/styles/tailwind.css';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from '@/theme/ThemeContext';
import SEO from '../../next-seo.config';
export function reportWebVitals(metric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <MDXProvider>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
