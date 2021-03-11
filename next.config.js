module.exports = {
  trailingSlash: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  async redirects() {
    return [
      {
        source: '/blog/core-web-vitals-understanding-lcp-fid-and-cls/',
        destination: '/posts/core-web-vitals-understanding-lcp-fid-and-cls/',
        permanent: true,
      },
      {
        source: '/blog/maximizing-conversions-from-low-traffic-landing-pages/',
        destination: '/posts/',
        permanent: true,
      },
      {
        source: '/blog/signs-of-an-unethical-seo-agency-or-freelancer/',
        destination: '/posts/',
        permanent: true,
      },
      {
        source: '/blog/how-important-is-technical-seo/',
        destination: '/posts/',
        permanent: true,
      },
    ];
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      require('./src/utils/generateSitemap');
      require('./src/utils/generateRSS');
    }

    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }
    return config;
  },
};
