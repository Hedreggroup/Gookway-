/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "_next",
  swcMinify: false,

  trailingSlash: true,
  images: {
    domains: ["https://cloudinary.com"], // Use only the hostname
    loader: "custom",
    loaderFile: "./ImageLoader.js",
  },
};

export default nextConfig;
