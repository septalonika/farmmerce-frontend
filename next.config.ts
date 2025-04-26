import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const authPages = [
      "login",
      "register",
      "forgot-password",
      "reset-password",
    ]; // Auth Pages to be moved to /auth directory

    const pages = ["about", "contact", "privacy-policy", "terms-of-service"]; // Pages in this array will be route to the /pages directory, this array just an example you can add more pages as needed

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

    return rewrites; // result of this code, for examples : Instead of writing /auth/login, you can just write /login and it will be redirected to /auth/login
  },
};

export default nextConfig;
