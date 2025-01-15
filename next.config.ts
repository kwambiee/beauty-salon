import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // configure images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.usegalileo.ai',
        port: '',
        pathname: '/sdxl10/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
