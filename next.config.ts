import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "www.ibmindonesia.com",
      "images.unsplash.com",
      "images.pexels.com",
      "media.istockphoto.com",
    ], // <<<< Tambahin domain ini
  },
};

export default nextConfig;
