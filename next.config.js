/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["images.pexels.com", "randomwordgenerator.com", "example.com"],
  },
};

module.exports = nextConfig;
