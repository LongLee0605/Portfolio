/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build into a separate directory to avoid intermittent .next/trace lock on Windows.
  distDir: ".next-build",
};

export default nextConfig;
