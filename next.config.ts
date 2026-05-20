import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wire-to-web-magic.jainsanjna336.workers.dev",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
