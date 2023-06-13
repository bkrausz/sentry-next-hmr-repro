const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  swcMinify: true,
  output: "standalone",
};

nextConfig = withSentryConfig(nextConfig);

module.exports = nextConfig;
