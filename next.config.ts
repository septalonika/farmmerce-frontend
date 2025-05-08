import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "www.ibmindonesia.com",
      "images.unsplash.com",
      "images.pexels.com",
      "media.istockphoto.com",
      "www.organicfood.com",
      "upload.wikimedia.org",
      "asset-2.tstatic.net",
      "lenteradesa.id",
    ], // <<<< Tambah domain yang diizinkan untuk gambar
  },
};

export default nextConfig;
