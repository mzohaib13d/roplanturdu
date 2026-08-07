import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',
  // Required if using Next.js <Image /> component in static exports:
  images: {
    unoptimized: true,
  },
};

export default nextConfig;