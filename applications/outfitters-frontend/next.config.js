/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'outfitters.com.pk',
      },
    ],
  },
};

module.exports = nextConfig;
