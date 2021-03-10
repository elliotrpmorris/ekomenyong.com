import CustomLink from './Link';
import Emoji from './Emoji';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <hr className="mt-10" />
      <footer>
        <div className="flex flex-col justify-around items-center md:flex-row md:items-baseline md:justify-between max-w-4xl px-4 mx-auto py-6">
          <div className="prose prose-indigo dark:prose-dark">
            <CustomLink href="https://github.com/ekomenyong/ekomenyong.com">
              <a>I made this</a>
            </CustomLink>{' '}
            with{' '}
            <CustomLink href="https://nextjs.org">
              <a>Next.js</a>
            </CustomLink>
            , and{' '}
            <CustomLink href="https://vercel.com/">
              <a>Vercel</a>
            </CustomLink>
            .
          </div>
          <div className="flex items-center justify-end pt-8 md:pt-0 space-x-10">
            <CustomLink href="https://github.com/ekomenyong" className="social-link">
              <FaGithub size="1.3em" />
            </CustomLink>
            <CustomLink href="https://www.twitter.com/ekomenyong/" className="social-link">
              <FaTwitter size="1.3em" />
            </CustomLink>
            <CustomLink href="https://www.linkedin.com/in/ekomenyong/" className="social-link">
              <FaLinkedin size="1.3em" />
            </CustomLink>
            <CustomLink href="mailto:hello@ekomenyong.com" className="social-link">
              <FaEnvelope size="1.3em" />
            </CustomLink>
          </div>
        </div>
      </footer>
    </>
  );
}
