import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  publicRuntimeConfig: {
    RUNTIME_VARIABLE: process.env.RUNTIME_VARIABLE,
  },
};

export default nextConfig;
