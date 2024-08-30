/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  distDir: "_next",
  // swcMinify: false,
  images: {
    domains: ["https://cloudinary.com"], // Use only the hostname
  },
};

export default nextConfig;
