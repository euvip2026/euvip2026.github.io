import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // GitHub Pages requires a fully static build and a basePath like "/repo-name".
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },

  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
};

export default nextConfig;
