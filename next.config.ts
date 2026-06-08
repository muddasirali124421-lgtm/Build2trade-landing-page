import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
