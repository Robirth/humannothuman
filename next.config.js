const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
  images: {
    domains: ['cdn.builder.io'],
  },
  // add other configurations here if needed
});

module.exports = nextConfig;
