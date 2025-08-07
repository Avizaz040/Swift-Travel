/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // Add your image domains here
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['swifttravels.com', 'localhost:3000'],
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Enable React Strict Mode (recommended)
  reactStrictMode: true,
  // Enable production browser source maps
  productionBrowserSourceMaps: true,
  // Configure webpack
  webpack: (config, { isServer }) => {
    // Important: return the modified config
    return config;
  },
}

module.exports = nextConfig