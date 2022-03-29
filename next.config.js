/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    reactRoot: "concurrent",
    // runtime: "nodejs",
    // serverComponents: true,
    // concurrentFeatures: true,
    // serverComponents: true,
  },
};

module.exports = nextConfig;
