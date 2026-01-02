import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  allowedDevOrigins: ["192.168.1.3"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'foodblogliebe.de',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
