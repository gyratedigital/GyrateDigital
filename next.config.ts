import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-expect-error - 'turbopack' is a top-level property and requires an absolute path in Next.js 16
  turbopack: {
    root: process.cwd(),
  },
  // @ts-expect-error - 'allowedDevOrigins' has moved to the top level in Next.js 16
  allowedDevOrigins: ["192.168.1.3"],
};

export default nextConfig;
