import Image from 'next/image';
import CustomLink from './Link';
import Emoji from './Emoji';

export default function AboutHeading({ imgSrc }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between my-12 max-w-4xl mx-auto px-4 md:px-0">
      <Image src={imgSrc} width={200} height={200} className="rounded-full mx-auto" />
      <div className="prose prose-indigo prose-lg mx-auto pt-6 md:pt-0 text-center md:text-left">
        <p>
          I'm Ekom Enyong, a Senior SEO professional and hobby Jamstack developer.{' '}
          <CustomLink href="https://www.linkedin.com/in/ekomenyong/">
            For nearly 10 years,
          </CustomLink>{' '}
          I've been helping SMBs, large, and global companies clients get to the top of Google.
        </p>
        <p>
          I am on a self-taught developer journey{' '}
          <Emoji emoji="👩🏾‍💻" label="Girl working behind a laptop screen" />. I enjoy working remotely
          based out of Charlotte.
        </p>
      </div>
    </div>
  );
}
