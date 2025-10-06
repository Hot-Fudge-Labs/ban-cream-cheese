import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable image optimization for external domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'], // Use modern formats
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console.logs in production
  },
  
  // Enable React strict mode for better error detection
  reactStrictMode: true,
  
  // Optimize production builds
  poweredByHeader: false, // Remove X-Powered-By header
  compress: true, // Enable gzip compression
};

export default nextConfig;
