// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

// next.config.js
module.exports = {
    images: {
      domains: ['image.tmdb.org'],
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
          config.resolve.alias['@mui/material'] = '@mui/material';
      }

      return config;
  },
  };
  