import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tadda-web.web.app",
      },
    ],
  },
};

export default nextConfig;