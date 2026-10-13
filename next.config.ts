import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const hospedadoNoAmplify = Boolean(process.env.AWS_APP_ID);

const nextConfig: NextConfig = {
  output: hospedadoNoAmplify ? undefined : "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: projectRoot,
  },
  outputFileTracingRoot: projectRoot,
};

export default nextConfig;
