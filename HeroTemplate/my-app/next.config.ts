import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   turbopack: {
    root: __dirname, // tells Next.js this is the root
  },
};

export default nextConfig;
