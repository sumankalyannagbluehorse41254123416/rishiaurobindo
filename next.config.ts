import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wip.tezcommerce.com",
        port: "3304",
        pathname: "/admin/module/**",
      },
      {
        protocol: "https",
        hostname: "www.rabedc.com",
        pathname: "/img/**",
      },
    ],
  },
};

export default nextConfig;