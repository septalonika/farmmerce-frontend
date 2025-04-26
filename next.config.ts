import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const authPages = [
      "login",
      "register",
      "forgot-password",
      "reset-password",
    ];
    const pages = ["about", "contact", "privacy-policy", "terms-of-service"];

    const rewrites = [
      ...authPages.map((page) => {
        return {
          source: `/${page}`,
          destination: `/auth/${page}`,
        };
      }),
      ...pages.map((page) => {
        return {
          source: `/${page}`,
          destination: `/pages/${page}`,
        };
      }),
    ];

    return rewrites;
  },
};

export default nextConfig;
