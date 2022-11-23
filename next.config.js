require('dotenv').config();
const { DOMAIN_API, AUTH_TOKEN } = process.env;
const ROUTES = require('./src/constants/routes');

const nextConfig = {
  async rewrites() {
    return [
      {
        source: ROUTES.home.pattern,
        destination: ROUTES.home.page,
      },
      {
        source: ROUTES.about.pattern,
        destination: ROUTES.about.page,
      },
    ];
  },
  publicRuntimeConfig: { DOMAIN_API, AUTH_TOKEN },
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
