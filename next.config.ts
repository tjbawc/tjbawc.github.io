import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/nextjs-blog",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
