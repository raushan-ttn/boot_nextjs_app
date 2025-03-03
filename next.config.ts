import type { NextConfig } from "next";
import bundleAnalyzerImport from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzerImport({
  enabled: process.env.ANALYZE === "true",
});
const nextConfig: NextConfig = {
  compress: true, // Enable compression
  reactStrictMode: true,
  /* config options here */
  publicRuntimeConfig: {
    RUNTIME_VARIABLE: process.env.RUNTIME_VARIABLE,
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};

export default withBundleAnalyzer(nextConfig);

// ANALYZE=true npm run build  // to run the bundle analyzer
// npm run build // to build the app
