/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  typescript: {
    ignoreBuildErrors: true, // currently type error in latest next + next-auth. Let's just ignore it.
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
