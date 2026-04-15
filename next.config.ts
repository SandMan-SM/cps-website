import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wecanhelpout.com",
      },
    ],
  },
};

export default nextConfig;
