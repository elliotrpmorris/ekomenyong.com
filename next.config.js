module.exports = {
  trailingSlash: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  async rewrites() {
    return [
      {
        source: '/blog/core-web-vitals-understanding-lcp-fid-and-cls/',
        destination: '/posts/core-web-vitals-understanding-lcp-fid-and-cls/',
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
